import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import MenuCategory from './pages/MenuCategory';
import ToursPage from './pages/ToursPage';
import EventosPage from './pages/EventosPage';
import ReservacionesPage from './pages/ReservacionesPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:categoryId" element={<MenuCategory />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/reservaciones" element={<ReservacionesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
