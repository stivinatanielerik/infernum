import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6">
        <div className="mx-auto w-full max-w-6xl">

          <p className="mb-6 text-sm font-bold tracking-[0.4em] text-red-500">
            HUNGARIAN UNDERGROUND
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            RAVE
            <br />
            UNDERGROUND
            <br />
            CULTURE
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Az Infernum a magyar underground elektronikus zenei
            kultúra felfedezésére és közösségi építésére létrehozott
            platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/rave"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/80"
            >
              MI AZ A RAVE?
            </Link>

            <a
              href="#rankings"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition hover:border-white/50"
            >
              RANKINGEK
            </a>
          </div>

        </div>
      </section>


      {/* RAVE */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            number="01"
            title="Mi az a rave?"
            description="A rave nem csupán egy zenei műfaj, hanem egy kulturális jelenség, amelynek középpontjában az elektronikus zene, a közösségi élmény és a tánc áll."
          />

          <div className="mt-12">
            <Link
              to="/rave"
              className="inline-block text-sm font-bold text-red-500 transition hover:text-red-400"
            >
              TUDJ MEG TÖBBET →
            </Link>
          </div>

        </div>
      </section>


      {/* BOCHKA */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            number="02"
            title="Bochka"
            description="Egy magyar underground közegben használt elnevezés egy jellegzetes, kemény elektronikus hangzásra."
          />

          <div className="mt-12">
            <Link
              to="/bochka"
              className="inline-block text-sm font-bold text-red-500 transition hover:text-red-400"
            >
              FEDEZD FEL →
            </Link>
          </div>

        </div>
      </section>


      {/* RANKINGS */}
      <section
        id="rankings"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            number="03"
            title="Rankingek"
            description="A közösség szavazatai alapján összeállított listák DJ-kről, rave helyszínekről és party sorozatokról."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <RankingPreview
              title="DJ-k"
              description="Szavazz a kedvenc underground DJ-idre."
            />

            <RankingPreview
              title="Helyszínek"
              description="Fedezd fel a közösség által értékelt rave helyszíneket."
            />

            <RankingPreview
              title="Party sorozatok"
              description="Ismerd meg a meghatározó party sorozatokat."
            />

          </div>

        </div>
      </section>


      {/* ZENEI VILÁG */}
<section className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">

    <SectionHeading
      number="04"
      title="Zenei világ"
      description="Fedezd fel az underground elektronikus zene különböző irányzatait."
    />

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <GenrePreview
        name="Bochka"
        description="Magyar underground közegben használt kemény elektronikus hangzás."
        to="/bochka"
      />

      <GenrePreview
        name="Hardtekk"
        description="Gyors, kemény és groove-központú elektronikus zenei irányzat."
        to="/hardtekk"
      />

      <GenrePreview
        name="Hardcore"
        description="Gyors, intenzív és erőteljes elektronikus zenei irányzat."
        to="/hardcore"
      />

      <GenrePreview
        name="Hardstyle"
        description="Erőteljes kickek, dallamok és nagy energiájú hangzás."
        to="/hardstyle"
      />

      <GenrePreview
        name="Industrial"
        description="Sötét, nyers és kísérletező hangzás az undergroundból."
        to="/industrial"
      />

      <GenrePreview
        name="Hard Techno"
        description="Kemény, sötét és intenzív techno erőteljes kickekkel és gyors tempóval."
        to="/hardtechno"
      />

      <GenrePreview
        name="Frenchcore"
        description="Gyors hardcore irányzat erőteljes kickekkel, energikus ritmusokkal és francia underground gyökerekkel."
        to="/frenchcore"
      />

    </div>

  </div>
</section>

    </main>
  )
}


/*
|--------------------------------------------------------------------------
| RankingPreview
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| GenrePreview
|--------------------------------------------------------------------------
*/

type GenrePreviewProps = {
  name: string
  description: string
  to: string
}

function GenrePreview({
  name,
  description,
  to,
}: GenrePreviewProps) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-white/10 p-7 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.03]"
    >

      <h3 className="text-2xl font-black uppercase">
        {name}
      </h3>

      <p className="mt-3 leading-7 text-white/40">
        {description}
      </p>

      <span className="mt-8 inline-block text-sm font-bold text-red-500 transition group-hover:translate-x-1">
        FELFEDEZEM →
      </span>

    </Link>
  )
}


export default Home