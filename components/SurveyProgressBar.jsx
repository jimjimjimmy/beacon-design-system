import { colors, typography } from "./tokens";

/**
 * SurveyProgressBar — Segmented progress bar + step counter
 * Used on: Pulse Survey question flow
 *
 * Props:
 *   current: number — Current step (1-based)
 *   total: number — Total steps
 */
export default function SurveyProgressBar({ current = 2, total = 3 }) {
  return (
    <div style={styles.container}>
      <div style={styles.barRow}>
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              ...styles.segment,
              backgroundColor: i < current ? colors.slate : colors.cream,
            }}
          />
        ))}
      </div>
      <span style={styles.counter}>{current}/{total}</span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    width: "100%", fontFamily: typography.family,
  },
  barRow: {
    display: "flex", gap: 4, width: "100%",
  },
  segment: {
    flex: 1, height: 4, borderRadius: 2,
  },
  counter: {
    fontSize: 13, fontWeight: typography.weight.medium,
    color: colors.gray, lineHeight: "130%", letterSpacing: -0.5,
  },
};
