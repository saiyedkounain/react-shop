import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Snackbar,
  Alert,
} from '@mui/material'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import AddIcon from '@mui/icons-material/Add'
import { movies } from '../data/movies'
import { useCart } from '../context/CartContext'

const MovieSection = () => {
  const { addToCart } = useCart()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [addedItem, setAddedItem] = useState(null)

  const handleAddToCart = (movie) => {
    addToCart(movie, 'movie')
    setAddedItem(movie.title)
    setSnackbarOpen(true)
  }

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <LocalMoviesIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Movies Collection
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          Explore our extensive collection of movies across all genres
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={movie.image}
                alt={movie.title}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: 'primary.light',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {movie.director}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1, mb: 1 }}>
                  <Chip label={movie.year} size="small" variant="outlined" />
                  <Chip label={movie.genre.split(',')[0]} size="small" color="primary" />
                </Box>
                <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700, mt: 1 }}>
                  {formatPrice(movie.price)}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<AddIcon />}
                  onClick={() => handleAddToCart(movie)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1,
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {addedItem} added to cart!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default MovieSection
