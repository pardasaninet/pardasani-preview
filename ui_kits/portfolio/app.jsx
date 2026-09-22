function App() {
  /* ?p=<slug> opens a project directly, so a card or a screenshot can point at
     one page instead of clicking through. */
  const initial = new URLSearchParams(window.location.search).get('p') || window.__START_PROJECT || null;
  const [page, setPage] = React.useState(initial ? 'project' : 'home');
  const [slug, setSlug] = React.useState(initial || null);
  const [narrow, setNarrow] = React.useState(window.innerWidth < 760);
  /* The hero plays on an otherwise empty screen: no nav until it has settled.
     Reduced motion skips straight to the settled state, so chrome is there at once. */
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [heroDone, setHeroDone] = React.useState(reduced);

  React.useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 760);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  const go = (id) => {
    if (id === 'about' || id === 'contact') {
      setPage('home');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      });
      return;
    }
    setSlug(null); setPage(id); window.scrollTo({ top: 0 });
  };
  const openProject = (s) => { setSlug(s); setPage('project'); window.scrollTo({ top: 0 }); };

  const project = slug ? window.P.bySlug(slug) : null;
  let body;
  if (page === 'project' && project) {
    /* Bespoke pages are composed from the section library instead of the generic
       template. Everything else keeps the template until it is moved across. */
    const BESPOKE = { 'wheel-barrow': window.WheelBarrow, 'odd-jobs': window.OddJobs };
    const Bespoke = project.layout === 'bespoke' ? BESPOKE[project.slug] : null;
    body = Bespoke
      ? <Bespoke project={project} go={go} openProject={openProject} narrow={narrow} />
      : project.template === 'craft'
        ? <CraftPiece project={project} go={go} openProject={openProject} narrow={narrow} />
        : <CaseStudy project={project} go={go} openProject={openProject} narrow={narrow} />;
  } else if (page === 'work') {
    body = <WorkIndex openProject={openProject} narrow={narrow} />;
  } else {
    body = <Home go={go} openProject={openProject} narrow={narrow} onHeroDone={() => setHeroDone(true)} />;
  }

  const onHome = page === 'home';
  return <Shell page={onHome ? 'home' : page === 'project' ? 'work' : page} go={go} chromeIn={!onHome || heroDone}>{body}</Shell>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
