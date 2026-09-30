import { useEffect, useState } from 'react'

import SectionHeading from '../components/SectionHeading'

import {
  getToplist,
  vote,
  type ToplistCategory,
  type ToplistItem,
} from '../lib/toplist'

import { useAuth } from '../context/AuthContext'

function Toplista() {
  const { user } = useAuth()

  const [category, setCategory] =
    useState<ToplistCategory>('genre')

  const [items, setItems] = useState<ToplistItem[]>([])

  const [loading, setLoading] = useState(true)

  const [error, setError] =
    useState<string | null>(null)

  const [voting, setVoting] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadToplist() {
      try {
        setLoading(true)
        setError(null)

        const data = await getToplist(
          category,
          user,
        )

        setItems(data)
      } catch (err) {
        console.error(err)

        setError(
          'Nem sikerült betölteni a toplistát.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadToplist()
  }, [category, user])

  async function handleVote(
    itemId: string,
    value: 1 | -1,
  ) {
    if (!user) {
      setError(
        'A szavazáshoz be kell jelentkezned.',
      )

      return
    }

    try {
      setVoting(itemId)
      setError(null)

      await vote(itemId, value)

      const updatedItems = await getToplist(
        category,
        user,
      )

      setItems(updatedItems)
    } catch (err: any) {
      console.error(err)

      setError(
        err?.message ||
          'Nem sikerült leadni a szavazatot.',
      )
    } finally {
      setVoting(null)
    }
  }

  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-6xl">

        {/* FEJLÉC */}
        <SectionHeading
          number="02"
          title="Toplista"
          description="Szavazz fel vagy le a kedvenc underground műfajaidra, helyszíneidre és bulisorozataidra."
        />

        {/* KATEGÓRIÁK */}
        <div className="mt-12 flex flex-wrap gap-3">

          <CategoryButton
            active={category === 'genre'}
            onClick={() => setCategory('genre')}
          >
            ZENEI MŰFAJOK
          </CategoryButton>

          <CategoryButton
            active={category === 'venue'}
            onClick={() => setCategory('venue')}
          >
            HELYSZÍNEK
          </CategoryButton>

          <CategoryButton
            active={category === 'party_series'}
            onClick={() =>
              setCategory('party_series')
            }
          >
            BULISOROZATOK
          </CategoryButton>

        </div>

        {/* HIBAÜZENET */}
        {error && (
          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* LISTA */}
        <div className="mt-12 space-y-4">

          {loading && (
            <p className="text-white/40">
              Toplista betöltése...
            </p>
          )}

          {!loading &&
            !error &&
            items.length === 0 && (
              <p className="text-white/40">
                Ebben a kategóriában még nincs adat.
              </p>
            )}

          {!loading &&
            items.map((item, index) => (
              <ToplistRow
                key={item.id}
                item={item}
                position={index + 1}
                user={user}
                voting={voting === item.id}
                onVote={handleVote}
              />
            ))}

        </div>

      </div>
    </main>
  )
}


/* ============================================
   CATEGORY BUTTON
============================================ */

type CategoryButtonProps = {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function CategoryButton({
  active,
  onClick,
  children,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
        active
          ? 'border-red-500 bg-red-500 text-white'
          : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}


/* ============================================
   TOPLIST ROW
============================================ */

type ToplistRowProps = {
  item: ToplistItem
  position: number
  user: ReturnType<typeof useAuth>['user']
  voting: boolean
  onVote: (
    itemId: string,
    value: 1 | -1,
  ) => void
}

function ToplistRow({
  item,
  position,
  user,
  voting,
  onVote,
}: ToplistRowProps) {
  return (
    <article className="rounded-2xl border border-white/10 p-6 transition hover:border-white/20">

      {/* FELSŐ RÉSZ */}
      <div className="flex items-center gap-6">

        {/* HELYEZÉS */}
        <div className="w-10 shrink-0 text-2xl font-black text-white/20">
          {String(position).padStart(2, '0')}
        </div>

        {/* NÉV + LEÍRÁS */}
        <div className="min-w-0 flex-1">

          <h3 className="text-xl font-black uppercase">
            {item.name}
          </h3>

          {item.description && (
            <p className="mt-1 text-sm text-white/40">
              {item.description}
            </p>
          )}

        </div>

        {/* SCORE */}
        <div className="hidden text-right sm:block">

          <div className="text-2xl font-black">
            {item.score}
          </div>

          <div className="text-xs font-bold tracking-wider text-white/30">
            SCORE
          </div>

        </div>

      </div>


      {/* SZAVAZÁS */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">

        {/* UP */}
        <button
          type="button"
          disabled={voting}
          onClick={() =>
            onVote(item.id, 1)
          }
          className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
            item.userVote === 1
              ? 'border-green-500 bg-green-500/10 text-green-400'
              : 'border-white/10 text-white/50 hover:border-green-500/50 hover:text-green-400'
          } disabled:opacity-50`}
        >
          ▲ UP {item.upvotes}
        </button>


        {/* DOWN */}
        <button
          type="button"
          disabled={voting}
          onClick={() =>
            onVote(item.id, -1)
          }
          className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
            item.userVote === -1
              ? 'border-red-500 bg-red-500/10 text-red-400'
              : 'border-white/10 text-white/50 hover:border-red-500/50 hover:text-red-400'
          } disabled:opacity-50`}
        >
          ▼ DOWN {item.downvotes}
        </button>


        {/* LOGIN FIGYELMEZTETÉS */}
        {!user && (
          <span className="text-xs text-white/30 sm:ml-auto">
            Bejelentkezés szükséges a szavazáshoz
          </span>
        )}

      </div>

    </article>
  )
}

export default Toplista