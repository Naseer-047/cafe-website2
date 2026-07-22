import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MenuPage from './components/MenuSection/MenuPage'
import Hero from './components/Hero'
import SignatureSection from './components/SignatureSection/SignatureSection'
import CommunitySection from './components/CommunitySection/CommunitySection'
import LocationSection from './components/LocationSection/LocationSection'
import ContactFooterSection from './components/ContactFooter/ContactFooterSection'
import LoginPage from './components/LoginSection/LoginPage'
import ProductPage from './components/ProductSection/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import Navbar from './components/Navbar'
import Toast from './components/ui/Toast'

import { useEffect } from 'react';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <SignatureSection />
      <LocationSection />
      <CommunitySection />
      <ContactFooterSection />
    </>
  )
}

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-[#050505]">
      <Toast />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
