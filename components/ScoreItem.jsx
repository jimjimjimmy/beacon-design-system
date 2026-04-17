import { colors, typography } from "./tokens";
import { IconChevronForward, IconInfo } from "./icons";

/**
 * ScoreItem — Score breakdown row for Official Profile
 * Used on: Score page (Participation, Consistency, Conduct)
 *
 * Props:
 *   icon: ReactNode — Category icon (left)
 *   title: string — Score category name
 *   score: number — Current score
 *   maxScore: number — Maximum possible score
 *   avgScore: number — Average score (shown as orange marker)
 *   onClick: () => void
 */
export default function ScoreItem({ icon, title, score, maxScore, avgScore, onClick }) {
  const avgPercent = avgScore != null ? (avgScore / maxScore) * 100 : null;

  return (
    <div style={styles.card} onClick={onClick}>
      <div style={styles.row}>
        <div style={styles.left}>
          {icon && <span style={styles.icon}>{icon}</span>}
          <span style={styles.title}>{title}</span>
        </div>
        <div style={styles.right}>
          <div style={styles.scoreWrap}>
            <span style={styles.score}>{score}</span>
            <span style={styles.maxScore}> /{maxScore}</span>
          </div>
          <IconChevronForward color={colors.slate} />
        </div>
      </div>
      {/* Average marker bar */}
      {avgPercent != null && (
        <div style={styles.barArea}>
          <div style={styles.barTrack}>
            <div style={{ ...styles.avgMarker, left: `${avgPercent}%` }}>
              <div style={styles.avgDot} />
              <span style={styles.avgLabel}>Avg</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    width: "100%", padding: "16px 0",
    fontFamily: typography.family, cursor: "pointer",
    borderBottom: `1px solid ${colors.cream}`,
  },
  row: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  left: {
    display: "flex", alignItems: "center", gap: 8,
  },
  icon: { display: "flex", alignItems: "center" },
  title: {
    fontSize: 18, fontWeight: typography.weight.extrabold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5,
  },
  right: {
    display: "flex", alignItems: "center", gap: 8,
  },
  scoreWrap: {
    display: "flex", alignItems: "baseline",
  },
  score: {
    fontSize: 22, fontWeight: typography.weight.bold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -1,
  },
  maxScore: {
    fontSize: 22, fontWeight: typography.weight.bold,
    color: colors.gray, lineHeight: "130%", letterSpacing: -1,
  },
  barArea: {
    marginTop: 8, paddingLeft: 32,
  },
  barTrack: {
    position: "relative", width: "100%", height: 20,
  },
  avgMarker: {
    position: "absolute", top: 0, transform: "translateX(-50%)",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
  },
  avgDot: {
    width: 2, height: 8, backgroundColor: colors.orange, borderRadius: 1,
  },
  avgLabel: {
    fontSize: 9, fontWeight: typography.weight.semibold,
    color: colors.orange, letterSpacing: -0.25,
  },
};
