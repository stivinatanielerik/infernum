import { supabase } from './supabase'
import type { User } from '@supabase/supabase-js'

export type ToplistCategory =
  | 'genre'
  | 'venue'
  | 'party_series'

export type ToplistItem = {
  id: string
  name: string
  category: ToplistCategory
  description: string | null
  image_url: string | null
  upvotes: number
  downvotes: number
  score: number
  userVote: 1 | -1 | null
}

export async function getToplist(
  category: ToplistCategory,
  user: User | null,
): Promise<ToplistItem[]> {

  // ITEMS
  const { data: items, error: itemsError } =
    await supabase
      .from('items')
      .select(
        'id, name, category, description, image_url',
      )
      .eq('category', category)

  if (itemsError) {
    throw itemsError
  }

  // VOTES
  const itemIds = (items ?? []).map(
    (item) => item.id,
  )

  let votes: {
    item_id: string
    user_id: string
    vote: 1 | -1
  }[] = []

  if (itemIds.length > 0) {
    const { data, error: votesError } =
      await supabase
        .from('votes')
        .select('item_id, user_id, vote')
        .in('item_id', itemIds)

    if (votesError) {
      throw votesError
    }

    votes = (data ?? []) as typeof votes
  }

  return (items ?? [])
    .map((item) => {

      const itemVotes = votes.filter(
        (vote) => vote.item_id === item.id,
      )

      const upvotes = itemVotes.filter(
        (vote) => vote.vote === 1,
      ).length

      const downvotes = itemVotes.filter(
        (vote) => vote.vote === -1,
      ).length

      const currentUserVote =
        user
          ? itemVotes.find(
              (vote) =>
                vote.user_id === user.id,
            )?.vote ?? null
          : null

      return {
        id: item.id,
        name: item.name,
        category:
          item.category as ToplistCategory,
        description: item.description,
        image_url: item.image_url,
        upvotes,
        downvotes,
        score: upvotes - downvotes,
        userVote: currentUserVote,
      }
    })
    .sort((a, b) => b.score - a.score)
}


export async function vote(
  itemId: string,
  value: 1 | -1,
) {
  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error(
      'A szavazáshoz be kell jelentkezned.',
    )
  }

  // Megnézzük, van-e már szavazata.
  const { data: existingVote, error: findError } =
    await supabase
      .from('votes')
      .select('id, vote')
      .eq('user_id', user.id)
      .eq('item_id', itemId)
      .maybeSingle()

  if (findError) {
    throw findError
  }

  // Ha ugyanarra a gombra kattintott,
  // töröljük a szavazatát.
  if (
    existingVote &&
    existingVote.vote === value
  ) {
    const { error } = await supabase
      .from('votes')
      .delete()
      .eq('id', existingVote.id)

    if (error) {
      throw error
    }

    return null
  }

  // Ha másik irányú szavazata van,
  // átváltjuk.
  if (existingVote) {
    const { error } = await supabase
      .from('votes')
      .update({
        vote: value,
      })
      .eq('id', existingVote.id)

    if (error) {
      throw error
    }

    return value
  }

  // Ha még nem szavazott,
  // létrehozzuk.
  const { error } = await supabase
    .from('votes')
    .insert({
      user_id: user.id,
      item_id: itemId,
      vote: value,
    })

  if (error) {
    throw error
  }

  return value
}