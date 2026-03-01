export default function GenericPage({ title }: { title: string }) {
  return (
    <div style={{ paddingTop: '150px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="hero-title text-gradient">{title}</h1>
      <p className="section-desc" style={{ marginTop: '2rem' }}>
        Content for {title.toLowerCase()} is coming soon.
      </p>
    </div>
  );
}
