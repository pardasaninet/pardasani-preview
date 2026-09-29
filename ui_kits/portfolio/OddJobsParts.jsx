/* Odd Jobs page parts built from the process book: the site map, the visual
   language and the breakpoint comparison. Page-specific, so they live here
   rather than in the section library. */
const { Mat: OJMat } = window.PardasaniNetDesignSystem_2fc217;

const ojMono = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)' };
const ojBody = { margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', letterSpacing: 'var(--tracking-body)', textWrap: 'pretty' };
const ojH3 = { margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-heading)' };

const SITE = [
  { page: 'Home', parts: ['Hero and preview', 'How does it work?', 'Verification and security', 'Partner universities'] },
  { page: 'How it Works', parts: ['The concept', 'For hirers and earners', 'Four easy steps', 'FAQ'] },
  { page: 'Earn', parts: ['Search and filter', 'Make a new post', 'Gig cards'] },
  { page: 'Hire', parts: ['Search and filter', 'Make a new post', 'Service cards'] },
];

function SiteColumn({ page, parts }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ ...ojMono, fontSize: 'var(--text-sm)', color: 'var(--text-body)', background: 'var(--surface-raised)', boxShadow: 'var(--shadow-xs)', borderRadius: 'var(--radius-chip)', padding: '8px 14px' }}>{page}</div>
      <div style={{ marginLeft: 18, borderLeft: '1px solid var(--quiet-blue)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-3) 0 var(--space-1)' }}>
        {parts.map((p) => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ width: 14, height: 1, background: 'var(--quiet-blue)' }}></span>
            <span style={{ ...ojMono, color: 'var(--text-muted)' }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteMap({ narrow }) {
  return (
    <div style={{ background: 'var(--surface-mat)', boxShadow: 'var(--mat-inset)', borderRadius: 'var(--radius-panel)', padding: narrow ? 'var(--space-6)' : 'var(--space-7)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr 1fr' : 'repeat(4, minmax(0, 1fr))', gap: narrow ? 'var(--space-6) var(--space-4)' : 'var(--space-5)' }}>
        {SITE.map((c) => <SiteColumn key={c.page} {...c} />)}
        <div style={{ gridColumn: narrow ? '1 / -1' : '3 / 5', borderTop: '1px dashed var(--quiet-blue)', paddingTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', alignItems: narrow ? 'flex-start' : 'center' }}>
          <SiteColumn page="Job post" parts={['Details and call to action', 'More like this']} />
        </div>
      </div>
    </div>
  );
}

const SWATCHES = ['#2ebf70', '#e26d64', '#eba29c', '#fce4e4', '#eed0f4', '#b9d6e6', '#ffae7c', '#dbf5d0'];

function VisualLanguage({ narrow }) {
  React.useEffect(() => {
    if (document.getElementById('oj-shantell')) return;
    const l = document.createElement('link');
    l.id = 'oj-shantell'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@400;600&display=swap';
    document.head.appendChild(l);
  }, []);
  const specimen = (family, name) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span style={{ fontFamily: family, fontSize: narrow ? 56 : 72, lineHeight: 1, color: 'var(--text-body)' }}>Aa</span>
      <span style={{ ...ojMono, color: 'var(--text-muted)' }}>{name}</span>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <h3 style={ojH3}>Mood board</h3>
        <OJMat ratio="2000 / 1054" inset="var(--space-4)" radius="var(--radius-panel)" src="images/odd-jobs/pb-12.png" alt="Mood board of pinned notes, doodles, handwriting and sticky notes" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: narrow ? 'var(--space-7)' : 'var(--space-9)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <h3 style={ojH3}>Typography</h3>
          <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
            {specimen('var(--font-mono)', 'Antarctican Mono')}
            {specimen("'Shantell Sans', var(--font-sans)", 'Shantell Sans')}
          </div>
          <p style={ojBody}>I tested ten typefaces before settling on the pair the site uses.</p>
          <ul aria-label="The ten typefaces tested" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {['Shantell Sans', 'Informal', 'GoodDog New', 'Azo Mono', 'Sweet & Salty', 'ParadroidMono Soft', 'Hey Eloise', 'Montserrat Alternates', 'Monaco', 'Antarctican Mono'].map((n) => {
              const kept = n === 'Shantell Sans' || n === 'Antarctican Mono';
              return <li key={n} style={{ ...ojMono, padding: '5px 12px', borderRadius: 'var(--radius-pill)', border: `1px solid ${kept ? 'var(--accent)' : 'var(--line-hairline)'}`, color: kept ? 'var(--accent)' : 'var(--text-muted)' }}>{n}</li>;
            })}
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <h3 style={ojH3}>Colour</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
            {SWATCHES.map((h) => (
              <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <span style={{ aspectRatio: '1 / 1', borderRadius: 'var(--radius-card)', background: h, boxShadow: 'var(--shadow-xs)' }}></span>
                <span style={{ ...ojMono, color: 'var(--text-muted)' }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <h3 style={ojH3}>Elements</h3>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-5)' }}>
          <OJMat ratio="4 / 3" inset="var(--space-4)" src="images/odd-jobs/feature-payout.png" alt="The price tag, accept and make offer buttons, profile chip and date note" caption="Price tag, offer buttons, profile chip and date note." />
          <OJMat ratio="4 / 3" inset="var(--space-4)" src="images/odd-jobs/asset-cards.png" alt="Four hand-drawn card styles: taped, pinned, clipped and ring-bound" caption="The four card styles every gig sits on." />
          <OJMat ratio="4 / 3" inset="var(--space-4)" src="images/odd-jobs/asset-doodles.png" alt="Doodles of a piggy bank, a shopping cart, a pen and a lightning bolt" caption="Doodles that mark each category." />
        </div>
      </div>
    </div>
  );
}

const COMPARE = [
  { key: 'search', label: 'Search', shots: [['Desktop', 'ba-search-desktop'], ['Tablet', 'ba-search-tablet'], ['Mobile', 'ba-search-mobile']],
    line: 'Desktop and tablet keep search and posting side by side under one headline. On mobile the menu folds away and the two bars stack, so each one gets the full width.' },
  { key: 'how', label: 'How it works', shots: [['Desktop', 'ba-how-desktop'], ['Tablet', 'ba-how-tablet'], ['Mobile', 'ba-how-mobile']],
    line: 'The four security points sit in one row on desktop and drop to a two by two grid on tablet. On mobile only the verification point stays, and the partner logos run off the edge.' },
  { key: 'steps', label: 'Hire and earn', shots: [['Desktop and tablet', 'ba-steps-desktop'], ['Mobile', 'ba-steps-mobile']],
    line: 'Desktop and tablet share one layout, with the hire and earn notes side by side. On mobile the notes stack, and the four steps move into a two by two grid.' },
  { key: 'gigs', label: 'Gig cards', shots: [['Desktop', 'ba-gigs-desktop'], ['Tablet', 'ba-gigs-tablet'], ['Mobile', 'ba-gigs-mobile']],
    line: 'Desktop runs three cards across beside the filters, and tablet runs two. On mobile the filters collapse into two controls and each card fills the width.' },
  { key: 'post', label: 'Job post', shots: [['Desktop', 'ba-post-desktop'], ['Tablet', 'ba-post-tablet'], ['Mobile', 'ba-post-mobile']],
    line: 'On every screen the price, date and accept buttons sit above the photo, so the decision comes before the detail. On mobile each block gets the full width.' },
];

function BreakpointCompare({ narrow }) {
  const [k, setK] = React.useState(0);
  const f = COMPARE[k];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div role="tablist" aria-label="Feature" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        {COMPARE.map((c, i) => (
          <button key={c.key} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}
            style={{
              ...ojMono, cursor: 'pointer', padding: '6px 14px', borderRadius: 'var(--radius-pill)',
              border: `1px solid ${i === k ? 'var(--accent)' : 'var(--line-hairline)'}`,
              background: i === k ? 'var(--accent)' : 'transparent',
              color: i === k ? 'var(--bone)' : 'var(--text-body)', transition: 'var(--transition-control)',
            }}>{c.label}</button>
        ))}
      </div>
      <p style={{ ...ojBody, maxWidth: 'var(--measure-prose)' }}>{f.line}</p>
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : `repeat(${f.shots.length}, minmax(0, 1fr))`, gap: 'var(--space-5)', alignItems: 'start' }}>
        {f.shots.map(([label, file]) => (
          <div key={file} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span style={{ ...ojMono, color: 'var(--text-quiet)' }}>{label}</span>
            <OJMat inset="var(--space-3)">
              <img src={`images/odd-jobs/${file}.png`} alt={`${f.label} at ${label.toLowerCase()} width`} style={{ display: 'block', width: '100%', height: 'auto' }} />
            </OJMat>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SiteMap, VisualLanguage, BreakpointCompare });
