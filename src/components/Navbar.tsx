function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-xl font-black tracking-[0.25em]"
        >
          INFERNUM
        </a>

        <nav className="hidden gap-8 text-sm font-bold tracking-wide text-white/60 md:flex">
          <a
            href="#rave"
            className="transition hover:text-white"
          >
            RAVE
          </a>

          <a
            href="#bochka"
            className="transition hover:text-white"
          >
            BOCHKA
          </a>

          <a
            href="#rankings"
            className="transition hover:text-white"
          >
            TOPLISTA
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
