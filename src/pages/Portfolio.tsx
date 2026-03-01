import CtaSection from '../components/CtaSection';
import { PhotoColumn } from '../components/PhotoMarquee';
import { TattooCarousel } from '../components/TattooCarousel';
import type { ImageCard } from '../components/TattooCarousel';
import { useNavigate } from 'react-router-dom';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';

const tattooImages = [
  "/images/tattoo 1.jpg",
  "/images/tattoo 2.jpg",
  "/images/tattoo 3.jpg",
  "/images/tattoo 4.jpg",
  "/images/tattoo 5 .jpg",
  "/images/tattoo 6.jpg",
  "/images/tattoo 7.jpg",
  "/images/tattoo 8.jpg",
];

export default function Portfolio() {
  const navigate = useNavigate();

  const carouselImages: ImageCard[] = tattooImages.map((src, idx) => ({
    id: idx.toString(),
    src,
    alt: `Tattoo masterpiece ${idx + 1}`,
    rotation: Math.random() * 20 - 10,
  }));

  const demoFeatures = [
    {
      title: "Master Artists",
      description: "Our resident artists specialize in unique, custom designs.",
    },
    {
      title: "Clean & Safe",
      description: "We adhere strictly to health standards, guaranteeing you a flawless healing process.",
    },
    {
      title: "Diverse Styles",
      description: "From minimalist fine-lines to heavy blackout masterpieces and traditional colors.",
    },
  ];

  const reviews = [
    { name: "Sophie L.", handle: "@sophie_bxl", text: "Got my first tattoo here and it was a 10/10 experience. The artist took the time to understand exactly what I wanted. Absolutely stunning result." },
    { name: "Marco D.", handle: "@marco.ink", text: "Best piercing studio in Brussels by far. Extremely clean, professional, and the jewelry selection is incredible. Already booked my next appointment." },
    { name: "Amina K.", handle: "@aminak_art", text: "The fine-line work they do is unreal. My tattoo healed perfectly and everyone stops me to ask where I got it. Can't recommend Atelïr enough." },
    { name: "Thomas V.", handle: "@tvandeberg", text: "I was nervous but the team made me feel completely at ease. The whole process was explained step by step. Love my new piercing!" },
    { name: "Céline R.", handle: "@celine_bxl", text: "Such a warm and creative atmosphere. The artist brought ideas I hadn't even thought of and the final piece is exactly me. Forever grateful." },
    { name: "Julien M.", handle: "@julien.mtattoo", text: "Third time coming back and every session is better than the last. The attention to detail in the blackout sleeve is just jaw-dropping." },
  ];

  return (
    <div className="portfolio-page">
      {/* 1) Tattoos, CTA */}
      <TattooCarousel
        title="Custom Tattoos"
        description="Explore incredible pieces from our talented resident artists."
        ctaText="Book a Tattoo Session"
        onCtaClick={() => navigate('/book-now')}
        images={carouselImages}
        features={demoFeatures}
      />

      {/* 2) Piercing, CTA */}
      <section className="portfolio-section" style={{ backgroundColor: 'var(--bg-dark)', paddingTop: '100px' }}>
        <div className="section-container" style={{ margin: '0 auto', maxWidth: '900px', textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', overflow: 'visible' }}>
          <h2 className="hero-title text-gradient">Piercings</h2>
          <p className="cta-desc">From basic lobes to advanced curated ears, styled with premium jewelry.</p>
        </div>
        <div className="testimonials-section" style={{ height: '800px', padding: 0 }}>
          <div className="testimonials-container">
            <PhotoColumn images={["/images/piercing 1.jpg", "/images/piercing 2.jpg", "/images/piercing 3.jpg"]} duration={22} className="testimonials-col" />
            <PhotoColumn images={["/images/piercing 4.jpg", "/images/piercing 5.jpg", "/images/piercing 1.jpg"]} duration={26} className="testimonials-col hidden-mobile" />
          </div>
        </div>
      </section>

      <CtaSection title="" desc="Experience our clean, fast, and remarkably professional piercing process." btnText="Book a Piercing" />

      {/* 3) Reviews */}
      <TestimonialsMarquee
        title="What our clients say"
        description="Real experiences from people who trusted us with their skin."
        testimonials={reviews}
      />

      {/* 4) Final CTA */}
      <CtaSection />
    </div>
  );
}
