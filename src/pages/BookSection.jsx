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
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AddIcon from '@mui/icons-material/Add'
import { books } from '../data/books'
import { useCart } from '../context/CartContext'

const BookSection = () => {
  const { addToCart } = useCart()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [addedItem, setAddedItem] = useState(null)

  const handleAddToCart = (book) => {
    addToCart(book, 'book')
    setAddedItem(book.title)
    setSnackbarOpen(true)
  }

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <MenuBookIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Books Collection
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          Discover amazing books across all genres and authors
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
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
                image={book.image}
                alt={book.title}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: 'secondary.light',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {book.author}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1, mb: 1 }}>
                  <Chip label={book.year} size="small" variant="outlined" />
                  <Chip label={book.genre.split(',')[0]} size="small" color="secondary" />
                </Box>
                <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 700, mt: 1 }}>
                  {formatPrice(book.price)}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<AddIcon />}
                  onClick={() => handleAddToCart(book)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1,
                    backgroundColor: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
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

export default BookSection
