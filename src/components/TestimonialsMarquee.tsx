interface TestimonialItem {
  name: string;
  handle: string;
  text: string;
  href?: string;
}

interface TestimonialsMarqueeProps {
  title?: string;
  description?: string;
  testimonials: TestimonialItem[];
}

function TestimonialCard({ name, handle, text, href }: TestimonialItem) {
  const Tag = href ? 'a' : 'div';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Tag {...props} className="marquee-card">
      <div className="marquee-card-author">
        <div className="marquee-card-avatar">{name.charAt(0)}</div>
        <div>
          <p className="marquee-card-name">{name}</p>
          <p className="marquee-card-handle">{handle}</p>
        </div>
      </div>
      <p className="marquee-card-text">{text}</p>
    </Tag>
  );
}

export function TestimonialsMarquee({ title, description, testimonials }: TestimonialsMarqueeProps) {
  // Duplicate 4× so the strip is long enough to loop seamlessly
  const repeated = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="marquee-section">
      {(title || description) && (
        <div className="marquee-header">
          {title && <h2 className="section-title text-gradient">{title}</h2>}
          {description && <p className="cta-desc">{description}</p>}
        </div>
      )}

      <div className="marquee-outer">
        <div className="marquee-track">
          {repeated.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Fade edges */}
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
      </div>
    </section>
  );
}
