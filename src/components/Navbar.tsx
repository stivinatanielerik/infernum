import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={`${import.meta.env.BASE_URL}infernum_logo_01.png`}
            alt="Infernum"
            className="h-16 w-16 object-contain"
          />

          <span className="text-xl font-black tracking-[0.25em]">
            INFERNUM
          </span>
        </Link>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 text-sm font-bold tracking-wide text-white/60 md:flex">

          <Link
            to="/"
            className="transition hover:text-white"
          >
            TUDJ MEG TÖBBET
          </Link>

          <Link
            to="/esemenyek"
            className="transition hover:text-white"
          >
            ESEMÉNYEINK
          </Link>

          <Link
            to="/galeria"
            className="transition hover:text-white"
          >
            GALÉRIA
          </Link>

          <Link
            to="/toplista"
            className="transition hover:text-white"
          >
            TOPLISTA
          </Link>

          <Link
            to="/bejelentkezes"
            className="rounded-full border border-white/20 px-5 py-2 text-white transition hover:border-white/50"
          >
            BEJELENTKEZÉS
          </Link>

        </nav>

      </div>
    </header>
  )
}

export default Navbar