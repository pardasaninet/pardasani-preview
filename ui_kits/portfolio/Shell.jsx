const NS = window.PardasaniNetDesignSystem_2fc217;
const { NavBar, Footer, Linen } = NS;

function Page({ children, width = 'var(--content-max)', id, style }) {
  return <div id={id} style={{ maxWidth: width, margin: '0 auto', padding: '0 var(--gutter-lg)', ...style }}>{children}</div>;
}

/* A slot for copy that does not exist yet. Renders at the real type size so the
   layout reads true, and says plainly that it is waiting on words.
   `on` names the ground it sits on, so the bar never matches its background. */
function Slot({ lines = 2, size = 'base', label = 'copy to come', width = 'var(--measure-prose)', on = 'paper', style }) {
  const sizes = { sm: 'var(--text-sm)', base: 'var(--text-base)', lead: 'var(--text-md)', xl: 'var(--text-xl)' };
  const fill = on === 'mat' ? 'var(--mat-deep)' : 'var(--surface-mat)';
  return (
    <div style={{ maxWidth: width, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={{
          height: `calc(${sizes[size]} * 1.6)`, borderRadius: 'var(--radius-chip)',
          background: fill, boxShadow: 'var(--mat-inset)',
          width: i === lines - 1 ? '62%' : '100%',
        }} />
      ))}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}

function Section({ children, gap = 'var(--section-gap)', id, style }) {
  return <section id={id} style={{ paddingTop: gap, ...style }}>{children}</section>;
}

/* A sheet of paper laid on the linen. Breaks up the texture without introducing
   any colour the palette doesn't already have: bone is the raised surface, mat is
   the mount tone. Generously rounded so it reads as a laid sheet, not a stripe. */
function Band({ tone = 'bone', id, children, style }) {
  const bg = tone === 'mat' ? 'var(--surface-mat)' : 'var(--surface-raised)';
  return (
    <section id={id} style={{
      background: bg,
      boxShadow: tone === 'mat' ? 'var(--mat-inset)' : 'var(--shadow-sm)',
      borderRadius: 'var(--radius-hero)',
      margin: 'var(--section-gap) var(--space-8) 0',
      padding: 'var(--space-7) 0',
      ...style,
    }}>{children}</section>
  );
}

function Shell({ page, go, chromeIn = true, children }) {
  return (
    <Linen as="div" style={{ background: 'var(--surface-page)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <a href="#main" style={{
        position: 'absolute', left: -9999, top: 8, zIndex: 90, background: 'var(--bone)',
        padding: '10px 16px', borderRadius: 'var(--radius-chip)', fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)', color: 'var(--accent)',
      }} onFocus={(e) => { e.target.style.left = '16px'; }} onBlur={(e) => { e.target.style.left = '-9999px'; }}>Skip to content</a>
      <div style={{
        opacity: chromeIn ? 1 : 0,
        pointerEvents: chromeIn ? 'auto' : 'none',
        transition: 'opacity var(--duration-reveal) var(--ease-out)',
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <NavBar assetBase="../../assets" items={window.P.nav} active={page} onNavigate={go} style={{ position: 'static' }} />
      </div>
      <main id="main" style={{ flex: 1, paddingBottom: 'var(--section-gap)' }}>{children}</main>
      <Footer
        assetBase="../../assets"
        onTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        location="New York City"
        columns={window.P.footerColumns.map((c) => (
          c.pages ? { label: c.label, links: c.pages.map((p) => ({ label: p.label, href: '#', onClick: (e) => { e.preventDefault(); go(p.id); } })) } : c
        ))}
      />
    </Linen>
  );
}

Object.assign(window, { Page, Slot, Section, Band, Shell });
