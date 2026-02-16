

# Rooms Section -- Complete Redesign

## The Problem
The current design stacks three identical full-width dark image blocks (420px each) vertically. Every card looks the same -- same gradient, same layout, same positioning. It's repetitive, heavy, and feels like a stock template. There's zero visual rhythm or surprise.

## The New Approach: Asymmetric Editorial Layout

Inspired by how Aman, Four Seasons, and other top-tier luxury hotel websites present their rooms -- with **generous whitespace, alternating asymmetric layouts, and elegant restraint**.

### Design Concept

Instead of identical stacked dark blocks, each room gets a unique visual treatment with an **alternating two-column layout**:

- **Room 1 (Deluxe)**: Large image on the LEFT (60% width), text content on the RIGHT with generous padding, on the light cream background
- **Room 2 (Executive)**: Text on the LEFT, large image on the RIGHT -- reversed layout for visual rhythm
- **Room 3 (Presidential)**: Full-width cinematic hero image with a centered glass overlay card containing the text -- a "showstopper" finale

### Key Design Elements

1. **Whitespace-first**: Cream/light background (`bg-background`) instead of the dark `bg-section-alt` block. Let the images breathe.
2. **Rounded image frames**: Images wrapped in `rounded-[2rem]` containers with subtle shadow, not edge-to-edge.
3. **Elegant typography**: Room name in large serif, details in spaced uppercase sans-serif, description in light muted text. Price displayed subtly -- not shouting like e-commerce.
4. **Thin gold accent line** separating the detail text from the room name for a refined touch.
5. **Hover interactions**: Image scales subtly on hover (`scale-[1.03]`), Reserve link arrow slides right.
6. **Mobile**: Clean vertical stack with each room as a tall image card with text below (not overlaid), maintaining the minimal feel.

### Visual Rhythm

```text
+--------------------------------------------------+
|  [  IMAGE (60%)  ]    Room Name (serif)           |
|  [  rounded-2rem ]    King Bed . Rain Shower      |
|  [               ]    ────── (gold line)          |
|  [               ]    Description text...         |
|  [               ]    $320/night   Reserve ->     |
+--------------------------------------------------+
|                                                    |
+--------------------------------------------------+
|    Room Name (serif)    [  IMAGE (60%)  ]         |
|    Super King . Bath    [  rounded-2rem ]         |
|    ────── (gold line)   [               ]         |
|    Description text...  [               ]         |
|    $580/night Reserve   [               ]         |
+--------------------------------------------------+
|                                                    |
+--------------------------------------------------+
|        [ FULL-WIDTH CINEMATIC IMAGE ]             |
|        [   glass overlay card in center   ]       |
|        [   Presidential Suite . $1,200    ]       |
+--------------------------------------------------+
```

## Technical Details

### File: `src/components/RoomsSection.tsx`
- Remove the dark `bg-section-alt` background, use `bg-background` (cream)
- Replace the single `rooms.map` with individual, hand-crafted layouts for each room to allow asymmetry
- First two rooms: CSS Grid `grid-cols-1 md:grid-cols-5` with `col-span-3` for image and `col-span-2` for text (reversed for the second)
- Third room: full-width relative image container with a centered `glass-strong` overlay
- Mobile: Simple vertical stack -- image (rounded, full-width) followed by text block underneath
- Keep the existing `useScrollReveal` hook for entrance animation
- Remove embla carousel for mobile (not needed with this cleaner layout)
- Each room separated by generous `py-16 md:py-24` spacing

### No other files need changes
The existing CSS utilities (`glass-strong`, `text-gradient-gold`, `glow-accent`, etc.) and Tailwind config already support everything needed.

