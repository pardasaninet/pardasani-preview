const { ProjectCard, TrackTabs, TagFilter, EmptyState, Button } = window.PardasaniNetDesignSystem_2fc217;

function WorkIndex({ openProject, narrow }) {
  const P = window.P;
  const [track, setTrack] = React.useState('all');
  const [tags, setTags] = React.useState([]);
  const shown = P.projects.filter((p) =>
    (track === 'all' || p.tracks.includes(track)) &&
    (tags.length === 0 || tags.every((t) => p.tags.includes(t)))
  );
  const clear = () => { setTrack('all'); setTags([]); };
  return (
    <Page>
      <Section gap="var(--space-9)">
        <h1 style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-display)',
          lineHeight: 'var(--leading-snug)', color: 'var(--text-heading)',
        }}>Work</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-5)' }}>
          <TrackTabs tracks={P.tracks} active={track} onChange={setTrack} count={shown.length} />
          <TagFilter tags={P.tags} selected={tags} onClear={() => setTags([])}
            onToggle={(t) => setTags((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))} />
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--space-6)', marginTop: 'var(--space-8)', alignItems: 'start',
        }}>
          {shown.map((p) => (
            <ProjectCard key={p.slug} title={p.title} type={P.typeLine(p)} year={p.year} tags={p.tags}
              thesis={p.thesis || null} href="#" onClick={(e) => { e.preventDefault(); openProject(p.slug); }} />
          ))}
          {shown.length === 0 && (
            <EmptyState body="No project sits in that track with all of those tags. Try one tag at a time, or switch back to all."
              action={<Button variant="quiet" onClick={clear}>Clear filters</Button>} />
          )}
        </div>
      </Section>
    </Page>
  );
}
Object.assign(window, { WorkIndex });
