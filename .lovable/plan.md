

# Expanded Logo Badge on Hero, Compact on Scroll

## Concept
When the user is at the top of the page (hero section visible), the logo will appear larger and extend slightly below the navbar, sitting in a subtle frosted-glass circular/rounded badge that "overflows" the nav bar. As the user scrolls down, the logo smoothly transitions (shrinks) to its current compact size, fitting neatly inside the navbar.

## How It Works

1. **At the top (not scrolled)**:
   - Logo size increases to ~`h-20 sm:h-24` (roughly 2x current size)
   - The logo sits inside a soft glass-style circular container that visually extends below the navbar
   - The container has a subtle frosted background so all logo details are visible against the hero image
   - The navbar itself stays the same height; only the logo area overflows downward

2. **On scroll (scrolled state)**:
   - Logo smoothly animates down to `h-10 sm:h-12` (current size)
   - The glass badge disappears, and the logo sits inline within the navbar as it does now
   - All transitions use `duration-700` to match the existing navbar transition speed

3. **Responsive**: Works on all screen sizes; on mobile the expanded logo will be slightly smaller (`h-16`) but still prominent

## Technical Details

### File: `src/components/Navbar.tsx`

- Wrap the logo `<a>` tag in a container `<div>` that transitions between two states:
  - **Not scrolled**: Larger padding, glass background (`bg-white/20 backdrop-blur-md`), rounded-full shape, scaled-up logo
  - **Scrolled**: No extra background, normal size logo
- Use Tailwind transition classes for smooth size and opacity changes
- The logo container will use `relative` positioning so it can overflow the navbar without affecting layout of nav links
- Add a subtle `shadow-lg` or `glow-accent` on the expanded state for a premium feel

### File: `src/index.css`
- No changes needed; existing glass utilities are sufficient

