import { useState, useEffect } from 'react'
import { useCart, CartProvider } from './context/CartContext'
import { useAuth, AuthProvider } from './context/AuthContext'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import MovieSection from './pages/MovieSection'
import BookSection from './pages/BookSection'
import CartDrawer from './components/CartDrawer'

import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  Tabs,
  Tab,
  Paper,
  CssBaseline
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton, Badge } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899', // Pink
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
})

function NavigationTabs() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const getValue = () => {
    if (location.pathname === '/home') return 0
    if (location.pathname === '/movies') return 1
    if (location.pathname === '/books') return 2
    return 0
  }

  const handleChange = (event, newValue) => {
    if (newValue === 0) navigate('/home')
    else if (newValue === 1) navigate('/movies')
    else if (newValue === 2) navigate('/books')
  }

  return (
    <Tabs
      value={getValue()}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      sx={{
        '& .MuiTab-root': {
          fontWeight: 600,
          fontSize: '1rem',
          textTransform: 'none',
          minHeight: 64,
        },
      }}
    >
      <Tab label="Home" />
      <Tab label="Movies" />
      <Tab label="Books" />
    </Tabs>
  )
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/" replace />
}

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeBrowseTab, setActiveBrowseTab] = useState(location.pathname === '/movies' ? 'movies' : 'books')
  const [cartOpen, setCartOpen] = useState(false)
  const { getItemCount } = useCart()
  const { logout, isAuthenticated } = useAuth()

  useEffect(() => {
    if (location.pathname === '/movies') {
      setActiveBrowseTab('movies')
    } else if (location.pathname === '/books') {
      setActiveBrowseTab('books')
    }
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleBrowseTabChange = (tab) => {
    setActiveBrowseTab(tab)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShoppingCartIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BuyStuff
            </Typography>
          </Box>

          <NavigationTabs />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={() => setCartOpen(true)}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <Badge badgeContent={getItemCount()} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/movies" element={<ProtectedRoute><MovieSection /></ProtectedRoute>} />
          <Route path="/books" element={<ProtectedRoute><BookSection /></ProtectedRoute>} />
        </Routes>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', display: 'flex' }}>
            <Button
              variant={activeBrowseTab === 'movies' ? 'contained' : 'text'}
              onClick={() => handleBrowseTabChange('movies')}
              sx={{
                flex: 1,
                py: 2.5,
                borderRadius: 0,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                backgroundColor: activeBrowseTab === 'movies' ? 'primary.main' : 'transparent',
                color: activeBrowseTab === 'movies' ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: activeBrowseTab === 'movies' ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              Browse Movies
            </Button>
            <Box
              sx={{
                width: '1px',
                backgroundColor: 'divider',
              }}
            />
            <Button
              variant={activeBrowseTab === 'books' ? 'contained' : 'text'}
              onClick={() => handleBrowseTabChange('books')}
              sx={{
                flex: 1,
                py: 2.5,
                borderRadius: 0,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                backgroundColor: activeBrowseTab === 'books' ? 'primary.main' : 'transparent',
                color: activeBrowseTab === 'books' ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: activeBrowseTab === 'books' ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              Browse Books
            </Button>
          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              p: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey.50',
              minHeight: '400px',
            }}
          >
            {activeBrowseTab === 'movies' ? (
              <Typography variant="h6" color="text.secondary">
                Movie content will appear here
              </Typography>
            ) : (
              <Typography variant="h6" color="text.secondary">
                Book content will appear here
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<AppContent />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
