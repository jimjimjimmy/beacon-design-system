import { colors, typography } from "./tokens";
import { IconBeaconDot, IconChevronForward } from "./icons";

/**
 * SectionTitle — Orange dot + title + subtitle + optional "View All" link
 * Used on: Home, Issues, Officials, Pulse Surveys
 *
 * Props:
 *   title: string — Bold section heading
 *   subtitle: string — Gray description below
 *   showViewAll: boolean — Show "View All >" link on right
 *   onViewAll: () => void — Click handler
 */
export default function SectionTitle({ title, subtitle, showViewAll = false, onViewAll }) {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.titleRow}>
          <span style={styles.dot}><IconBeaconDot /></span>
          <h2 style={styles.title}>{title}</h2>
        </div>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      </div>
      {showViewAll && (
        <div style={styles.viewAll} onClick={onViewAll}>
          <span style={styles.viewAllText}>View All</span>
          <IconChevronForward color={colors.slate} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    width: "100%", fontFamily: typography.family,
  },
  left: {
    display: "flex", flexDirection: "column", gap: 2, flex: 1,
  },
  titleRow: {
    display: "flex", alignItems: "center", gap: 8,
  },
  dot: {
    display: "flex", alignItems: "center",
  },
  title: {
    fontSize: 18, fontWeight: typography.weight.extrabold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  subtitle: {
    fontSize: 13, fontWeight: typography.weight.medium,
    color: colors.gray, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  viewAll: {
    display: "flex", alignItems: "center", gap: 4, cursor: "pointer",
  },
  viewAllText: {
    fontSize: 13, fontWeight: typography.weight.semibold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5,
    whiteSpace: "nowrap",
  },
};
