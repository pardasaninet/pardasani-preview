const { Opener, Wave, WhatWhyHow, FlipCards, ProcessScroll, GraphicText, WaveSection, CollapsedText, CollapsedTextSplit, StrategyChain, CreditBlock, NextProject, Mat, ProfileCards, PrototypeEmbed } = window.PardasaniNetDesignSystem_2fc217;

/* Odd Jobs — the most material of anything in the portfolio, so most of the
   depth sits behind flips and expands and the page itself stays light. */
function OddJobs({ project, go, openProject, narrow }) {
  const P = window.P;
  const i = P.projects.findIndex((p) => p.slug === project.slug);
  const next = P.projects[(i + 1) % P.projects.length];
  const WaveRule = window.WaveRule;

  const personas = [
    {
      title: 'Priya, the Rain Maker', name: 'Priya Sharma', subline: '20, international CS student, picks up gigs',
      imageLabel: 'Archetype 1', src: 'images/odd-jobs/persona-1.png', board: 'images/odd-jobs/persona-board-1.jpg',
      body: 'She has real skills and availability, but visa restrictions block most traditional work. She needs a platform she can trust and a simple way to put herself out there without a formal resume.',
    },
    {
      title: 'Jake, the Busy Poster', name: 'Jake Miller', subline: '22, senior, posts gigs',
      imageLabel: 'Archetype 2', src: 'images/odd-jobs/persona-2.png', board: 'images/odd-jobs/persona-board-2.jpg',
      body: "He's busy, values speed and just needs reliable help with occasional tasks from someone he can trust. He won't use a platform that feels complicated or unsafe.",
    },
    {
      title: 'Aaliya, the Community Switcher', name: 'Aaliya Khan', subline: '21, first-generation art student, does both',
      imageLabel: 'Archetype 3', src: 'images/odd-jobs/persona-3.png', board: 'images/odd-jobs/persona-board-3.jpg',
      body: "She uses both sides of the platform depending on what the week needs. She's the kind of loyal repeat user who could become an informal ambassador for it.",
    },
  ];

  /* Research: five short blocks, the detail behind each one kept in a Read more
     so the section stays scannable. */
  const research = [
    {
      n: '01', title: "Who it's for",
      body: <p style={{ margin: 0 }}>College students aged 18 to 24, and in particular international, first-generation and low-income students, who face the biggest financial barriers and have the least flexibility in their schedules.</p>,
      more: <p style={{ margin: 0 }}>What they should expect to find is a clean, approachable platform where they can browse or post a gig, with a trust and verification system that feels campus-specific rather than corporate.</p>,
    },
    {
      n: '02', title: 'What already exists',
      body: <p style={{ margin: 0 }}>TaskRabbit and Fiverr are built for strangers, so the platform has to manufacture trust from scratch. Handshake is built for professional roles and internships, so it misses informal work entirely.</p>,
      more: <p style={{ margin: 0 }}>None of them are campus-specific, and that's the gap Odd Jobs sits in. The trust is already there between students on the same campus, so the platform's job is to verify it rather than invent it.</p>,
    },
    {
      n: '03', title: 'What gets people to act',
      body: <p style={{ margin: 0 }}>I pulled apart two sites built to drive action, Water.org and Freerice.com, to see what order they put things in.</p>,
      more: <>
        <p style={{ margin: 0 }}>Water.org puts persuasion first. The first thing you see is an emotional headline and a donate button, before you've learned anything about the cause, and every image shows a real named person rather than a generic sad photograph. A lot of the page goes to personal stories and testimonials before it asks you to donate a second time, so trust gets built before the bigger ask.</p>
        <p style={{ margin: 0 }}>Freerice flips that. It drops you straight into an interactive game, so you're participating before you fully understand what the site is about, and the education and persuasion come afterwards. The game does all three jobs at once: playing it is the action, the education and the persuasion together. That's harder to design than it looks.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
          <Mat ratio="4 / 3" inset="var(--space-3)" src="images/odd-jobs/wireframe-water.png" alt="Hand-drawn wireframe of water.org, sections marked action, educate and persuade" />
          <Mat ratio="4 / 3" inset="var(--space-3)" src="images/odd-jobs/wireframe-freerice.png" alt="Hand-drawn wireframe of freerice.com, sections marked action, educate and persuade" />
          <div style={{ gridColumn: '1 / -1' }}>
            <Mat ratio="4 / 3" inset="var(--space-3)" src="images/odd-jobs/coherence-notes.png" alt="Handwritten notes on the stylistic and semantic coherence of water.org and freerice.com" />
          </div>
        </div>
      </>,
    },
    {
      n: '04', title: 'How layouts change between screens',
      body: <p style={{ margin: 0 }}>I compared how Stripe, Apple, Shopify, Gov.UK and Pringles handle the move from desktop to mobile, working through them by hand before I set my own breakpoints.</p>,
      more: <>
        <p style={{ margin: 0 }}>Pringles was the one that taught me something. On desktop the margin is wide enough to carry legibility on its own. On tablet and mobile there's no margin at all, and the reduced column count does that work instead, which told me margin is not the only thing keeping a layout readable.</p>
        <div style={{ marginTop: 'var(--space-2)' }}>
          <Mat ratio="1064 / 781" inset="var(--space-3)" src="images/odd-jobs/pb-23.png" alt="Handwritten notes comparing desktop and mobile layouts across five sites" caption="I compared these sites by hand, desktop against mobile." />
        </div>
      </>,
    },
    {
      n: '05', title: "How I'd know it worked",
      body: <p style={{ margin: 0 }}>I set the measures up front: active gig postings, return visits, and growth per campus.</p>,
      more: <p style={{ margin: 0 }}>Qualitatively, it works if students find the verification trustworthy and the posting process obvious enough that they don't think about it.</p>,
    },
  ];

  return (
    <>
      <Opener
        typeLine={P.typeLine(project)}
        title={project.title}
        thesis="Odd Jobs is a campus-only gig platform where a university email replaces the resume."
        tags={project.tags}
        year={project.year}
        texture={{ tint: 'var(--texture-tint)' }}
        mediaRatio="16 / 9"
        media={<iframe
          src="https://www.youtube-nocookie.com/embed/6o12_j6Wd_c"
          title="Odd Jobs walkthrough" loading="lazy" allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
        />}
        roleLead="Solo"
        roleItems={['User research and personas', 'Competitor analysis', 'Information architecture', 'User flows', 'Wireframes', 'Typographic study', 'Responsive analysis', 'High fidelity across desktop, tablet and mobile']}
        narrow={narrow}
      />

      <Page>
        <WaveRule />
        <div style={{ paddingTop: 'var(--space-7)' }}>
          <WhatWhyHow
            narrow={narrow}
            items={[
              { q: 'What?', a: 'Odd Jobs is a gig platform built for one campus at a time. You post a task you need done, or you pick one up and get paid for it.' },
              { q: 'Why?', a: "Students need things done and don't have money to spare: cleaning, laundry pickup, watching cats, watering plants, help moving. Students also need money, but often can't commit to a regular job because the hours don't fit around classes. The informal version of this already happens on campus." },
              { q: 'How?', a: "Sign-up is limited to university email, so everyone on it is a verified student. You don't need a resume or a set schedule to earn money in college." },
            ]}
          />
        </div>

        <WaveRule label="Strategy" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <StrategyChain
            angle="The platform has to earn trust before it can get anyone hired, so verification through a university email does the job a resume would normally do."
            chain={[
              'Students need everyday tasks done, and they need money they can earn around their classes, but a regular part-time job asks for set hours and a resume that most of them can\u2019t give.',
              'The platforms that already exist don\u2019t close that gap, because TaskRabbit and Fiverr are built for strangers and Handshake is built for professional roles, so neither one carries the trust of being on the same campus.',
              'That\u2019s why I made verification the core of the product.',
            ]}
          />
        </div>

        <WaveRule label="The three pillars" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <FlipCards
            narrow={narrow}
            cards={[
              { front: 'Inform', src: 'images/odd-jobs/feature-how-it-works.png', alt: 'The four easy steps and FAQ on the How it Works page', imageLabel: 'Close-up of the How It Works page and FAQ', imageOn: 'back', back: 'The How It Works page breaks the platform down for both hirers and earners, with an FAQ for common concerns.' },
              { front: 'Persuade', src: 'images/odd-jobs/feature-payout.png', alt: 'The payout tag and offer buttons on a job post', imageLabel: 'Close-up of the stats, testimonials and payout figure', imageOn: 'back', back: 'Social proof does the convincing, through stats, testimonials and a payout figure you can see on the page.' },
              { front: 'Act', src: 'images/odd-jobs/feature-search.png', alt: 'The search and post bars with the category row', imageLabel: 'Close-up of the search bar and sign-in gate', imageOn: 'back', back: 'A search bar lets people browse straight away, and a sign-in gate turns a passive visitor into a user.' },
            ]}
            more={<p style={{ margin: 0 }}>The brief was a website for social good that informs, persuades and gets people to act. Most of the problems I looked at led somewhere generic: a blog, an information page, a resources page. With this one I could build a product that was itself the solution, an actual system rather than a site talking about the problem.</p>}
          />
        </div>

        <WaveRule label="Who it is for" />
        <div style={{ paddingTop: 'var(--space-7)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap-tight)' }}>
          {ProfileCards
            ? <ProfileCards narrow={narrow} profiles={personas} />
            : personas.map((p, n) => (
                <GraphicText key={p.title} narrow={narrow} reverse={n === 1} circleSize={260}
                  src={p.src} alt={p.title} imageLabel={p.imageLabel} title={p.title} subline={p.subline}>
                  <p style={{ margin: 0 }}>{p.body}</p>
                </GraphicText>
              ))}
          <p style={{
            margin: 0, textAlign: 'center', maxWidth: '48ch', marginInline: 'auto',
            fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)',
            fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)',
            letterSpacing: 'var(--tracking-body)', textWrap: 'pretty',
          }}>Priya needs credibility, Jake needs speed and Aaliya needs flexibility. Any design decision that serves all three at once is the right one.</p>
        </div>

        <WaveRule label="Naming" />
        <div style={{ paddingTop: 'var(--space-7)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <CollapsedText
            title="Naming"
            more={<>
              <p style={{ margin: 0 }}>HustleHub is understood straight away, but "hustle" carries a negative connotation, and the whole point is that this work should feel ordinary rather than punishing.</p>
              <p style={{ margin: 0 }}>OffHours is unique, but it doesn't tell you what the site is.</p>
              <p style={{ margin: 0 }}>Giggle, Gig.ly and Gigl all have a friendly energy to them, though they lean further into the joke than the product does.</p>
              <p style={{ margin: 0 }}>Rally is about rallying for each other, which is the right sentiment, but it sounds like a run club.</p>
              <p style={{ margin: 0 }}>NextDoor has a strong sense of trust to it, but it doesn't describe what the site actually does.</p>
            </>}
          >
            <p style={{ margin: 0 }}>I was weighing three things with every name: whether you understand it straight away, whether it tells you what the site actually does, and what it makes the work itself sound like. OddJobs won on all three. It's timeless and disarming, and it's a little bit cute.</p>
          </CollapsedText>
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-5)' }}>
            <Mat ratio="4 / 5" src="images/odd-jobs/logo-sketches.png" alt="Hand-drawn OddJobs wordmark and logo sketches on grid paper" caption="I sketched the logo first, to set the look of everything built after it." />
            <Mat ratio="4 / 5" src="images/odd-jobs/wordmark.png" alt="The final OddJobs wordmark in green, with a pushpin on the j" caption="The wordmark that came out of the name." />
          </div>
        </div>

        <WaveRule label="Research" />
        <div style={{ paddingTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <p style={{
            margin: 0, maxWidth: 'var(--measure-prose)',
            fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)',
            fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)',
            letterSpacing: 'var(--tracking-body)', textWrap: 'pretty',
          }}>Before any of the design, I needed to know who this was for, what already existed, what actually gets people to act, and how a layout like this should behave at every screen size.</p>
          <div style={{
            display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            gap: narrow ? 'var(--space-8)' : 'var(--space-8) var(--space-9)', alignItems: 'start',
          }}>
            {research.map((r) => (
              <div key={r.n} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--quiet-blue)' }}>{r.n}</span>
                <CollapsedText title={r.title} headingLevel={3} more={r.more} style={{ maxWidth: '100%' }}>
                  {r.body}
                </CollapsedText>
                {r.image && (
                  <div style={{ marginTop: 'var(--space-2)' }}>
                    <Mat ratio="4 / 3" label={r.image.label} caption={r.image.caption} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <WaveRule label="Structure" />
        <div style={{ paddingTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <CollapsedText title="Four pages and one job post" more={<>
            <p style={{ margin: 0 }}>I started by mapping user flows, and worked out the strategy and information architecture from there. The first site map came straight out of that brain dump.</p>
            <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-4)' }}>
              <Mat ratio="4 / 5" inset="var(--space-3)" src="images/odd-jobs/sketch-userflows.png" alt="Handwritten user flows mapping pages and functions" />
              <Mat ratio="4 / 5" inset="var(--space-3)" src="images/odd-jobs/sketch-ia.png" alt="Hand-drawn early information architecture" />
            </div>
          </>}>
            <p style={{ margin: 0 }}>The site runs on four pages. The earn and hire boards both lead into the same job post page, so a gig reads the same way whichever side you come from.</p>
          </CollapsedText>
          <Mat ratio="1600 / 1103" inset="var(--space-5)" radius="var(--radius-panel)" src="images/odd-jobs/site-map.png" alt="Site map: Home, How it Works, Earn and Hire, with Earn and Hire both leading into Job Post" />
        </div>

        <WaveRule label="Visual language" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          {window.VisualLanguage && <window.VisualLanguage narrow={narrow} />}
        </div>

        <WaveRule label="The build" />
        <ProcessScroll
          narrow={narrow}
          style={{ marginTop: 'var(--space-6)' }}
          steps={[
            { title: 'Sketch', src: 'images/odd-jobs/initial-wireframe.png', alt: 'Hand-drawn initial wireframes of the landing, How it Works, job post, browse and post pages', imageLabel: 'Hand-drawn initial wireframe', caption: 'I drew the first wireframe by hand.' },
            { title: 'Wireframes', src: 'images/odd-jobs/figma-wireframe.png', alt: 'Figma wireframe of the job search page', imageLabel: 'Figma wireframes', caption: 'I rebuilt the structure in Figma before any visual treatment went onto it.' },
            { title: 'Tablet, first pass', src: 'images/odd-jobs/tablet-iteration-1.png', alt: 'Five tablet screens from the first iteration', imageLabel: 'Tablet iteration 1', caption: 'This is the first tablet version.' },
            { title: 'Tablet, second pass', src: 'images/odd-jobs/tablet-iteration-2.png', alt: 'Five tablet screens from the second iteration', imageLabel: 'Tablet iteration 2', caption: 'In the second pass I resized the text, kept the top and bottom bars but made them smaller and better spaced, took the card grid from three columns down to two, and let the categories run onto two lines.' },
            { title: 'Three breakpoints', src: 'images/odd-jobs/desktop-mockup.png', alt: 'Odd Jobs pages floating beside a desktop monitor', imageLabel: 'Desktop, tablet and mobile high fidelity', caption: 'These are the final screens at desktop, tablet and mobile.' },
          ]}
        />

        <WaveRule label="Across the breakpoints" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          {window.BreakpointCompare && <window.BreakpointCompare narrow={narrow} />}
        </div>

        {PrototypeEmbed && <>
          <WaveRule label="The prototype" />
          <PrototypeEmbed
            narrow={narrow}
            style={{ marginTop: 'var(--space-6)' }}
            fileKey="Nv8m47T7Du5hBxf9z231sa"
            fileName="Gig"
            flows={[
              { label: 'Desktop', nodeId: '69:1129', pageId: '1:2', ratio: '16 / 10' },
              { label: 'Tablet', nodeId: '244:5053', pageId: '257:3231', ratio: '4 / 3' },
              { label: 'Mobile', nodeId: '358:1519', pageId: '358:760', ratio: '9 / 17' },
            ]}
            title="Odd Jobs interactive prototype"
            poster="images/odd-jobs/product-look.png"
            posterLabel="Odd Jobs screens at desktop, tablet and mobile"
            posterAlt="Odd Jobs screens at desktop, tablet and mobile"
            caption="This is the working prototype, so you can click through."
          />
        </>}

        <div style={{ paddingTop: 'var(--section-gap)' }}>
          <WaveSection narrow={narrow} title="What I'd test next">
            <p style={{ margin: 0 }}>The first thing I'd test is whether people can understand a job posting quickly. Each post carries a lot of information, and the whole platform depends on someone deciding at a glance whether to take a gig. I'd measure it against the goals I set at the start: active postings, return visits and growth per campus.</p>
          </WaveSection>
        </div>

        <WaveRule />
        <div style={{ paddingTop: 'var(--space-7)' }}>
          <CollapsedText title="Reflection" more={<>
            <p style={{ margin: 0 }}>I picked this topic because financial stress and scheduling conflicts are things I deal with myself, and the platforms that already exist are built for everyone, so they miss the trust that comes from being on the same campus.</p>
            <p style={{ margin: 0 }}>The course put most of its time into research, so prototyping got squeezed. I'd have wanted more pages, more variations and more interactions. And if I went back in, I'd change the type. I chose an expressive typeface and an unusual layout, and after taking an accessibility course I can see how that works against readability and screen readers.</p>
          </>}>
            <p style={{ margin: 0 }}>This project changed how I think about responsive design. It's less about fitting the same layout onto a smaller screen, and more about what someone needs at that size and the fastest way to give it to them. On desktop a gig card can hold more detail. On mobile the same card has to lead with the price and a one-line description, so the decision happens at a glance.</p>
          </CollapsedText>
        </div>

        <WaveRule label="Credits" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <CreditBlock rows={[
            { label: 'Year', value: '2026' },
            { label: 'Context', value: 'Course project, AD 319, Purdue, Spring 2026' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Video', value: 'Walkthrough', href: 'https://youtu.be/6o12_j6Wd_c' },
          ]} note="I used Claude for concept development and copywriting, so the screens were grounded in real use cases rather than dummy text. ChatGPT image generation made the mockup backgrounds, which were compositional aids, not final design assets." />
        </div>

        <Section>
          <NextProject title={next.title} type={P.typeLine(next)}
            onClick={(e) => { e.preventDefault(); openProject(next.slug); }}
            onIndex={(e) => { e.preventDefault(); go('work'); }} />
        </Section>
      </Page>
    </>
  );
}
Object.assign(window, { OddJobs });
