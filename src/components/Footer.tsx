import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="/logo.png" alt="Atelïr Studio" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Custom tattoos & piercings in the heart of Schaerbeek, Brussels.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/atelir.studio/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.tiktok.com/@atelir.studio" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.78a4.85 4.85 0 01-1-.09z" />
              </svg>
            </a>
            <a href="https://wa.me/32475527880" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.99 2C6.478 2 2 6.478 2 12c0 1.832.487 3.55 1.338 5.035L2 22l5.109-1.323A9.935 9.935 0 0011.99 22C17.522 22 22 17.522 22 12S17.522 2 11.99 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
            <li><Link to="/book-now" className="footer-link">Book Now</Link></li>
            <li><Link to="/jobs" className="footer-link">Jobs</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <h4 className="footer-heading">Studio</h4>
          <ul className="footer-info">
            <li>
              <MapPin size={14} className="footer-info-icon" />
              <span>Rue Henri Bergé 30,<br />1030 Schaerbeek, Brussels</span>
            </li>
            <li>
              <Clock size={14} className="footer-info-icon" />
              <span>Mon – Sun · 10:00 – 19:00</span>
            </li>
            <li>
              <Phone size={14} className="footer-info-icon" />
              <a href="tel:+32475527880" className="footer-link">+32 475 52 78 80</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Atelïr Studio · Schaerbeek, Brussels</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
