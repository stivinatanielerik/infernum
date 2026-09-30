import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { supabase } from '../lib/supabase'

type AuthContextType = {
  user: any | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      },
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}