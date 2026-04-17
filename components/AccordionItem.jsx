import { useState } from "react";
import { colors, typography, radii } from "./tokens";
import { IconPlus } from "./icons";

/**
 * AccordionItem — Expandable row with icon + title + plus/minus toggle
 * Used on: Issue Detail (Consensus View, Contention Points)
 *
 * Props:
 *   icon: ReactNode — Left icon
 *   title: string — Section title
 *   children: ReactNode — Expandable content
 *   defaultOpen: boolean
 */
export default function AccordionItem({ icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={styles.card}>
      <div style={styles.header} onClick={() => setOpen(!open)}>
        <div style={styles.left}>
          {icon && <span style={styles.icon}>{icon}</span>}
          <span style={styles.title}>{title}</span>
        </div>
        <span style={{ ...styles.toggle, transform: open ? "rotate(45deg)" : "none" }}>
          <IconPlus color={colors.slate} />
        </span>
      </div>
      {open && children && (
        <div style={styles.content}>{children}</div>
      )}
    </div>
  );
}

const styles = {
  card: {
    width: "100%", borderRadius: radii.card,
    backgroundColor: colors.warmBg,
    fontFamily: typography.family, overflow: "hidden",
  },
  header: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "16px 18px", cursor: "pointer",
  },
  left: {
    display: "flex", alignItems: "center", gap: 12,
  },
  icon: {
    display: "flex", alignItems: "center",
  },
  title: {
    fontSize: 18, fontWeight: typography.weight.extrabold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5,
  },
  toggle: {
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "transform 0.2s ease",
  },
  content: {
    padding: "0 18px 18px",
  },
};
