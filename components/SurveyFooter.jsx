import { colors, typography } from "./tokens";

/**
 * SurveyFooter — "Be Part of the Signal" + join count
 * Used on: Pulse Survey question flow (bottom)
 *
 * Props:
 *   count: number — Number of participants
 */
export default function SurveyFooter({ count = 6876 }) {
  return (
    <div style={styles.container}>
      <p style={styles.headline}>Be Part of the Signal</p>
      <p style={styles.subtext}>
        Join {count.toLocaleString()} others by sharing your voice
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", flexDirection: "column", gap: 4,
    fontFamily: typography.family, padding: "16px 0",
  },
  headline: {
    fontSize: 16, fontWeight: typography.weight.bold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  subtext: {
    fontSize: 14, fontWeight: typography.weight.medium,
    color: colors.gray, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
};
