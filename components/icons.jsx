/* ─────────────────────────────────────────────
   Beacon Icon Library
   All SVG icons extracted from Figma.
   Import: import { IconPulse, IconShare, ... } from './icons'
   ───────────────────────────────────────────── */

export function IconPulse() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.97 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.97 12.7L7.97 12.68C8.72 12.68 9.56 13.25 9.84 13.95L10.98 16.83C11.24 17.48 11.65 17.48 11.91 16.83L14.2 11.02C14.42 10.46 14.83 10.44 15.11 10.97L16.15 12.94C16.46 13.53 17.26 14.01 17.92 14.01H21.98" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconShare() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.05 2.659L3.807 6.934C2.396 7.309 2.11 9.105 3.267 10.262L7.763 14.758L13.889 10.196L9.327 16.323L13.823 20.819C14.98 21.976 16.776 21.689 17.151 20.279L21.427 4.036C21.647 3.21 20.887 2.45 20.06 2.67L20.05 2.659Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconReactionHappy({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 7.124C5 6.422 5.27 5.852 5.6 5.852C5.93 5.852 6.2 6.422 6.2 7.124" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.8 7.124C9.8 6.422 10.07 5.852 10.4 5.852C10.73 5.852 11 6.422 11 7.124" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <path d="M10.754 9.188C10.292 10.25 9.236 11 8 11C6.764 11 5.708 10.256 5.246 9.188" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

export function IconReactionAngry({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.333C11.314 13.333 14 10.647 14 7.333C14 4.02 11.314 1.333 8 1.333C4.686 1.333 2 4.02 2 7.333C2 10.647 4.686 13.333 8 13.333Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <circle cx="5.6" cy="6.133" r="0.6" fill={color}/><circle cx="9.2" cy="6.133" r="0.6" fill={color}/>
      <path d="M8.432 4.615C8.948 4.429 9.884 4.369 10.46 4.771" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.476 8.497C7.436 8.329 9.092 8.521 9.974 9.391" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.62 4.195C6.146 3.919 5.234 3.703 4.598 3.997" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

export function IconReactionSad({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.295 10.37C10.295 11.096 9.269 10.898 8.003 10.898C6.737 10.898 5.711 11.102 5.711 10.37C5.711 9.638 6.737 9.05 8.003 9.05C9.269 9.05 10.295 9.638 10.295 10.37Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <path d="M8.003 14C11.316 14 14.003 11.314 14.003 8C14.003 4.686 11.316 2 8.003 2C4.689 2 2.003 4.686 2.003 8C2.003 11.314 4.689 14 8.003 14Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <circle cx="5.603" cy="7.4" r="0.6" fill={color}/><circle cx="10.403" cy="7.4" r="0.6" fill={color}/>
    </svg>
  );
}

export function IconAddReaction({ color = "#141810" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15.634 15.634C14.7 16.569 13.414 17.143 12 17.143C10.586 17.143 9.291 16.569 8.366 15.634" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.474 3.566C12.994 3.48 12.506 3.429 12 3.429C7.268 3.429 3.428 7.269 3.428 12C3.428 16.731 7.268 20.571 12 20.571C16.731 20.571 20.571 16.731 20.571 12C20.571 11.494 20.52 11.006 20.434 10.526" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.429 6H20.572" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18 8.571V3.429" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

export function IconLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.08387 10.0419L6.75435 11.3714C6.16769 11.9581 5.21529 11.9581 4.62862 11.3714C4.04196 10.7847 4.04196 9.83235 4.62862 9.24569L6.39624 7.47806C6.98291 6.89139 7.93531 6.89139 8.52197 7.47806" stroke="black" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.91613 5.95809L9.24565 4.62857C9.83231 4.0419 10.7847 4.0419 11.3714 4.62857C11.958 5.21523 11.958 6.16762 11.3714 6.75428L9.60374 8.52191C9.01708 9.10858 8.06468 9.10858 7.47802 8.52191" stroke="black" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

export function IconVerify() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.56 10.738L20.2 9.154c-.266-.302-.478-.87-.478-1.274V6.178c0-1.148-.946-2.094-2.094-2.094h-1.702c-.394 0-.972-.212-1.274-.478l-1.584-1.35c-.89-.758-2.348-.758-3.248 0L8.236 3.616c-.292.256-.87.468-1.264.468H5.22c-1.148 0-2.094.946-2.094 2.094V7.89c0 .394-.212.962-.468 1.264l-1.34 1.594c-.748.89-.748 2.338 0 3.228l1.34 1.594c.256.302.468.87.468 1.264v1.712c0 1.148.946 2.094 2.094 2.094h1.752c.394 0 .972.212 1.264.478l1.584 1.35c.89.758 2.348.758 3.248 0l1.584-1.35c.302-.266.87-.478 1.274-.478h1.702c1.148 0 2.094-.946 2.094-2.094v-1.702c0-.394.212-.972.478-1.274l1.35-1.584c.768-.9.768-2.348.01-3.238z" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.38 12l2.33 2.33 4.66-4.66" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconChevronForward({ color = "#999" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconChevronBack({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconInfo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11.949 11.04c-.16 0-.312.063-.424.176a.6.6 0 0 0-.176.424v3.766a.6.6 0 0 0 1.2 0v-3.766a.6.6 0 0 0-.6-.6Z" fill="#999"/>
      <path d="M12.749 8.863c0 1.066-1.6 1.066-1.6 0s1.6-1.066 1.6 0Z" fill="#999"/>
      <circle cx="11.782" cy="11.782" r="7.5" stroke="#999"/>
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M1.33 4.33l1.67 1.67 3.33-3.33" stroke="#141810" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconClose({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSearch({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.5"/>
      <path d="M20 20l-3-3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconFilter({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 8h16M8 16h8M6 12h12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPlus({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconGlobe({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

export function IconCrossed({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconUpDown({ color = "#141810" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l4 5H8l4-5zM12 21l-4-5h8l-4 5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconBeaconDot() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#FF8800"/>
    </svg>
  );
}

/* ── Nav Bar Icons (outlined = inactive, filled = active) ── */

export function IconNavHome({ active = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.02 1.64 3.67 3.66 3.67h12.68c2.02 0 3.66-1.65 3.66-3.66v-7.3c0-1.21-.81-2.76-1.79-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5.01.14z" stroke="#141810" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={active ? "#141810" : "none"}/>
    </svg>
  );
}

export function IconNavIssues({ active = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" stroke="#141810" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01" stroke="#141810" strokeWidth={active ? "2.5" : "1.5"} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconNavPulse({ active = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.97 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22Z" stroke="#141810" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={active ? "#141810" : "none"}/>
      <path d="M1.97 12.7L7.97 12.68C8.72 12.68 9.56 13.25 9.84 13.95L10.98 16.83C11.24 17.48 11.65 17.48 11.91 16.83L14.2 11.02C14.42 10.46 14.83 10.44 15.11 10.97L16.15 12.94C16.46 13.53 17.26 14.01 17.92 14.01H21.98" stroke={active ? "#fff" : "#141810"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconNavOfficials({ active = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97z" stroke="#141810" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" fill={active ? "#141810" : "none"}/>
      <path d="M12 10a2.33 2.33 0 100-4.66A2.33 2.33 0 0012 10zM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26" stroke={active ? "#fff" : "#141810"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconNavAccount({ active = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" stroke="#141810" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={active ? "#141810" : "none"}/>
    </svg>
  );
}
