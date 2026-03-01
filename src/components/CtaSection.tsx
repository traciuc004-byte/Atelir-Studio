import { Link } from 'react-router-dom';

export default function CtaSection({
  title = "Ready for your next piece?",
  desc = "Join hundreds of satisfied clients and bring your vision to life.",
  btnText = "Book Your Session"
}: {
  title?: string;
  desc?: string;
  btnText?: string;
}) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {title && <h2 className="cta-title">{title}</h2>}
        <p className="cta-desc">{desc}</p>
        <Link to="/book-now" className="btn-solid">
          {btnText}
        </Link>
      </div>
    </section>
  );
}
