import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

interface ImageCarouselHeroProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  images: ImageCard[];
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export function TattooCarousel({
  title,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [
    { title: "Realistic Results", description: "Photos that look professionally crafted" },
    { title: "Fast Generation", description: "Turn ideas into images in seconds." },
    { title: "Diverse Styles", description: "Choose from a wide range of artistic options." }
  ],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotatingCards, setRotatingCards] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((angle) => (angle + 0.5) % 360));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)));
  }, [images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div className="carousel-hero-container carousel-hero-offset">
      <div className="carousel-bg-effects">
        <div className="carousel-blob blob-top-right" />
        <div className="carousel-blob blob-bottom-left" />
      </div>

      <div className="carousel-main-content">
        <div className="carousel-split-layout">
          {/* Left Column: Title, Desc, Features */}
          <div className="carousel-left-col">
            <div className="carousel-content-section" style={{ maxWidth: "500px" }}>
              <h2 className="hero-title text-gradient" style={{ marginBottom: "1rem" }}>
                {title}
              </h2>
              <p className="cta-desc text-balance" style={{ marginBottom: "1.5rem" }}>
                {description}
              </p>
            </div>

            {features && features.length > 0 && (
              <div className="carousel-features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckCircle2 className="feature-icon" size={24} />
                    <div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button onClick={onCtaClick} className="btn-solid" style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center', cursor: 'pointer', marginTop: '3rem' }}>
              {ctaText}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Column: Carousel */}
          <div className="carousel-right-col">
            <div
              className="carousel-wrapper"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0.5, y: 0.5 });
              }}
            >
              <div className="carousel-track-container">
                {images.map((image, index) => {
                  const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
                  const radius = window.innerWidth < 768 ? 156 : 234;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  const perspectiveX = (mousePosition.x - 0.5) * 20;
                  const perspectiveY = (mousePosition.y - 0.5) * 20;

                  return (
                    <div
                      key={image.id}
                      className="carousel-card-wrapper"
                      style={{
                        transform: `
                      translate(${x.toFixed(3)}px, ${y.toFixed(3)}px)
                      rotateX(${perspectiveY.toFixed(3)}deg)
                      rotateY(${perspectiveX.toFixed(3)}deg)
                      rotateZ(${image.rotation}deg)
                    `,
                      }}
                    >
                      <div className="carousel-card-inner">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="carousel-card-img"
                        />
                        <div className="carousel-card-shine" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
