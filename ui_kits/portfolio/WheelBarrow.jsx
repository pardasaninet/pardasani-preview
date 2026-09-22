const { Opener, Wave, WhatWhyHow, FlipCards, ProcessScroll, GraphicText, WaveSection, CollapsedText, StrategyChain, CreditBlock, NextProject, Mat } = window.PardasaniNetDesignSystem_2fc217;

/* Waves replace the straight rule on bespoke project pages. */
function WaveRule({ label, gap = 'var(--section-gap-tight)' }) {
  return (
    <div style={{ paddingTop: gap }}>
      {label && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-label)', color: 'var(--text-quiet)', marginBottom: 'var(--space-2)' }}>{label}</div>}
      <Wave />
    </div>
  );
}

/* the wheel barrow — a mistake and the fix. The page is built so the pattern
   appears before it fails: it is the ground of the opening band, then a process
   step, then the thing the mark is pulled out of. */
function WheelBarrow({ project, go, openProject, narrow }) {
  const P = window.P;
  const i = P.projects.findIndex((p) => p.slug === project.slug);
  const next = P.projects[(i + 1) % P.projects.length];

  return (
    <>
      <Opener
        typeLine={P.typeLine(project)}
        title={project.title}
        thesis="The wheel barrow is a conceptual zero-waste refillery truck, and its identity was rebuilt around a single pattern icon after the first version didn't read at scale."
        tags={project.tags}
        year={project.year}
        texture={{ tint: 'var(--texture-tint)' }}
        mediaRatio="21 / 9"
        mediaLabel="The final truck"
        role="Solo. Concept and research, naming, logo, pattern, a truck livery designed to be painted rather than vinyl-wrapped, social content and reusable merchandise."
        narrow={narrow}
      />

      <Page>
        <WaveRule />
        <div style={{ paddingTop: 'var(--space-7)' }}>
          <WhatWhyHow narrow={narrow} items={[
            { q: 'What?', a: 'The wheel barrow is a conceptual refillery truck that brings household essentials to people without any packaging to throw away.' },
            { q: 'Why?', a: 'The hassle with refill shops is that people have to go out of their way, and spend extra on gas, to reach them, so shopping without packaging ends up costing more effort than it should.' },
            { q: 'How?', a: 'The shop runs on solar power and drives into neighborhoods, so the refills come to people instead of people going to the refills.' },
          ]} />
        </div>

        <WaveRule label="Strategy" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <StrategyChain
            angle="The wheel barrow brings the refill shop to people instead of asking them to come to it. So the identity had to show what the truck carries from across a street, and the sustainability had to hold up in how it was made, not just in what it sells."
            chain={[
              'Refill shops ask people to go out of their way, and spend extra on gas, to reach them. The atta chakki in Gurgaon and door-to-door sellers in Mumbai already work the other way around: the essentials come to you.',
              'So the concept became a solar-powered truck that brings refills into neighborhoods, and the truck itself does the job of a shopfront. A shopfront on wheels gets read from across a street, so the identity\u2019s first job is to say what\u2019s inside at a glance, before it\u2019s decorative.',
              'The making had to match the message, so the livery is designed to be painted instead of vinyl-wrapped, and the identity carries onto reusable merchandise.',
            ]}
          />
        </div>

        <WaveRule label="Where it came from" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <FlipCards
            narrow={narrow}
            cards={[
              { imageLabel: 'The atta chakki, Gurgaon', back: 'At the atta chakki near me in Gurgaon, flour and spices are ground and mixed to order while you wait.' },
              { imageLabel: 'Door to door selling, Mumbai', back: 'In Mumbai, bread and daily essentials are sold door to door, so they reach people where they already are.' },
              { imageLabel: 'A western refill shop', back: 'Western refill and zero-waste shops have the right idea, but people still have to travel to reach them.' },
            ]}
            more={<p style={{ margin: 0 }}>This started as a class project prompted by a vending truck. Sustainability is a big factor for me, and the idea came out of researching sustainable ways of living, so these three references are where it began.</p>}
          />
        </div>

        <WaveRule label="The process" />
        <ProcessScroll
          narrow={narrow}
          style={{ marginTop: 'var(--space-6)' }}
          steps={[
            { title: 'Name and mark', imageLabel: 'Name and logo candidates', caption: 'I worked through a lot of names and logo candidates before I landed on the wheel barrow.' },
            { title: 'The pattern', imageLabel: 'The repeating icon pattern', caption: 'The first version was a repeating doodle built from icons, and each icon stood for something the truck carried, so from a distance you would read what it sold.' },
            { title: 'Where it broke', imageLabel: 'First mockup, the pattern on the truck', caption: 'As soon as the pattern went onto the truck it was too busy, and none of the details could stand out against it.' },
            { title: 'The rebuild', imageLabel: 'The rebuilt livery', caption: 'I rebuilt the livery around solid color, bolder type and a cleaner composition that holds up at scale.' },
          ]}
        />

        <WaveRule />
        <div style={{ paddingTop: 'var(--space-7)' }}>
          <GraphicText narrow={narrow} imageLabel="The wheel barrow mark" title="The mark came from the pattern">
            <p style={{ margin: 0 }}>I did like the pattern, but it was trying to say everything with every icon at once. Instead of drawing a new logo, I pulled the mark out of it, since each icon already carried specific meaning about what was inside. I tested icon and type combinations until one felt right.</p>
          </GraphicText>
        </div>

        <WaveRule label="Finals" />
        <div style={{ paddingTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Mat ratio={narrow ? '4 / 3' : '16 / 9'} inset="var(--space-6)" radius="var(--radius-panel)" caption="The finished truck, painted rather than wrapped." />
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 'var(--space-6)' }}>
            <Mat ratio="3 / 4" caption="The identity carried across social content." />
            <Mat ratio="3 / 4" caption="Reusable merchandise that goes out with the refills." />
          </div>
        </div>

        <div style={{ paddingTop: 'var(--section-gap)' }}>
          <WaveSection narrow={narrow} title="Painted, not wrapped">
            <p style={{ margin: 0 }}>The first version was planned as a full vinyl wrap. I dropped it because I wanted the truck to be environmentally conscious all the way through, and paint was the better option. The redesign helped here too: the simpler version is also what made it paintable.</p>
          </WaveSection>
        </div>

        <WaveRule />
        <div style={{ paddingTop: 'var(--space-7)' }}>
          <CollapsedText title="Reflection">
            <p style={{ margin: 0 }}>I'd change the color palette. Green for sustainability was the predictable choice.</p>
          </CollapsedText>
        </div>

        <WaveRule label="Credits" />
        <div style={{ paddingTop: 'var(--space-6)' }}>
          <CreditBlock rows={[
            { label: 'Year', value: '2025' },
            { label: 'Context', value: 'Course project, conceptual' },
            { label: 'Tools', value: 'Illustrator' },
          ]} />
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
Object.assign(window, { WheelBarrow, WaveRule });
