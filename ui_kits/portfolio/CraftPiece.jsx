const { Divider, Mat, StrategyChain, CreditBlock, NextProject, Linen } = window.PardasaniNetDesignSystem_2fc217;

/* A craft piece must sit in the same system without looking like a case study
   that ran out of content. It is not the case study minus sections: the imagery
   runs at a larger scale in a two-column plate wall, and the writing sits in one
   narrow column beside it rather than stacking underneath. Same header, same
   strategy control, same credits, same footer — different rhythm. */
function CraftPiece({ project, go, openProject, narrow }) {
  const P = window.P;
  const i = P.projects.findIndex((p) => p.slug === project.slug);
  const next = P.projects[(i + 1) % P.projects.length];
  return (
    <>
      <ProjectHeader project={project} narrow={narrow} />
      <Page>
        <Section gap="var(--section-gap-tight)">
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 300px', gap: 'var(--space-8)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <Mat ratio="4 / 5" inset="var(--space-6)" radius="var(--radius-panel)" tint="var(--texture-tint)" />
              <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)' }}>
                <Mat ratio="1 / 1" tint="var(--texture-tint)" />
                <Mat ratio="1 / 1" tint="var(--texture-tint)" />
              </div>
              <Mat ratio="3 / 2" inset="var(--space-6)" radius="var(--radius-panel)" tint="var(--texture-tint)" />
            </div>

            <aside style={{
              display: 'flex', flexDirection: 'column', gap: 'var(--space-7)',
              position: narrow ? undefined : 'sticky', top: narrow ? undefined : 'var(--space-9)',
            }}>
              <RoleBlock project={project} lines={2} />
              {project.clarify && (
                <p style={{
                  margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)',
                  fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)',
                  letterSpacing: 'var(--tracking-body)', color: 'var(--text-muted)',
                }}>{project.clarify}</p>
              )}
              <div>
                <Divider label="Note on process" spacing="0 0 var(--space-4)" />
                <Slot lines={3} size="sm" label="short process note — copy to come" width="100%" />
              </div>
              <div>
                <Divider label="Strategy" spacing="0 0 var(--space-4)" />
                <StrategyChain chain={['', '']} label="Show the thinking" />
              </div>
              <CreditBlock
                rows={[{ label: 'Year', value: project.year }, { label: 'Type', value: 'Craft piece' }]}
                note={project.selfInitiated ? 'Self-initiated. Not client work.' : null}
              />
            </aside>
          </div>
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
Object.assign(window, { CraftPiece });
