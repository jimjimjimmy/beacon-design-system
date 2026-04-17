/* ─────────────────────────────────────────────
   Beacon Design Tokens
   Single source of truth — swap this file to
   adapt to CSS vars, Tailwind config, or theme.
   ───────────────────────────────────────────── */

export const colors = {
  // Brand
  cream: "#f0e8d8",
  slate: "#141810",
  white: "#fafafa",
  red: "#de0100",
  orange: "#f80",
  deepGreen: "#39503d",

  // Backgrounds
  warmBg: "#fff9ed",
  pageBg: "#f0f0f0",

  // Neutrals
  gray: "#999",
  grayLight: "rgba(153, 153, 153, 0.25)",
  grayBorder: "rgba(153, 153, 153, 0.5)",
  slateTranslucent: "rgba(20, 24, 16, 0.24)",
  slateSubtle: "rgba(20, 24, 16, 0.6)",
  creamBorder: "#e9e1d3",
};

export const shadows = {
  card: "0 4px 15px rgba(0, 0, 0, 0.15)",
};

export const radii = {
  card: 10,
  badge: 3,
  termBadge: 5,
  button: 48,
};

export const typography = {
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export const spacing = {
  cardPadding: 18,
  sectionGap: 24,
  componentGap: 8,
};
