

# Unified Irregular Navbar Shape with Logo Dip

## What You Want
Instead of a separate badge sitting on top of the navbar, the navbar itself will have an irregular shape -- it dips downward on the left side to cradle the logo. The entire thing is one continuous glass surface with no visual separation. Think of it as the navbar "growing" a bump downward on the left where the logo sits.

## How It Works

1. **At the top (not scrolled)**:
   - The navbar is one single element with an irregular shape: flat on the right, but dipping down on the left for the logo
   - Achieved using an SVG clip-path or a pseudo-element approach so the glass background flows seamlessly across the entire shape
   - The logo sits in the dipped area, fully visible with the same frosted glass behind it
   - No visible border or separation between the logo area and the nav links area

2. **On scroll (scrolled state)**:
   - The dip smoothly retracts and the navbar becomes a regular rounded pill shape (as it is now)
   - The logo shrinks to fit inline

## Technical Approach

### File: `src/components/Navbar.tsx`

- Remove the separate absolute-positioned logo container
- Instead, use a single navbar wrapper with a CSS clip-path that creates the irregular shape (flat top-right, dipped bottom-left)
- The clip-path transitions between the irregular shape (not scrolled) and a standard rounded rectangle (scrolled)
- Since CSS `clip-path` doesn't animate smoothly with `polygon`, we'll use an alternative approach:
  - Use a single container with dynamic padding/height on the left side
  - Apply `border-radius` creatively: large bottom-left radius when expanded, uniform radius when scrolled
  - The navbar background (glass effect) covers the entire irregular shape as one surface
- The logo and nav links sit inside the same flex container, with the left side having extra bottom padding when not scrolled

### Implementation Detail
- The navbar will use `grid` or `flex` layout where the left column (logo area) has a taller height when not scrolled
- `overflow: visible` on the navbar so the taller left section extends below
- A single background div behind everything with matching border-radius handles the unified glass look
- The background div uses the same `glass` class and has `rounded-full` on the right side but `rounded-b-3xl` on the left when expanded
- On scroll, everything transitions to uniform `rounded-full`

### Alternative (cleaner) approach -- Background Shape Element
- Keep the current layout structure
- Add a single background `div` that spans both the navbar area AND the logo dip area as one shape
- This background div has the glass styling and uses border-radius to create the seamless irregular shape
- Both the nav content and the logo are positioned on top of this single background
- On scroll, the background shape smoothly morphs into a regular pill

This approach gives the cleanest result: one glass surface, one shape, no seams.

### File: `src/index.css`
- No changes needed

