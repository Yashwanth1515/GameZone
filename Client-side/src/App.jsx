import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Sign from './pages/Signup';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Cart from './pages/Cart';
import Gamecard from './Components/Game-card';
import Allgames from './Components/Allgames';
import Gamedetails from './pages/Game-details';
import Userdetails from './Components/Userdetails';
import Search from './Components/Search';
import { CartProvider } from './useContext/CartContext';
const Layout = ({ children }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1, overflow:'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem', overflowY:'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
};



const AppRoutes = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup';

  return (
    hideLayout ? (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    ) : (
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
            <Home/>
            <Gamecard/>
          </>} />
          <Route path="/games" element={<Allgames />} />
          <Route path="/games/:id" element={<Gamedetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<Userdetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    )
  );
};


function App() {
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
