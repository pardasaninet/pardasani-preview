const { HeroPills, Linen, SectionHeading, ProjectCard, ResumeEntry, ProcessStep, ContactForm, Button, Divider, Prose } = window.PardasaniNetDesignSystem_2fc217;

function Hero({ narrow, onHeroDone }) {
  const [arrived, setArrived] = React.useState(false);
  return (
    <div style={{
      minHeight: narrow ? '64vh' : '78vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)',
      padding: narrow ? 'var(--space-8) var(--space-4)' : 'var(--space-8) var(--gutter)',
    }}>
      <HeroPills stacked={narrow} onDone={() => { setArrived(true); onHeroDone && onHeroDone(); }} />
      <div style={{
        opacity: arrived ? 1 : 0, transform: arrived ? 'none' : 'translateY(10px)',
        transition: 'opacity var(--duration-reveal) var(--ease-out), transform var(--duration-reveal) var(--ease-out)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-7)',
        width: '100%', maxWidth: 880,
      }}>
        <h1 style={{
          margin: 0, textAlign: 'center', fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-light)',
          /* Sized so the longer second line still sits on one line at desktop. */
          fontSize: 'clamp(28px, 4.2vw, 46px)',
          letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)',
        }}>
          <span style={{ display: 'block', whiteSpace: narrow ? 'normal' : 'nowrap' }}>Hi, I&rsquo;m Mannat.</span>
          <span style={{ display: 'block', whiteSpace: narrow ? 'normal' : 'nowrap' }}>Ideas are my favorite part of the job.</span>
        </h1>
        <div style={{
          background: 'var(--surface-mat)', boxShadow: 'var(--mat-inset)',
          borderRadius: 'var(--radius-panel)', padding: 'var(--space-7) var(--panel-padding)',
          width: '100%', maxWidth: 720,
        }}>
          <p style={{
            margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-regular)',
            fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 'var(--leading-relaxed)',
            letterSpacing: 'var(--tracking-body)', color: 'var(--text-body)',
            textAlign: 'center', textWrap: 'pretty',
          }}>I&rsquo;m a creative strategist at heart. I get to know the product and the people it&rsquo;s for, then design whatever will actually land with them, whether that&rsquo;s graphic, marketing or UX. I use AI to speed up execution, so the ideas get made faster and the range stays wide.</p>
        </div>
      </div>
    </div>
  );
}

/* One step visible at a time: the block pins while you scroll through it, and each
   step hands off to the next. The pinned heading stays put throughout — that hold
   is the point of the section. */
function ProcessBlock({ narrow }) {
  const steps = window.P.process;
  const track = React.useRef(null);
  const panel = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const stepEls = React.useRef([]);
  const [stepH, setStepH] = React.useState(0);
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* The wrapper takes the active step's own height rather than the tallest, so the
     shorter steps leave no dead space at the bottom of the card. */
  React.useLayoutEffect(() => {
    const el = stepEls.current[active];
    if (el) setStepH(el.offsetHeight);
  }, [active, narrow]);

  React.useEffect(() => {
    const onResize = () => {
      const el = stepEls.current[active];
      if (el) setStepH(el.offsetHeight);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  /* Three sources, because no single one is reliable: a capture-phase scroll
     listener on the document catches scroll events from whichever element is
     actually scrolling (a window listener misses them when it is not the
     document), and a frame loop covers environments where scroll events are
     suppressed altogether. */
  React.useEffect(() => {
    if (reduced) return;
    let raf, last = -1;
    const measure = () => {
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const pinTop = 140;
      const panelH = panel.current ? panel.current.offsetHeight : 200;
      const span = r.height - panelH - pinTop;
      const p = span > 0 ? (pinTop - r.top) / span : 0;
      const i = Math.min(steps.length - 1, Math.max(0, Math.floor(p * steps.length)));
      if (i !== last) { last = i; setActive(i); }
    };
    const tick = () => { measure(); raf = requestAnimationFrame(tick); };
    measure();
    raf = requestAnimationFrame(tick);
    document.addEventListener('scroll', measure, { capture: true, passive: true });
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('scroll', measure, { capture: true });
      window.removeEventListener('resize', measure);
    };
  }, [reduced, steps.length]);

  const heading = <SectionHeading title="My process" />;

  /* Reduced motion gets the plain stack — no pinning, no scroll hijack. */
  if (reduced) {
    return (
      <div style={{
        background: 'var(--surface-mat)', boxShadow: 'var(--mat-inset)',
        borderRadius: 'var(--radius-hero)',
        padding: narrow ? 'var(--space-7) var(--space-5)' : 'var(--space-7) var(--gutter-lg)',
        display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(240px, 1fr) 1.6fr',
        gap: 'var(--space-8)', alignItems: 'start',
      }}>
        <div>{heading}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-9)' }}>
          {steps.map((s) => (
            <div key={s.title}>
              <ProcessStep number={s.number} title={s.title} body={s.body} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={track} style={{ height: `${steps.length * 55}vh`, position: 'relative' }}>
      {/* The card IS the pinned panel, so it stays a normal-sized card while the
         track behind it provides the scroll distance for the step handoff. */}
      <div ref={panel} style={{
        position: 'sticky', top: 140,
        background: 'var(--surface-mat)', boxShadow: 'var(--mat-inset)',
        borderRadius: 'var(--radius-hero)',
        padding: narrow ? 'var(--space-7) var(--space-5)' : 'var(--space-7) var(--gutter-lg)',
        display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(240px, 1fr) 1.6fr',
        gap: 'var(--space-8)', alignItems: 'start', alignContent: 'start',
      }}>
        <div>
          {heading}
          <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>
            {steps.map((s, i) => (
              <span key={s.title} style={{
                height: 2, width: 28, borderRadius: 2,
                background: i === active ? 'var(--accent)' : 'var(--line-hairline)',
                transition: 'background-color var(--duration-base) var(--ease-standard)',
              }} />
            ))}
          </div>
        </div>
        {/* Height follows the ACTIVE step and animates between them, so there is
           no slack at the card's bottom edge on the shorter steps. Steps stay
           stacked in one grid cell and top-aligned, which is what keeps the
           "My process" heading and the step title on a shared baseline. */}
        <div style={{
          display: 'grid', overflow: 'hidden',
          height: stepH ? `${stepH}px` : undefined,
          transition: 'height var(--duration-slow) var(--ease-out)',
        }}>
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <div key={s.title} aria-hidden={!on} ref={(el) => { stepEls.current[i] = el; }} style={{
                gridArea: '1 / 1', alignSelf: 'start',
                opacity: on ? 1 : 0,
                transform: on ? 'none' : `translateY(${i > active ? 16 : -16}px)`,
                pointerEvents: on ? 'auto' : 'none',
                transition: 'opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)',
              }}>
                <ProcessStep number={s.number} title={s.title} body={s.body} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Home({ go, openProject, narrow, onHeroDone }) {
  const P = window.P;
  const featured = P.featured.map(P.bySlug);
  return (
    <>
      <Hero narrow={narrow} onHeroDone={onHeroDone} />

      <Band tone="bone">
        <Page>
          <SectionHeading title="Selected work" />
          <div style={{
            display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'var(--space-5)', marginTop: 'var(--space-7)',
          }}>
            {featured.map((p) => (
              <ProjectCard key={p.slug} detail="home" title={p.title} type={P.typeLine(p)} thesis={p.featuredLine}
                href="#" onClick={(e) => { e.preventDefault(); openProject(p.slug); }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-7)' }}>
            <Button variant="secondary" onClick={() => go('work')} style={{ borderRadius: 'var(--radius-pill)' }}>View more</Button>
          </div>
        </Page>
      </Band>

      <Page>
        <Section id="about">
          <SectionHeading label="About me" title="Designer and UX strategist based in New York"
            action={<Button variant="secondary" size="sm" href="../documents/resume.html">Download resume</Button>} />
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Prose size="lead">
              <p>{P.aboutCopy}</p>
            </Prose>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
            gap: 'var(--space-8)', marginTop: 'var(--space-8)',
          }}>
            <div>
              <Divider label="Education" spacing="0 0 var(--space-5)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                {P.education.map((e) => <ResumeEntry key={e.role} {...e} />)}
              </div>
            </div>
            <div>
              <Divider label="Work" spacing="0 0 var(--space-5)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                {P.experience.slice(0, 4).map((e) => (
                  <ResumeEntry key={e.company} role={e.role} company={e.company} date={e.date} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Page>

      <Page style={{ marginTop: 'var(--section-gap)', maxWidth: 'calc(var(--content-max) + var(--space-8) * 2)' }}>
        <ProcessBlock narrow={narrow} />
      </Page>

      <Page>
        <Section id="contact">
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(260px, 1fr) 1.15fr', gap: 'var(--space-8)', alignItems: 'start' }}>
            <SectionHeading label="Contact" title="Let&rsquo;s grab coffee!" size="lg" />
            <ContactForm lead={P.contactLead} />
          </div>
        </Section>
      </Page>
    </>
  );
}
Object.assign(window, { Home });
