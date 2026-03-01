import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => { });
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 100);
    }
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.5], ["50px", "-50px"]);

  const text2Opacity = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);
  const text2Y = useTransform(scrollYProgress, [0.55, 1], ["50px", "-50px"]);

  return (
    <>
      <div ref={containerRef} className="scroll-track">
        <div className="sticky-viewport">
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              className="video-element"
            >
              <source src="/slow dragon 16 to 9.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <div className="video-overlay" />

          <motion.div
            style={{ opacity: scrollOpacity }}
            className="floating-text-block scroll-down-container"
          >
            <h2 className="hero-subtitle text-gradient" style={{ fontSize: '1.25rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 800 }}>
              Scroll down
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="floating-text-block floating-text-top-left"
          >
            <h1 className="hero-title text-gradient">
              Tattoo Studio <br />in Schaerbeek.
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="floating-text-block floating-text-bottom-right"
          >
            <h2 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", marginBottom: "2rem" }}>
              Get your custom tattoo.
            </h2>
            <Link to="/book-now" className="btn-premium">
              <Play className="btn-icon" size={21} fill="currentColor" />
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="content-section">
        <div className="section-container">
          <h3 className="section-title text-gradient">Enter The Studio</h3>
          <p className="section-desc">
            Atelïr is in the heart of Brussels. We're not just a tattoo shop, we're a safe place to express yourself. Our artists create custom tattoos, from thin fine-line designs to bold blackout pieces.
          </p>

          <div className="grid-cards">
            <Link to="/portfolio" style={{ textDecoration: 'none' }}>
              <div className="card">
                <h4 style={{ color: 'white' }}>Portfolio</h4>
                <p>Explore our past masterpieces.</p>
              </div>
            </Link>
            <Link to="/artists" style={{ textDecoration: 'none' }}>
              <div className="card">
                <h4 style={{ color: 'white' }}>Artists</h4>
                <p>Meet the creators connecting ink to soul.</p>
              </div>
            </Link>
            <Link to="/book-now" style={{ textDecoration: 'none' }}>
              <div className="card">
                <h4 style={{ color: 'white' }}>Contact</h4>
                <p>Start your permanent journey today.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div style={{ paddingTop: '5rem', backgroundColor: 'var(--bg-dark)', textAlign: 'center' }}>
        <h2 className="section-title text-gradient">What our clients say</h2>
      </div>
      <Testimonials />


      <CtaSection />
    </>
  );
}
