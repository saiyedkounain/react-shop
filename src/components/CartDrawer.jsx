import React, { useState } from 'react'
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from '../context/CartContext'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const CartDrawer = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, getTotalPrice, getItemCount } = useCart()
  const [buyDialogOpen, setBuyDialogOpen] = useState(false)

  const handleBuy = () => {
    setBuyDialogOpen(true)
  }

  const handleConfirmBuy = () => {
    setBuyDialogOpen(false)
    clearCart()
    onClose()
  }

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 400 } },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
              <ShoppingCartIcon />
              Shopping Cart
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {cart.length === 0 ? (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                Your cart is empty
              </Typography>
            </Box>
          ) : (
            <>
              <List sx={{ flexGrow: 1, overflow: 'auto', p: 0 }}>
                {cart.map((item) => (
                  <React.Fragment key={item.cartId}>
                    <ListItem
                      sx={{
                        py: 2,
                        px: 2,
                      }}
                    >
                      <Avatar
                        variant="rounded"
                        src={item.image}
                        sx={{
                          width: 60,
                          height: 90,
                          mr: 2,
                          bgcolor: item.type === 'movie' ? 'primary.light' : 'secondary.light',
                        }}
                      >
                        {item.type === 'movie' ? (
                          <LocalMoviesIcon />
                        ) : (
                          <MenuBookIcon />
                        )}
                      </Avatar>
                      <ListItemText
                        primary={item.title}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {item.type === 'movie' ? item.director : item.author}
                            </Typography>
                            <br />
                            <Typography component="span" variant="body2" color="text.secondary">
                              {formatPrice(item.price)}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          onClick={() => removeFromCart(item.cartId)}
                          sx={{ color: 'error.main' }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>

              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Total:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {formatPrice(getTotalPrice())}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleBuy}
                  sx={{
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  Buy Now
                </Button>
              </Paper>
            </>
          )}
        </Box>
      </Drawer>

      <Dialog open={buyDialogOpen} onClose={() => setBuyDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600, textAlign: 'center' }}>
          Purchase Confirmation
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h5" gutterBottom>
              You have {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mt: 2 }}>
              Total: {formatPrice(getTotalPrice())}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Thank you for your purchase!
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleConfirmBuy}
            size="large"
            sx={{
              px: 4,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CartDrawer

