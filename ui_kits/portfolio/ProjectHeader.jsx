const { Mat, Tag, Linen, Prose } = window.PardasaniNetDesignSystem_2fc217;

/* The same opening on every project page — one of the fixed anchors.
   Long titles wrap rather than shrink. */
function ProjectHeader({ project, narrow }) {
  const P = window.P;
  return (
    <>
      <Page>
        <div style={{ paddingTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-quiet)' }}>{P.typeLine(project)}</div>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)',
            fontSize: narrow ? 'var(--text-2xl)' : 'var(--text-3xl)',
            letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)',
            maxWidth: '22ch', textWrap: 'balance',
          }}>{project.title}</h1>
          <div style={{ maxWidth: 'var(--measure-prose)' }}>
            {project.copy && project.copy.thesis
              ? <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', letterSpacing: 'var(--tracking-body)', textWrap: 'pretty' }}>{project.copy.thesis}</p>
              : <Slot lines={2} size="lead" label="thesis line — copy to come" width="100%" />}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-6)', marginTop: 'var(--space-3)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)' }}>{project.year}</span>
          </div>
        </div>
      </Page>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'var(--space-8) var(--gutter-lg) 0' }}>
        <Mat ratio={narrow ? '4 / 3' : '21 / 9'} inset="var(--space-7)" radius="var(--radius-hero)"
          tint="var(--texture-tint)" caption={project.aiImagery ? 'Staging imagery on this project was AI-generated.' : null} />
      </div>
    </>
  );
}

function RoleBlock({ project, lines = 4 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-quiet)' }}>Role</div>
      {project.copy && project.copy.role
        ? <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', letterSpacing: 'var(--tracking-body)', textWrap: 'pretty' }}>{project.copy.role}</p>
        : <Slot lines={lines} size="sm" label={project.team ? `role on a team of ${project.team} — scope to be stated here` : 'role — copy to come'} width="100%" />}
    </div>
  );
}
Object.assign(window, { ProjectHeader, RoleBlock });
