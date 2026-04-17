import { colors, typography, radii } from "./tokens";
import { IconChevronForward } from "./icons";

/**
 * StancesCard — Title + subtitle + two stat boxes
 * Used on: Consistency detail (Stances, Inconsistencies)
 *
 * Props:
 *   title: string — Card heading (e.g. "Stances")
 *   subtitle: string — Description line
 *   stat1Label: string — First box label
 *   stat1Value: string|number — First box value
 *   stat2Label: string — Second box label
 *   stat2Value: string|number — Second box value
 *   onClick: () => void
 */
export default function StancesCard({ title, subtitle, stat1Label, stat1Value, stat2Label, stat2Value, onClick }) {
  return (
    <div style={styles.card}>
      <div style={styles.header} onClick={onClick}>
        <div style={styles.titleCol}>
          <h3 style={styles.title}>{title}</h3>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        </div>
        <IconChevronForward color={colors.gray} />
      </div>
      <div style={styles.statsRow}>
        <div style={styles.statBox}>
          <span style={styles.statLabel}>{stat1Label}</span>
          <span style={styles.statValue}>{stat1Value}</span>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statLabel}>{stat2Label}</span>
          <span style={styles.statValue}>{stat2Value}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "100%", borderRadius: radii.card,
    backgroundColor: colors.warmBg,
    padding: 16, fontFamily: typography.family,
    display: "flex", flexDirection: "column", gap: 16,
  },
  header: {
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    cursor: "pointer",
  },
  titleCol: {
    flex: 1, display: "flex", flexDirection: "column",
  },
  title: {
    fontSize: 18, fontWeight: typography.weight.extrabold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  subtitle: {
    fontSize: 16, fontWeight: typography.weight.semibold,
    color: colors.slate, lineHeight: "200%", letterSpacing: -0.5, margin: 0,
  },
  statsRow: {
    display: "flex", gap: 16,
  },
  statBox: {
    flex: 1, borderRadius: radii.termBadge,
    border: `1px solid ${colors.creamBorder}`,
    backgroundColor: colors.warmBg,
    padding: 12, display: "flex", flexDirection: "column", gap: 8,
  },
  statLabel: {
    fontSize: 16, fontWeight: typography.weight.semibold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5,
  },
  statValue: {
    fontSize: 22, fontWeight: typography.weight.semibold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -1,
  },
};
