import React from 'react'
import { Container, Typography, Box, Paper, Grid } from '@mui/material'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          mb: 6,
          color: 'white',
          px: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Welcome to BuyStuff
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 300 }}>
          Your one-stop shop for Movies and Books
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 8,
              },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
            onClick={() => navigate('/movies')}
          >
            <LocalMoviesIcon sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Movies
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Explore our vast collection of movies. From action-packed thrillers to heartwarming dramas.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 600,
                px: 4,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Browse Movies
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 8,
              },
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
            }}
            onClick={() => navigate('/books')}
          >
            <MenuBookIcon sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Books
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Discover amazing books across all genres. Fiction, non-fiction, and everything in between.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#f5576c',
                fontWeight: 600,
                px: 4,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Browse Books
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
