import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Check localStorage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    const savedUser = localStorage.getItem('user')
    if (authStatus === 'true' && savedUser) {
      setIsAuthenticated(true)
      setUser(savedUser)
    }
  }, [])

  const login = (username, password) => {
    // Simple authentication
    if (username === 'admin' && password === '123') {
      setIsAuthenticated(true)
      setUser(username)
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('user', username)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
  }

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

