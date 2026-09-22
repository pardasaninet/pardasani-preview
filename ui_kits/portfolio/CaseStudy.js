/* CaseStudy, recovered from the compiled copy in ds-bundle.js (CaseStudy.jsx is not in the source repo). */
(() => {
const {
  SectionHeading,
  Divider,
  Mat,
  StrategyChain,
  CreditBlock,
  NextProject,
  Linen,
  Prose,
  Card,
  ProcessStep
} = window.PardasaniNetDesignSystem_2fc217;
function CaseStudy({
  project,
  go,
  openProject,
  narrow
}) {
  const P = window.P;
  /* Where a project has written copy it renders; where it does not, the slots
     stay. No project is half-real. */
  const c = project.copy || {};
  const i = P.projects.findIndex(p => p.slug === project.slug);
  const next = P.projects[(i + 1) % P.projects.length];
  const cols = narrow ? '1fr' : '220px 1fr';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProjectHeader, {
    project: project,
    narrow: narrow
  }), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(RoleBlock, {
    project: project
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Problem",
    title: "",
    level: 2,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement(Divider, {
    label: "Problem",
    spacing: "0 0 var(--space-5)"
  }), c.problem ? /*#__PURE__*/React.createElement(Prose, null, c.problem.map((t, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    style: {
      margin: 0
    }
  }, t))) : /*#__PURE__*/React.createElement(Slot, {
    lines: 3,
    size: "base",
    label: "problem statement \u2014 copy to come"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Divider, {
    label: "Strategy",
    spacing: "0 0 var(--space-5)"
  }), /*#__PURE__*/React.createElement(StrategyChain, {
    angle: c.angle,
    chain: c.chain || ['', '', ''],
    label: "Show the strategy chain",
    anglePending: project.needsAngle ? 'strategy angle — still to be written' : 'strategy angle — copy to come',
    style: {
      marginTop: 'var(--space-1)'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "Process",
    spacing: "0 0 var(--space-6)"
  }), c.process ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, c.process.map(s => /*#__PURE__*/React.createElement(ProcessStep, {
    key: s.number,
    number: s.number,
    title: s.title,
    body: s.body
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mat, {
    ratio: "4 / 3",
    caption: "Process",
    tint: "var(--texture-tint)"
  }), /*#__PURE__*/React.createElement(Mat, {
    ratio: "4 / 3",
    caption: "Process",
    tint: "var(--texture-tint)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    lines: 4,
    size: "base",
    label: "process write-up \u2014 first person pass needed"
  })))), /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "Finals",
    spacing: "0 0 var(--space-6)"
  }), c.captions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, c.captions.map((cap, n) => /*#__PURE__*/React.createElement(Mat, {
    key: cap,
    caption: cap,
    ratio: n === c.captions.length - 1 && !narrow ? '16 / 9' : '4 / 3',
    style: n === c.captions.length - 1 && !narrow ? {
      gridColumn: '1 / -1'
    } : undefined
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mat, {
    ratio: narrow ? '4 / 3' : '16 / 9',
    inset: "var(--space-6)",
    radius: "var(--radius-panel)",
    tint: "var(--texture-tint)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mat, {
    ratio: "3 / 4",
    caption: "Mockup",
    tint: "var(--texture-tint)"
  }), /*#__PURE__*/React.createElement(Mat, {
    ratio: "3 / 4",
    caption: "Mockup",
    tint: "var(--texture-tint)"
  })))), project.secondAct && /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mat)',
      boxShadow: 'var(--mat-inset)',
      borderRadius: 'var(--radius-hero)',
      padding: narrow ? 'var(--space-7) var(--space-5)' : 'var(--space-9) var(--panel-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-quiet)'
    }
  }, "Part two"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-3) 0 var(--space-5)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, project.secondAct), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mat, {
    ratio: "4 / 3",
    caption: "Desktop app"
  }), /*#__PURE__*/React.createElement(Mat, {
    ratio: "4 / 3",
    caption: "Physical device"
  })), /*#__PURE__*/React.createElement(Mat, {
    ratio: "16 / 9",
    caption: "Demo video"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    lines: 3,
    size: "base",
    label: "part two write-up \u2014 copy to come"
  })))), project.ongoing && /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "What came after",
    spacing: "0 0 var(--space-5)"
  }), /*#__PURE__*/React.createElement(Slot, {
    lines: 2,
    size: "base",
    label: "lookbook and catalogue \u2014 ongoing client work, copy to come"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mat, {
    ratio: "3 / 4",
    caption: "Lookbook"
  }), /*#__PURE__*/React.createElement(Mat, {
    ratio: "3 / 4",
    caption: "Catalogue"
  }))), /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "Reflection",
    spacing: "0 0 var(--space-5)"
  }), c.reflection ? /*#__PURE__*/React.createElement(Prose, null, c.reflection.map((t, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    style: {
      margin: 0
    }
  }, t))) : /*#__PURE__*/React.createElement(Slot, {
    lines: 3,
    size: "base",
    label: "reflection \u2014 copy to come"
  }), project.testingGap && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "What I would test next",
    spacing: "0 0 var(--space-5)"
  }), /*#__PURE__*/React.createElement(Slot, {
    lines: 3,
    size: "base",
    label: "no usability testing ran on this project \u2014 judgement stated here"
  }))), /*#__PURE__*/React.createElement(Section, {
    gap: "var(--section-gap-tight)"
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "Credits",
    spacing: "0 0 var(--space-6)"
  }), /*#__PURE__*/React.createElement(CreditBlock, {
    rows: c.credits || [{
      label: 'Year',
      value: project.year
    }, {
      label: 'Template',
      value: P.typeLine(project)
    }, {
      label: 'Live',
      value: project.live,
      href: project.live ? '#' : undefined
    }, {
      label: 'Repo',
      value: project.repo,
      href: project.repo ? '#' : undefined
    }],
    note: c.aiNote || (project.aiImagery ? 'Some staging imagery was AI-generated: there was no photography budget on this project.' : null)
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(NextProject, {
    title: next.title,
    type: P.typeLine(next),
    onClick: e => {
      e.preventDefault();
      openProject(next.slug);
    },
    onIndex: e => {
      e.preventDefault();
      go('work');
    }
  }))));
}
Object.assign(window, {
  CaseStudy
});
})();
