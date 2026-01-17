# 🛒 BuyStuff - E-Commerce React Application

A modern, full-featured e-commerce application built with React, Material UI, and Tailwind CSS. BuyStuff allows users to browse and purchase movies and books with a beautiful, responsive interface.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-7.3.7-007FFF)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-38B2AC)

## ✨ Features

### 🔐 Authentication

- Secure login page with credential validation
- Protected routes for authenticated users only
- Session persistence using localStorage
- Auto-redirect for authenticated users

### 🎬 Movie Section

- Browse a curated collection of movies
- View movie details: title, director, genre, year, and price
- High-quality movie posters
- Add movies to shopping cart with one click

### 📚 Book Section

- Explore an extensive book collection
- Display book information: title, author, genre, year, and price
- Beautiful book cover images
- Quick add-to-cart functionality

### 🛍️ Shopping Cart

- Persistent cart using localStorage
- Side drawer cart interface
- Add/remove items dynamically
- Real-time price calculations
- Item count badge in navigation

### 💳 Checkout Process

- Review cart items before purchase
- Purchase confirmation dialog
- Shows total items and price summary
- Auto-clear cart after successful purchase

### 🎨 Modern UI/UX

- Material UI components for consistency
- Tailwind CSS for custom styling
- Gradient designs and smooth animations
- Fully responsive layout
- Toast notifications for user feedback

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-shop.git
cd react-shop
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔑 Login Credentials

- **Username:** `admin`
- **Password:** `123`

## 📁 Project Structure

```
react-shop/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── CartDrawer.jsx       # Shopping cart drawer component
│   ├── context/
│   │   ├── AuthContext.jsx      # Authentication state management
│   │   └── CartContext.jsx      # Shopping cart state management
│   ├── data/
│   │   ├── movies.js            # Movies data
│   │   └── books.js             # Books data
│   ├── pages/
│   │   ├── Login.jsx            # Login page
│   │   ├── Home.jsx             # Home/dashboard page
│   │   ├── MovieSection.jsx     # Movies browsing page
│   │   └── BookSection.jsx      # Books browsing page
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── index.css
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **React Router DOM 7.12.0** - Client-side routing
- **Material UI 7.3.7** - Component library
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Vite 7.2.4** - Build tool and dev server
- **localStorage** - Client-side data persistence

## 📱 Features in Detail

### Authentication System

- Login page with form validation
- Secure route protection
- Persistent sessions across page refreshes
- Automatic redirects based on auth status

### Product Browsing

- Grid layout for products
- Card-based product display
- Hover effects and animations
- Filter by category (Movies/Books)

### Shopping Cart

- Add items to cart
- Remove items from cart
- View cart total and item count
- Persistent cart across sessions
- Cart drawer with smooth animations

### User Experience

- Responsive design (mobile, tablet, desktop)
- Loading states and error handling
- Toast notifications for actions
- Smooth page transitions
- Intuitive navigation

## 🎯 Key Features Highlights

1. **Persistent Shopping Cart** - Your cart items are saved in localStorage, so they persist even after refreshing the page.

2. **Protected Routes** - Only authenticated users can access the shop pages. Unauthenticated users are redirected to the login page.

3. **Modern Design** - Beautiful gradients, smooth animations, and a clean interface powered by Material UI and Tailwind CSS.

4. **Real-time Updates** - Cart count and total price update instantly when items are added or removed.

5. **Responsive Layout** - The app works seamlessly on all device sizes, from mobile phones to desktop screens.

## 🔒 Security Notes

This is a demo application with basic authentication. For production use:

- Implement proper backend authentication
- Use secure password hashing (bcrypt, etc.)
- Add CSRF protection
- Implement rate limiting
- Use HTTPS
- Add input validation and sanitization

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React and Material UI

## 🙏 Acknowledgments

- Material UI for the component library
- Unsplash for placeholder images
- Vite team for the amazing build tool

---

⭐ If you like this project, don't forget to star it!
