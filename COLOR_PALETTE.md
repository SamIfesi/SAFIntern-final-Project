# GPA Calculator - Color Palette 🎨

## Primary Colors (Orange)

| Color      | Hex Code  | Usage                               |
| ---------- | --------- | ----------------------------------- |
| Orange-500 | `#f97316` | Primary buttons, links, borders     |
| Orange-600 | `#ea580c` | Hover states, dark accent           |
| Orange-400 | `#fb923c` | Secondary elements                  |
| Orange-300 | `#fdba74` | Light backgrounds, gradients        |
| Orange-100 | `#ffedd5` | Very light backgrounds, focus rings |
| Orange-700 | `#c2410c` | Dark accents                        |
| Orange-900 | `#7c2d12` | Very dark accents (dark mode)       |

## Accent Colors

| Color     | Hex Code  | Usage                   |
| --------- | --------- | ----------------------- |
| Green-500 | `#10b981` | Success, Add button     |
| Green-600 | `#059669` | Green hover state       |
| Green-400 | `#34d399` | Light green (dark mode) |
| Red-500   | `#ef4444` | Error, Remove button    |
| Red-600   | `#dc2626` | Red hover state         |
| Red-400   | `#f87171` | Light red (dark mode)   |

## Neutral Colors (Light Mode)

| Color    | Hex Code  | Usage                |
| -------- | --------- | -------------------- |
| White    | `#ffffff` | Backgrounds, cards   |
| Gray-50  | `#fafafa` | Light backgrounds    |
| Gray-100 | `#f5f5f5` | Tertiary backgrounds |
| Gray-200 | `#e5e5e5` | Borders              |
| Gray-300 | `#d4d4d4` | Border hover         |
| Gray-500 | `#737373` | Tertiary text        |
| Gray-600 | `#525252` | Secondary text       |
| Gray-900 | `#171717` | Primary text         |

## Dark Mode Colors

| Color         | Hex Code  | Usage                     |
| ------------- | --------- | ------------------------- |
| Black         | `#1a1a1a` | Dark background           |
| Dark-Gray-700 | `#262626` | Dark secondary background |
| Dark-Gray-600 | `#333333` | Dark tertiary background  |
| Dark-Gray-500 | `#404040` | Dark borders              |
| Dark-Gray-300 | `#a3a3a3` | Dark secondary text       |

## Color Usage Guide

### Buttons

- **Primary Action**: Orange-500 background, white text
- **Add/Success**: Green-500 background, white text
- **Remove/Danger**: Red-500 background, white text
- **Load Data**: Orange-400 background, white text
- **Reset**: Gray-100 background, Gray-900 text

### Gradients

```css
linear-gradient(135deg, #f97316, #fdba74)
```

### Text Hierarchy

- **Primary Text**: Gray-900 (light mode), Gray-900 inverted (dark mode)
- **Secondary Text**: Gray-600
- **Tertiary Text**: Gray-500

### Borders

- **Default**: Gray-200
- **Hover**: Gray-300
- **Focus**: Orange-500

## CSS Variables

All colors are defined as CSS custom properties in `:root`:

```css
:root {
  --orange-500: #f97316;
  --green-500: #10b981;
  --gray-900: #171717;
}
```

---

**Last Updated**: December 2025
