import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#EFECE3] text-[#000000]">
      <Navbar />
      <main className="grow container mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
      <Footer />

      <ScrollToTopButton />
    </div>
  );
}

export default App;
