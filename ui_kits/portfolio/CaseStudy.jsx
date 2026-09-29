const { SectionHeading, Divider, Mat, StrategyChain, CreditBlock, NextProject, Linen, Prose, Card, ProcessStep } = window.PardasaniNetDesignSystem_2fc217;

function CaseStudy({ project, go, openProject, narrow }) {
  const P = window.P;
  /* Where a project has written copy it renders; where it does not, the slots
     stay. No project is half-real. */
  const c = project.copy || {};
  const i = P.projects.findIndex((p) => p.slug === project.slug);
  const next = P.projects[(i + 1) % P.projects.length];
  const cols = narrow ? '1fr' : '220px 1fr';
  return (
    <>
      <ProjectHeader project={project} narrow={narrow} />
      <Page>
        <Section gap="var(--section-gap-tight)">
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 'var(--space-8)', alignItems: 'start' }}>
            <RoleBlock project={project} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
              <div>
                <SectionHeading label="Problem" title="" level={2} style={{ display: 'none' }} />
                <Divider label="Problem" spacing="0 0 var(--space-5)" />
                {c.problem
                  ? <Prose>{c.problem.map((t, n) => <p key={n} style={{ margin: 0 }}>{t}</p>)}</Prose>
                  : <Slot lines={3} size="base" label="problem statement — copy to come" />}
              </div>
              <div>
                <Divider label="Strategy" spacing="0 0 var(--space-5)" />
                <StrategyChain
                  angle={c.angle}
                  chain={c.chain || ['', '', '']}
                  label="Show the strategy chain"
                  anglePending={project.needsAngle ? 'strategy angle — still to be written' : 'strategy angle — copy to come'}
                  style={{ marginTop: 'var(--space-1)' }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section gap="var(--section-gap-tight)">
          <Divider label="Process" spacing="0 0 var(--space-6)" />
          {c.process
            ? <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
                {c.process.map((s) => <ProcessStep key={s.number} number={s.number} title={s.title} body={s.body} />)}
              </div>
            : <>
                <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)' }}>
                  <Mat ratio="4 / 3" caption="Process" tint="var(--texture-tint)" />
                  <Mat ratio="4 / 3" caption="Process" tint="var(--texture-tint)" />
                </div>
                <div style={{ marginTop: 'var(--space-6)' }}>
                  <Slot lines={4} size="base" label="process write-up — first person pass needed" />
                </div>
              </>}
        </Section>

        <Section gap="var(--section-gap-tight)">
          <Divider label="Finals" spacing="0 0 var(--space-6)" />
          {c.captions ? (
            <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)' }}>
              {c.captions.map((cap, n) => (
                <Mat key={cap} caption={cap}
                  ratio={n === c.captions.length - 1 && !narrow ? '16 / 9' : '4 / 3'}
                  style={n === c.captions.length - 1 && !narrow ? { gridColumn: '1 / -1' } : undefined} />
              ))}
            </div>
          ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <Mat ratio={narrow ? '4 / 3' : '16 / 9'} inset="var(--space-6)" radius="var(--radius-panel)" tint="var(--texture-tint)" />
            <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)' }}>
              <Mat ratio="3 / 4" caption="Mockup" tint="var(--texture-tint)" />
              <Mat ratio="3 / 4" caption="Mockup" tint="var(--texture-tint)" />
            </div>
          </div>
          )}
        </Section>

        {project.secondAct && (
          <Section gap="var(--section-gap)">
            <div style={{
              background: 'var(--surface-mat)', boxShadow: 'var(--mat-inset)',
              borderRadius: 'var(--radius-hero)', padding: narrow ? 'var(--space-7) var(--space-5)' : 'var(--space-9) var(--panel-padding)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-quiet)' }}>Part two</div>
              <h2 style={{ margin: 'var(--space-3) 0 var(--space-5)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-2xl)', letterSpacing: 'var(--tracking-display)' }}>{project.secondAct}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <Mat ratio="4 / 3" caption="Desktop app" />
                <Mat ratio="4 / 3" caption="Physical device" />
              </div>
              <Mat ratio="16 / 9" caption="Demo video" />
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Slot lines={3} size="base" label="part two write-up — copy to come" />
              </div>
            </div>
          </Section>
        )}

        {project.ongoing && (
          <Section gap="var(--section-gap-tight)">
            <Divider label="What came after" spacing="0 0 var(--space-5)" />
            <Slot lines={2} size="base" label="lookbook and catalogue — ongoing client work, copy to come" />
            <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
              <Mat ratio="3 / 4" caption="Lookbook" />
              <Mat ratio="3 / 4" caption="Catalogue" />
            </div>
          </Section>
        )}

        <Section gap="var(--section-gap-tight)">
          <Divider label="Reflection" spacing="0 0 var(--space-5)" />
          {c.reflection
            ? <Prose>{c.reflection.map((t, n) => <p key={n} style={{ margin: 0 }}>{t}</p>)}</Prose>
            : <Slot lines={3} size="base" label="reflection — copy to come" />}
          {project.testingGap && (
            <div style={{ marginTop: 'var(--space-7)' }}>
              <Divider label="What I would test next" spacing="0 0 var(--space-5)" />
              <Slot lines={3} size="base" label="no usability testing ran on this project — judgement stated here" />
            </div>
          )}
        </Section>

        <Section gap="var(--section-gap-tight)">
          <Divider label="Credits" spacing="0 0 var(--space-6)" />
          <CreditBlock
            rows={c.credits || [
              { label: 'Year', value: project.year },
              { label: 'Template', value: P.typeLine(project) },
              { label: 'Live', value: project.live, href: project.live ? '#' : undefined },
              { label: 'Repo', value: project.repo, href: project.repo ? '#' : undefined },
            ]}
            note={c.aiNote || (project.aiImagery ? 'Some staging imagery was AI-generated: there was no photography budget on this project.' : null)}
          />
        </Section>

        <Section>
          <NextProject title={next.title} type={P.typeLine(next)}
            onClick={(e) => { e.preventDefault(); openProject(next.slug); }}
            onIndex={(e) => { e.preventDefault(); go('work'); }} />
        </Section>
      </Page>
    </>
  );
}
Object.assign(window, { CaseStudy });
