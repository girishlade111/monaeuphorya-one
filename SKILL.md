\---

name: design-system-mona-euphorya-photographer-in-copenhagen

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Mona Euphorya — Photographer in Copenhagen



\## Mission

Deliver implementation-ready design-system guidance for Mona Euphorya — Photographer in Copenhagen that can be applied consistently across documentation site interfaces.



\## Brand

\- Product/brand: Mona Euphorya — Photographer in Copenhagen

\- URL: https://monaeuphorya-one.framer.website/

\- Audience: developers and technical teams

\- Product surface: documentation site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=Work Sans`, `font.family.stack=Work Sans, Work Sans Placeholder, sans-serif`, `font.size.base=60px`, `font.weight.base=700`, `font.lineHeight.base=60px`

\- Typography scale: `font.size.xs=12px`, `font.size.sm=18px`, `font.size.md=20px`, `font.size.lg=40px`, `font.size.xl=60px`, `font.size.2xl=100px`

\- Color palette: `color.surface.base=#000000`, `color.text.secondary=#0000ee`, `color.surface.muted=#ffffff`, `color.text.inverse=#f56e0f`

\- Spacing scale: `space.1=3px`, `space.2=6px`, `space.3=20px`, `space.4=100px`

\- Radius/shadow/motion tokens: `radius.xs=80px`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



