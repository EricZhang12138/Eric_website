import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CursorGlow from './CursorGlow';

function Layout() {
  const location = useLocation();

  return (
    <div>
      <CursorGlow />
      <Navbar />
      <main className="page">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Layout;
