/* Facts from the build brief only. Where copy does not exist yet, the value is
   null and the screen draws a labelled slot instead of inventing anything. */
window.P = {
  nav: [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
  contactLead: "I'm open to full-time roles, freelance projects and contract work in UX, visual design, and design and frontend. Based in New York.",
  footerColumns: [
    { label: 'Get in touch', links: [
      { label: 'Email', href: 'mailto:mannatpardasani@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mannat-pardasani', external: true },
      { label: 'Resume', href: '../documents/resume.html' },
      { label: 'Instagram', href: '#', external: true },
    ] },
    { label: 'Pages', pages: [
      { label: 'Home', id: 'home' },
      { label: 'Work', id: 'work' },
      { label: 'About', id: 'about' },
      { label: 'Colophon', id: 'colophon' },
    ] },
  ],
  footerLinks: [
    { label: 'Colophon', href: '#colophon' },
    { label: 'Email', href: 'mailto:mannat@pardasani.net' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mannat-pardasani', external: true },
  ],
  tracks: ['all', 'design', 'dev', 'strategy'],
  tags: ['brand', 'ui', 'ux', 'packaging', 'visual', 'code', 'motion'],
  featured: ['odd-jobs', 'delighto', 'thingalicious', 'lune', 'screen-sick'],
  projects: [
    { slug: 'odd-jobs', title: 'Odd Jobs', template: 'case', layout: 'bespoke', tracks: ['design','dev','strategy'], tags: ['ux','ui','brand'], year: '2026', video: true, testingGap: true,
      thesis: 'Odd Jobs is a campus-only gig platform where a university email replaces the resume.',
      featuredLine: 'A gig platform where a university email replaces the resume.',
      share: 'Odd Jobs is a campus-only gig platform, taken from research through to desktop, tablet and mobile.' },
    { slug: 'delighto', title: 'Delighto.ai', template: 'case', tracks: ['design','dev','strategy'], tags: ['ui','code','ux'], year: '2026', live: 'delighto.ai', repo: 'github.com/…', team: 9 },
    { slug: 'screen-sick', title: 'Screen Sick', template: 'case', tracks: ['design','dev','strategy'], tags: ['visual','code','ux'], year: '2025', secondAct: 'Yogi', video: true },
    { slug: 'thingalicious', title: 'thingalicious', template: 'case', tracks: ['design','strategy'], tags: ['brand','packaging','visual'], year: '2026', ongoing: true, aiImagery: true, photography: 49 },
    { slug: 'lune', title: 'Lune', template: 'case', tracks: ['design','strategy'], tags: ['packaging','brand','visual'], year: '2026',
      thesis: 'Lune is a sustainable packaging system where the bag outlives the delivery, and the label is carved and printed by hand.',
      featuredLine: 'The bag outlives the delivery.',
      share: 'Lune is packaging for reusable cotton pads that turns into permanent storage, with a label I carved and printed by hand.',
      copy: {
        thesis: 'Lune is a sustainable packaging system for reusable cotton pads, where the bag outlives the delivery and the label is carved by hand.',
        role: 'Solo. Research, bag construction sketches, label design, linocut carving and printing (learned from scratch for this), and AI-assisted mockups refined in Photoshop.',
        problem: [
          'The brief was sustainable packaging for an everyday dry good. Other people picked rice, other foods or toilet paper. I picked menstrual products, because of how much waste the category creates. The average menstruating person uses 11,000 to 16,000 disposable pads in their lifetime.',
          'I also wanted it to feel elevated. Most packaging in this space is either a standard cardboard box or an organic-looking carton, and I wanted Lune to be sustainable without being visually apologetic.',
        ],
        angle: 'The packaging should go from shipping container to permanent storage, so that nothing about the delivery gets thrown away.',
        chain: [
          'The product itself was already reusable, but its packaging still ends up in the bin, and the category tends to look either clinical or apologetically organic.',
          'Research into Japanese rice bag construction pointed me towards packaging that is built to be kept, which is what turned the bag into storage rather than a container.',
          'So I chose denim for its durability, a hand-carved label that needs no industrial printing, and I cut anything that didn\u2019t earn its place.',
        ],
        process: [
          { number: 1, title: 'Research', body: 'I started with Japanese rice bag construction, craft traditions, minimal packaging systems and analog production.' },
          { number: 2, title: 'The bag', body: 'I sketched bag constructions to test stability and closures. The variants that stayed had reinforced bottoms and rolled tops closed with recycled denim strips or cord, plus interior compartments to keep clean and used pads apart.' },
          { number: 3, title: 'Cutting the basket', body: 'I\u2019d designed a bamboo basket for the bag to sit in, with a cotton lining or pouch inside, and I liked the idea. But when you\u2019re producing something you have to ask what problem it solves, and this one wasn\u2019t big enough. Bamboo baskets take far more time and effort to make, and even at handmade, small-batch scale that broke reproducibility. Denim replaced both. It gave me the durability of the basket and the soft, flexible feel of the cotton, so one material does two jobs.' },
          { number: 4, title: 'The label', body: 'For the front label I explored crescent moons with horizontal line hatching, elegant and simple enough to carve. The type is Monarcha, regular and bold, which balances sophistication with approachability. I cut the back label down to four icons in a grid so each one would carve and stamp legibly. The palette is black and white, because it\u2019s accessible and because white recycled paper is the most common sustainable stock.' },
          { number: 5, title: 'Linocut', body: 'I learned linocut from scratch for this. I carved the stamp, tested prints to refine line weights and detail, and printed the finals in black ink on textured watercolor paper.' },
          { number: 6, title: 'Mockups', body: 'The hardest constraint was making the denim bag itself. I didn\u2019t have the resources to source or sew the denim, and it needs industrial-level stitching to look clean, especially the strip that ties the label to the bag. So I worked out the construction from how a paper bag is built, used ChatGPT to turn that into denim variations, then corrected the proportions and added realistic lighting in Photoshop. AI was the prototyping tool, not the idea.' },
        ],
        captions: [
          'I started from Japanese rice bag construction and other minimal packaging systems.',
          'These are the bag construction sketches, testing stability and closures.',
          'The label went through several rounds before it was simple enough to carve.',
          'Here I am carving the linocut stamp, which I learned to do for this project.',
          'These are the test prints on watercolor paper, used to refine the line weights.',
          'I generated the denim bag variations from my paper bag references, then corrected them in Photoshop.',
          'This is the final board.',
        ],
        reflection: ['I\u2019d go back to the back label. The four-icon grid solved legibility for the linocut, but the icons themselves are generic, and the size and weight information could be shown far more creatively. That\u2019s where I\u2019d start.'],
        credits: [
          { label: 'Year', value: '2026' },
          { label: 'Context', value: 'Course project, AD 432, Purdue, Spring 2026' },
          { label: 'Brand', value: 'Speculative' },
          { label: 'Tools', value: 'Illustrator, Photoshop, ChatGPT, linocut' },
        ],
        aiNote: 'The denim bag mockups were generated with AI from my own paper bag construction references, then corrected in Photoshop. The label was carved and printed by hand.',
      } },
    { slug: 'healing-cup', title: 'The Healing Cup', template: 'case', tracks: ['design','strategy'], tags: ['ux','motion','visual'], year: '2025', needsAngle: true },
    { slug: 'beers-across', title: 'beers across', template: 'case', tracks: ['design','strategy'], tags: ['brand','visual'], year: '2024', selfInitiated: true },
    { slug: 'wheel-barrow', title: 'the wheel barrow', template: 'case', layout: 'bespoke', tracks: ['design','strategy'], tags: ['brand','visual'], year: '2025',
      thesis: 'The wheel barrow is a zero-waste refill truck, and its identity was rebuilt around a single icon when the first version didn\u2019t read at scale.',
      angle: 'A refill shop that comes to you, with an identity that reads from across the street and is sustainable in how it\u2019s made.',
      share: 'The wheel barrow is an identity for a solar-powered refill truck, and the story of pulling a logo out of a pattern that was too busy to read.' },
    { slug: 'doberman', title: 'doberman', template: 'craft', typeLine: 'Logo design', tracks: ['design'], tags: ['brand','visual'], year: '2025' },
    { slug: 'chai-co', title: 'Chai & co.', template: 'craft', tracks: ['design'], tags: ['brand','ui'], year: '2024', selfInitiated: true },
    { slug: 'silverstone', title: 'Silverstone', template: 'craft', tracks: ['design'], tags: ['visual'], year: '2024', clarify: 'A 2024 project about the 2022 race.' },
  ],
  /* Real, from MannatPardasani-Resume.pdf. Nothing here is invented. */
  contact: {
    phone: '+1 (765) 767-3686',
    email: 'mannat@pardasani.net',
    site: 'pardasani.net/home',
    linkedin: 'mannat-pardasani',
  },
  summary: 'Designer and UX strategist with experiences in agency, in-house, & consulting. Proficient in the full design-to-code pipeline.',
  /* Home page about paragraph. The `summary` above stays as the resume/LinkedIn
     line, which has a different job. */
  aboutCopy: "I think of everything I design as an experience, whether it's something you hold or something you scroll. This site is a good example: I designed and built it myself, using AI to move fast while keeping the design and strategy in my hands.",
  education: [
    { role: 'B.F.A. Visual Communications Design', company: 'Purdue University, College of Liberal Arts', date: 'June 2026' },
    { role: 'B.S. Web Programming and Design', company: 'Purdue University, Polytechnic Institute', date: 'June 2026' },
  ],
  honors: [
    'Indian Emerging Scholar',
    'Undergraduate Annual Juried Exhibition 2023, 2024, 2026',
    "Dean's List",
    'Semester Honors',
  ],
  experience: [
    { company: 'Purdue RecWell', role: 'Outreach Specialist', date: 'May 2026 – June 2026',
      tags: ['Engagement Strategy', 'Photography', 'Content Management'],
      bullets: [
        'Own social media content strategy and production, building and executing a full content calendar that increases student participation in RecWell activities',
        'Analyze Meta engagement dashboards to identify recall and engagement patterns, using those insights to inform a data-driven content strategy',
        'Develop a distinct brand voice that communicates authentically with the student audience',
      ] },
    { company: 'Delighto.ai', role: 'Web Development', date: 'Aug 2025 – May 2026',
      tags: ['Responsive Design', 'Claude Code', 'Figma Make'],
      bullets: [
        'Translated hi-fidelity Figma screens into functioning website and app, while leveraging AI driven development tools to ensure pixel perfect accuracy.',
        'Collaborated with a team of 10 multi-faceted individuals to successfully execute a total rebrand.',
      ] },
    { company: 'Communique Marketing Services', role: 'UX Design Intern', date: 'Dec 2025 – Jan 2026',
      tags: ['Concept Development', 'User Flows', 'Wireframing', 'Stakeholder Presentations'],
      bullets: [
        'Generated and pitched activation campaign concepts for Google AI tools at multiple events.',
        'Created journey maps & wireframes for award-winning YouTube SpottedOnShorts bootcamp website. Coordinated implementation across design and development teams.',
      ] },
    { company: 'Purdue Student Life Marketing', role: 'Graphic Design Intern', date: 'Oct 2024 – Aug 2025',
      tags: ['Adobe CC', 'Consistency', 'Social Posts', 'Brand Identity'],
      bullets: [
        'Designed various print & digital projects across departments, while sticking to established brand style and voice.',
        'Developed logo and prepared kit (including primary, secondary, 1- 2- 3- color, usage guides, etc.) for FSCL 150th celebration.',
        'Created complete graphic elements and sub-branding for MHAW Wellness Wednesday, from promotional materials to signage.',
      ] },
    { company: 'peopleHum', role: 'Marketing Intern', date: 'May 2024 – Jul 2024',
      tags: ['Figma', 'Photoshop', 'B2B Marketing'],
      bullets: [
        'Produced high-volume B2B marketing deliverables within strict brand guidelines, across social, digital, and editorial formats to promote SaaS.',
        'Experimented with new AI-generation tools to expand the range of marketing assets produced.',
      ] },
    { company: 'KPMG', role: 'Analyst', date: 'May 2023 – July 2023',
      tags: ['AR/VR', 'Wireframing', 'Sketching', 'Digital Strategy'],
      bullets: [
        'Mapped AR/VR experience concepts for Samsung that showcased cutting edge technology.',
        "Developed UI for the organisation's internal chatbot.",
      ] },
  ],
  leadership: [
    { company: 'AIGA Purdue', role: 'Vice President', date: 'August 2024 – May 2026',
      bullets: ['Organizing professional development events (talks, panels, workshops, peer-to-peer networking, etc) for students in design fields. And craft events too!'] },
  ],
  skills: {
    Design: ['Adobe Creative Suite', 'Design Strategy', 'Interaction Design', 'Visual Design', 'Brand Design', 'Publication Design', 'Photography', 'Adobe Firefly', 'Figma', 'Cursor', 'Wix', 'Framer', 'Shopify'],
    Code: ['HTML', 'CSS', 'C++', 'JavaScript', 'ASP.NET', 'MySQL'],
    Research: ['User Research', 'Usability Testing', 'Storytelling'],
    Languages: ['English', 'Hindi', 'Spanish'],
  },
  process: [
    { number: 1, title: 'Research', body: "I start by getting to know the product inside out, then the people it's for: what they need, what they expect, and what would make them care." },
    { number: 2, title: 'Strategy', body: "Once I know who it's for, I work out what will actually land with them. That decides what gets made, whether it's a brand, a campaign or an interface, so every choice has a reason behind it." },
    { number: 3, title: 'Make', body: "Then I design and build it. I go from design file to working prototype using dev tools to get a real version in front of people quickly, then refine the details. I'm always trying out new AI design tools as they come out, so I know what's worth using and what isn't." },
  ],
};
window.P.bySlug = (s) => window.P.projects.find((p) => p.slug === s);
window.P.typeLine = (p) => p.typeLine || (p.template === 'case' ? 'Case study' : 'Craft piece');
