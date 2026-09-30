import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn, signUp, signOut } from '../lib/auth'
import { useAuth } from '../context/AuthContext'

function Bejelentkezes() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [isRegistering, setIsRegistering] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (isRegistering) {
        const data = await signUp(email, password)

        if (!data.session) {
          setMessage(
            'Sikeres regisztráció. Ellenőrizd az emailedet a megerősítéshez.',
          )
        } else {
          navigate('/toplista')
        }
      } else {
        await signIn(email, password)

        navigate('/toplista')
      }
    } catch (err: any) {
      setError(
        err?.message ||
          'Hiba történt. Próbáld újra.',
      )
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    return (
      <main className="min-h-screen px-6 pb-28 pt-40">
        <div className="mx-auto max-w-xl">

          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
            ACCOUNT
          </p>

          <h1 className="text-4xl font-black uppercase md:text-6xl">
            Bejelentkezve
          </h1>

          <p className="mt-6 text-lg text-white/50">
            {user.email}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

          <button
            type="button"
            onClick={() => navigate('/toplista')}
            className="rounded-full bg-red-500 px-6 py-3 text-sm font-bold transition hover:bg-red-400"
          >
            TOPLISTA →
          </button>

          <button
            type="button"
            onClick={async () => {
              await signOut()
            }}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white/60 transition hover:border-white/40 hover:text-white"
          >
            KIJELENTKEZÉS
          </button>

        </div>

        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 pb-28 pt-40">
      <div className="mx-auto max-w-xl">

        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
          ACCOUNT
        </p>

        <h1 className="text-4xl font-black uppercase md:text-6xl">
          {isRegistering
            ? 'Regisztráció'
            : 'Bejelentkezés'}
        </h1>

        <p className="mt-6 leading-8 text-white/50">
          {isRegistering
            ? 'Hozd létre a fiókodat, hogy szavazhass az Infernum toplistáin.'
            : 'Jelentkezz be, hogy szavazhass és kedvenceket jelölhess.'}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-5"
        >

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-white/60"
            >
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-red-500"
              placeholder="email@example.com"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-white/60"
            >
              JELSZÓ
            </label>

            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-red-500"
              placeholder="Legalább 6 karakter"
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* MESSAGE */}
          {message && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60">
              {message}
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-500 px-6 py-4 text-sm font-black uppercase transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? 'FOLYAMATBAN...'
              : isRegistering
                ? 'REGISZTRÁCIÓ'
                : 'BEJELENTKEZÉS'}
          </button>

        </form>

        {/* SWITCH */}
        <div className="mt-8 border-t border-white/10 pt-8">

          <p className="text-sm text-white/40">
            {isRegistering
              ? 'Már van fiókod?'
              : 'Még nincs fiókod?'}
          </p>

          <button
            type="button"
            onClick={() => {
              setIsRegistering(!isRegistering)
              setError('')
              setMessage('')
            }}
            className="mt-2 text-sm font-bold text-red-500 transition hover:text-red-400"
          >
            {isRegistering
              ? 'BEJELENTKEZÉS →'
              : 'REGISZTRÁCIÓ →'}
          </button>

        </div>

      </div>
    </main>
  )
}

export default Bejelentkezes