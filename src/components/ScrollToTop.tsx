import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Delay matches the page-transition exit duration in App.tsx (0.5s)
const TRANSITION_MS = 510;

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, TRANSITION_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
