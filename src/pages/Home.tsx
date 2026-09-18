import SectionHeading from '../components/SectionHeading'

function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            RAVE • BOCHKA • UNDERGROUND
          </p>

          <h1 className="text-7xl font-black uppercase leading-none tracking-tight md:text-9xl">
            INFERNUM
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Magyar rave és underground elektronikus zenei
            kultúra egy helyen.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#rankings"
              className="rounded-full bg-white px-8 py-3 font-bold text-black transition hover:bg-white/80"
            >
              TOPLISTÁK
            </a>

            <a
              href="#rave"
              className="rounded-full border border-white/20 px-8 py-3 font-bold transition hover:bg-white/10"
            >
              FEDEZD FEL
            </a>
          </div>
        </div>
      </section>

      <section
        id="rave"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="01"
            title="Mi az a rave?"
            description="A rave kultúra története, kialakulása és helye az elektronikus zenei színtéren."
          />
        </div>
      </section>

      <section
        id="bochka"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="02"
            title="Mi az a bochka?"
            description="A bochka hangzás, eredete és kapcsolata a magyar underground elektronikus zenei kultúrával."
          />
        </div>
      </section>

      <section
        id="rankings"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            number="03"
            title="Toplisták"
            description="Szavazz a kedvenc DJ-idre, helyszíneidre és bulisorozataidra."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <RankingPreview
              title="DJ-k"
              description="Kik uralják a pultot?"
            />

            <RankingPreview
              title="Helyszínek"
              description="Hol történnek a legjobb bulik?"
            />

            <RankingPreview
              title="Bulisorozatok"
              description="Melyik sorozatot nem érdemes kihagyni?"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

type RankingPreviewProps = {
  title: string
  description: string
}

function RankingPreview({
  title,
  description,
}: RankingPreviewProps) {
  return (
    <div className="group rounded-2xl border border-white/10 p-7 transition hover:border-white/30 hover:bg-white/[0.03]">
      <h3 className="text-2xl font-black uppercase">
        {title}
      </h3>

      <p className="mt-3 text-white/40">
        {description}
      </p>

      <span className="mt-8 inline-block text-sm font-bold text-red-500">
        MEGNÉZEM →
      </span>
    </div>
  )
}

export default Home
