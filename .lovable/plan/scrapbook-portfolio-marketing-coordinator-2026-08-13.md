# Scrapbook Portfolio — Marketing Coordinator

A 6-page portfolio site with a warm paper-craft/scrapbook aesthetic inspired by your reference: torn-paper cards, taped photos, binder clips, grid-paper texture, sticker accents — but in Warm Sand Craft colors (kraft cream, terracotta, sage) with Bebas Neue display headings and Barlow body text.

## Pages

1. **Home** (`/`) — Big "PORTFOLIO" collage headline with your name and title, plus five paper-card tiles that navigate to each section (About, Skills, Work, Case Studies, Connect). Navigation is visual and obvious.
2. **About Me** (`/about`) — Taped polaroid photo frame, short bio, and a "Download Resume" button.
3. **Skills & Certifications** (`/skills`) — Three grouped notecards for Soft Skills, Operational, and Technical & Platforms; a tool "sticker wall" grouping every platform you listed (Digital Ads, Email, Social, SEO, CRM, Analytics, Design, Video, Web, PM, AI) rendered as labeled icon chips; certifications as a taped list with year tags.
4. **My Work** (`/work`) — Six category cards: Social Media, Branding, Web, Print & Digital Media, Email Marketing, Blog Content. Each opens a category page (`/work/$category`) with a placeholder gallery grid you can fill later.
5. **Case Studies** (`/case-studies`) — Three placeholder case-study cards (challenge / action / result layout) ready for real numbers.
6. **Connect** (`/connect`) — "Thanks for visiting! Let's connect & collaborate" with phone, email, and LinkedIn as placeholders.

A sticky paper-tab header links all pages; footer repeats contact.

## Placeholders

Phone, email, LinkedIn URL, work samples, and case-study content ship as clearly marked placeholders. Your headshot and resume PDF get wired in as soon as you upload them — until then the photo frame shows an illustrated placeholder and the resume button points to a stub file.

## Technical notes

- Warm Sand Craft palette (`#faf8f5`, `#f0ebe3`, `#c4654a`, `#87a878`) added as oklch semantic tokens in `src/styles.css`; Bebas Neue + Barlow loaded via `<link>` in `src/routes/__root.tsx` and registered in `@theme`.
- Craft utilities as tokens/utilities: paper texture, torn edge, tape strip, binder clip, slight card rotation, soft drop shadow.
- One route file per page under `src/routes/`, plus `work.$category.tsx` for work categories; each leaf route gets its own `head()` title/description/og tags.
- Shared components: `PaperCard`, `TapeStrip`, `SectionHeading`, `ToolChip`, `SiteHeader`, `SiteFooter`.
- Tool/brand icons rendered as styled chips (lucide icons + text labels) so no third-party logo assets are needed.
- Generated illustrated assets: home collage background/texture and About placeholder photo frame.
- Static content only — no backend needed.
