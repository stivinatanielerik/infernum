import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-xl font-black tracking-[0.25em]"
        >
          INFERNUM
        </Link>

        <nav className="hidden gap-8 text-sm font-bold tracking-wide text-white/60 md:flex">

          <Link
            to="/genres"
            className="transition hover:text-white"
          >
            ZENEI MŰFAJOK
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar