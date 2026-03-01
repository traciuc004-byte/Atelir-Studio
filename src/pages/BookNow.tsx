import { useState } from 'react';
import { Instagram } from 'lucide-react';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '../components/BookingSelect';

type ServiceType = '' | 'tattoo' | 'piercing' | 'consultation' | 'touch-up';

export default function BookNow() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '' as ServiceType,
    details: '',
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const WHATSAPP_NUMBER = '32475527880';

  const serviceLabels: Record<string, string> = {
    tattoo: 'a Custom Tattoo',
    piercing: 'a Piercing',
    consultation: 'a Consultation',
    'touch-up': 'a Touch-up',
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabel = serviceLabels[form.service] || form.service;
    const message = [
      `Hey, my name is ${form.name} and I am contacting you regarding ${serviceLabel}.`,
      form.details ? `\n${form.details}` : '',
      form.phone ? `\nMy phone number: ${form.phone}` : '',
    ].join('');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="booking-page">
      <div className="booking-container">

        {/* ── LEFT: Form ─────────────────────────────── */}
        <div className="booking-left">
          <h1 className="booking-heading">Book a Session</h1>
          <p className="booking-subheading">
            Let's bring your vision to life. Fill out the form below and we'll get back to you shortly.
          </p>

          <form className="booking-form" onSubmit={submit}>
            <div className="booking-row">
              <div className="booking-field">
                <label className="booking-label">FULL NAME</label>
                <input
                  className="booking-input"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handle}
                  required
                />
              </div>
              <div className="booking-field">
                <label className="booking-label">PHONE NUMBER</label>
                <input
                  className="booking-input"
                  type="tel"
                  name="phone"
                  placeholder="+32 000 00 00 00"
                  value={form.phone}
                  onChange={handle}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label className="booking-label">TYPE OF SERVICE</label>
              <Select
                value={form.service}
                onValueChange={(val) => setForm(prev => ({ ...prev, service: val as typeof form.service }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tattoo">Custom Tattoo</SelectItem>
                  <SelectItem value="piercing">Piercing</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="touch-up">Touch-up</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="booking-field">
              <label className="booking-label">PROJECT DETAILS</label>
              <textarea
                className="booking-input booking-textarea"
                name="details"
                placeholder="Describe your idea, placement, and size..."
                value={form.details}
                onChange={handle}
                rows={5}
              />
            </div>

            <button type="submit" className="booking-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.99 2C6.478 2 2 6.478 2 12c0 1.832.487 3.55 1.338 5.035L2 22l5.109-1.323A9.935 9.935 0 0011.99 22C17.522 22 22 17.522 22 12S17.522 2 11.99 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              SEND ON WHATSAPP
            </button>
          </form>
        </div>

        {/* ── RIGHT: Info panel ───────────────────────── */}
        <div className="booking-right">

          {/* Location */}
          <div className="booking-info-block">
            <p className="booking-info-label">LOCATION</p>
            <p className="booking-info-value">
              Rue Henri Bergé 30,<br />
              1030 Schaerbeek, Brussels
            </p>
            <div className="booking-map">
              <iframe
                title="Atelïr Studio location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.3!2d4.3837!3d50.8602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4b5f0000001%3A0x0!2sRue+Henri+Berg%C3%A9+30%2C+1030+Schaerbeek!5e0!3m2!1sen!2sbe!4v1614000000000!5m2!1sen!2sbe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Hours */}
          <div className="booking-info-block">
            <p className="booking-info-label">OPENING HOURS</p>
            <div className="booking-hours">
              <span>Monday – Sunday</span> <span>10:00 – 19:00</span>
            </div>
          </div>

          {/* Social */}
          <div className="booking-info-block">
            <p className="booking-info-label">SOCIAL</p>
            <div className="booking-socials">
              <a
                href="https://www.instagram.com/atelir.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="booking-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@atelir.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="booking-social-btn"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.78a4.85 4.85 0 01-1-.09z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
