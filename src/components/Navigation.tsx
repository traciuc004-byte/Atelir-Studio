import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="top-nav">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Atelïr Studio" className="logo-image" />
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/book-now" className="nav-btn">Book Now</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Mobile drawer */}
      <nav className={`mobile-drawer ${open ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <Link to="/portfolio" className="mobile-nav-link">Portfolio</Link>
          <Link to="/jobs" className="mobile-nav-link">Jobs</Link>
          <Link to="/book-now" className="mobile-nav-link mobile-nav-btn">Book Now</Link>
        </div>
      </nav>
    </>
  );
}
