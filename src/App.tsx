function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black tracking-[0.25em]">
            INFERNUM
          </h1>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#rave" className="hover:text-white">
              RAVE
            </a>

            <a href="#bochka" className="hover:text-white">
              BOCHKA
            </a>

            <a href="#rankings" className="hover:text-white">
              TOPLISTA
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="flex min-h-[80vh] items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
              RAVE • BOCHKA • UNDERGROUND
            </p>

            <h2 className="text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
              INFERNUM
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              Egy magyar underground zenei platform,
              ahol megismerheted a rave kultúrát,
              a bochka hangzást és megszavazhatod
              a kedvenceidet.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#rankings"
                className="rounded-full bg-white px-7 py-3 font-bold text-black transition hover:bg-white/80"
              >
                TOPLISTÁK
              </a>

              <a
                href="#rave"
                className="rounded-full border border-white/20 px-7 py-3 font-bold transition hover:bg-white/10"
              >
                MI AZ A RAVE?
              </a>
            </div>
          </div>
        </section>

        <section
          id="rave"
          className="border-t border-white/10 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
              01
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Mi az a rave?
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/60">
              Ide fog kerülni a rave kultúráról szóló
              részletes magyarázat.
            </p>
          </div>
        </section>

        <section
          id="bochka"
          className="border-t border-white/10 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
              02
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Mi az a bochka?
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/60">
              Ide kerül majd a bochka zenei stílus
              bemutatása.
            </p>
          </div>
        </section>

        <section
          id="rankings"
          className="border-t border-white/10 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
              03
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Toplisták
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold">DJ-k</h3>
                <p className="mt-2 text-white/50">
                  Szavazás a kedvenc DJ-kre.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold">Helyszínek</h3>
                <p className="mt-2 text-white/50">
                  A legjobb rave helyszínek.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold">
                  Bulisorozatok
                </h3>
                <p className="mt-2 text-white/50">
                  A legjobb party sorozatok.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        INFERNUM © 2026
      </footer>
    </div>
  )
}

export default App
