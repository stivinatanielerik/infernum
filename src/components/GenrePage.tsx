import SectionHeading from './SectionHeading'

export type GenreData = {
  number: string
  name: string
  subtitle: string
  description: string
  sound: string
  bpm: string
  history: string
  relatedGenres: string[]
  scene: string
}

type GenrePageProps = {
  genre: GenreData
}

function GenrePage({ genre }: GenrePageProps) {
  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          number={genre.number}
          title={genre.name}
          description={genre.subtitle}
        />

        <div className="mt-16 max-w-4xl">
          <p className="text-xl leading-9 text-white/70">
            {genre.description}
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          <InfoCard
            title="Hangzás"
            text={genre.sound}
          />

          <InfoCard
            title="Tempó / BPM"
            text={genre.bpm}
          />

          <InfoCard
            title="Története"
            text={genre.history}
          />

          <InfoCard
            title="Magyar underground"
            text={genre.scene}
          />

        </div>

        <section className="mt-20 border-t border-white/10 pt-12">
          <h3 className="text-2xl font-black uppercase">
            Kapcsolódó műfajok
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {genre.relatedGenres.map((relatedGenre) => (
              <span
                key={relatedGenre}
                className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold text-white/60"
              >
                {relatedGenre}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

type InfoCardProps = {
  title: string
  text: string
}

function InfoCard({ title, text }: InfoCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 p-7 transition hover:border-white/20 hover:bg-white/[0.02]">
      <h3 className="text-2xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-white/50">
        {text}
      </p>
    </article>
  )
}

export default GenrePage
