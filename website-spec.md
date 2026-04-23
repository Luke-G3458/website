# Website Design Spec

## Purpose

Create a personal portfolio website that presents engineering, software, and music as connected forms of thoughtful creation. The site should give visitors a clear sense of range without feeling scattered, flashy, or overly promotional.

The design should provide a strong framework for adding real content later: project details, images, videos, personal writing, and contact behavior.

## Design Direction

The site should feel professional, calm, welcoming, warm, and carefully made. It should not feel like a generic startup landing page, a flashy developer portfolio, or an artsy experiment.

Key qualities:

- Dark, spacious, and understated.
- Warm and delightful without being playful or loud.
- Minimal and clean, but not sterile.
- Visual interest should come from real images, project media, careful spacing, and subtle interaction.
- No decorative filler, illustrations, random icons, or large abstract visuals.
- The layout should feel crafted and slightly organic while remaining professional.

## Visual System

### Color

Use a dark theme by default.

- Background: very dark warm charcoal, slate, or graphite. Avoid pure black.
- Surface: slightly lighter warm graphite for cards and panels.
- Text: soft off-white for primary text.
- Muted text: warm gray for descriptions and secondary labels.
- Accent: muted amber/copper. The accent should feel like warm light, brass, or instrument varnish, not bright orange.

Use a very subtle organic gradient on the page background. It should be barely noticeable and should not read as a visual effect.

### Typography

Typography should feel warm, calm, and professional.

- Use expressive but readable type choices.
- Avoid default-feeling system font stacks if possible.
- Headings should be understated, not oversized or aggressive.
- Body text should be comfortable to read and should support reflective writing.

### Shape And Depth

- Use subtle rounded corners.
- Avoid heavy borders and drop shadows.
- Use background contrast to distinguish cards from the page.
- Use very subtle hover glow on cards and interactive panels.
- Cards can brighten slightly on hover with a soft amber inner glow.
- The portrait may have an extremely subtle amber glow or ring.

## Site Structure

Primary pages:

- Home
- Projects
- Music
- About
- Contact

Footer appears on every page.

## Navigation

Use a sticky top navigation bar.

Desktop layout:

- Name/logo text on the left.
- Nav links on the right.
- Contact visually separated as a calm amber pill.
- Active page link should be indicated subtly.

Scroll behavior:

- Nav may shrink slightly after scrolling.
- Do not use strong blur effects.
- Keep the nav calm and predictable.

Mobile layout:

- Use a simple hamburger menu.
- Open a calm, minimal panel with the same nav items.
- Contact should retain amber emphasis.

## Footer

Footer should be minimal and appear on every page.

- Left-aligned icons only.
- Include GitHub, LinkedIn, and email.
- No large footer sitemap.
- No prominent name text required.

## Homepage

Homepage section order:

1. Hero
2. Philosophy
3. Featured Projects
4. Domains
5. Contact CTA

### Hero

The hero should fill the first viewport, but the content should sit slightly above vertical center so the philosophy section can partially appear below the fold.

Desktop layout:

- Circular portrait on the left.
- Text block on the right.
- Name is the largest element.
- A short one-line statement below the name introduces engineering, software, and music.
- Equal domain bubbles below the one-liner: `Engineering`, `Software`, `Music`.

Hero behavior:

- No primary CTA.
- No scroll arrow.
- The page should naturally imply scrolling by allowing the next section to peek into view.

Mobile layout:

- Portrait stacks above the text.
- Keep the hero calm and not overly tall if the viewport is small.

### Philosophy

Place a short quote-style block immediately after the hero.

- Left-aligned.
- Narrow editorial column.
- Slightly left of center, not pinned to the viewport edge.
- No quotation marks.
- No attribution label.
- Text content will be written later.

The section should feel like a reflective pause before the project gallery.

### Featured Projects

Show exactly 3 featured projects on the homepage.

Layout:

- Responsive grid.
- Maximum of 3 columns.
- Equal-height cards.
- Cards should be image-led and calm.

Card structure:

- Tags at the top as rounded pills.
- Image or labeled placeholder area.
- Project title.
- Short summary.

Interactions:

- Subtle hover scale or lift.
- Slightly brighter surface on hover.
- Soft amber glow on hover.
- Clicking opens a project modal.
- Project links should not appear directly on the card.

### Domains

Show three calm columns:

- Engineering
- Software
- Music

Each column should contain only the heading and rows of skill tags. All three domains should feel equally serious in this section.

Visual treatment:

- Same amber accent family across all columns.
- Use different opacity or subtle surface variation for distinction.
- Natural column height based on content.
- No icons.

### Contact CTA

Close the homepage with a centered call to action that links to the Contact page.

Tone should be warm and direct, not salesy.

Suggested intent:

- Invite engineering, software, or music-related contact.
- Use a clear link/button to the Contact page.

## Projects Page

The Projects page should use the same card system as the homepage, but display all projects.

Layout:

- Same maximum content width as the homepage.
- Maximum of 3 columns.
- Additional projects create more rows, not wider layouts.
- No filters in the first version.
- Tags are shown, but are not interactive filters.

Project cards:

- Equal height.
- Tags at top.
- Image or labeled placeholder.
- Title.
- Summary.
- Opens modal on click.

### Project Modal

Use a medium-large centered modal.

Behavior:

- Background remains faintly visible.
- Click outside closes modal.
- Escape closes modal.
- Include previous and next arrows for browsing projects.

Layout:

- Media at top.
- Text below.
- Tags visible near title.
- Links appear only inside the modal as text links.

Initial media support:

- Focus on images first.
- Data model may allow other media types later, but project videos are not needed for v1.

## Music Page

The Music page should feel connected to the rest of the site, but more editorial and expressive than the Projects page.

Structure:

1. Calm centered intro section for writing about music generally.
2. Bass section.
3. Guitar section.
4. Piano section.
5. Centered CTA for gigs or lessons.

Instrument sections:

- Not cards.
- Each section uses one main image and one paragraph.
- Sections alternate left/right visually as the visitor moves down the page.
- Bass is offset somewhat left.
- Guitar is offset somewhat right.
- Piano returns left.
- No instrument should feel more important than another.

Each instrument section includes a `Watch media` button.

### Music Media Modal

Each instrument has its own media modal.

Modal behavior:

- Show one selected image or video at a time.
- Show a row of thumbnails below.
- Allow selecting another thumbnail.
- Keep the modal calm and consistent with the project modal style.

Music CTA:

- Centered near the bottom.
- Text intent: `Reach out about gigs or lessons`.
- Link to the normal Contact page.

No gear or instrument-equipment section in v1.

## About Page

Keep the About page intentionally simple for now.

Layout:

- Page title.
- Placeholder area for future text.
- Use the same calm content width and typography system.

The page should support longer reflective writing later, including thoughts on creation, faith, problem solving, learning, and building.

## Contact Page

The Contact page should be simple and focused.

Layout:

- Title at the top.
- Single-column form in a limited-width column.
- No intro paragraph required.
- Footer provides social links, so no separate social/contact links are needed on the page.

Fields:

- Name.
- Email.
- Domain dropdown.
- Note/message.

Dropdown options:

- Engineering
- Software
- Music
- Lessons
- Other

Dropdown is optional.

Submit button:

- Use the amber accent strongly.
- Should still feel tasteful and consistent with the site.

Success behavior:

- Show a popup/toast success message after successful submission.

## Responsive Behavior

Desktop:

- Keep content width moderate.
- Do not allow sections to stretch edge-to-edge on large screens.
- Project grid can reach 3 columns.

Tablet:

- Project grid can reduce to 2 columns.
- Hero may remain two-column if space allows.

Mobile:

- Hero stacks portrait above text.
- Project grid becomes 1 column.
- Music sections stack image and text.
- Navigation becomes hamburger menu.
- Maintain generous spacing without making pages feel empty.

## Data Shape

Content should be editable through TypeScript data structures rather than being hardcoded directly into page markup.

### Project

Suggested project fields:

```ts
type Project = {
  id: string;
  title: string;
  date?: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  media: ProjectMedia[];
  links?: ProjectLink[];
};
```

```ts
type ProjectMedia = {
  type: "image";
  src: string;
  alt: string;
  label?: string;
};
```

```ts
type ProjectLink = {
  label: string;
  href: string;
};
```

### Music

Suggested music fields:

```ts
type MusicInstrument = {
  id: "bass" | "guitar" | "piano";
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    label?: string;
  };
  media: MusicMedia[];
};
```

```ts
type MusicMedia = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title?: string;
  alt?: string;
};
```

## Suggested Components

Create reusable components where they reduce repetition without making the design feel mechanical.

Recommended:

- `SiteNav`
- `Footer`
- `ProjectGrid`
- `ProjectCard`
- `ProjectModal`
- `Tag`
- `MusicInstrumentSection`
- `MusicMediaModal`
- `ContactForm`
- `Toast`
- `Reveal`

Avoid over-abstracting page sections too early. The homepage, music page, and contact page should be allowed to have distinct rhythm and composition.

## Motion And Interaction

Motion should be subtle and fluid.

Recommended effects:

- Sections fade in and move up slightly on scroll.
- Cards gently brighten and scale on hover.
- Cards may have a soft amber glow that responds to hover.
- Modals animate in softly.
- Nav shrinks slightly after scrolling.

Avoid:

- Strong parallax.
- Large movement.
- Flashy cursor effects.
- Background mouse-follow glows.
- Busy decorative animation.

Mouse-follow glow, if implemented, should be limited to cards and interactive panels only.

## Placeholder Content

Use placeholder text and labeled image blocks in the first implementation.

Image placeholders may contain labels like:

- `Portrait`
- `Project image`
- `Bass image`
- `Guitar image`
- `Piano image`

These labels are temporary and should be removed when real images are added.

Do not invent detailed personal content. Leave room for real project descriptions, philosophy writing, and music text to be added later.

## Implementation Priorities

Recommended first build order:

1. Establish global visual tokens, typography, layout width, and dark theme.
2. Build navigation and footer.
3. Build homepage hero and philosophy section.
4. Build project data, project grid, cards, and modal.
5. Build domains section.
6. Build Projects page using the shared project system.
7. Build Music page and music media modal.
8. Build About placeholder page.
9. Build Contact page and form UI.
10. Add subtle reveal animations and hover polish.

