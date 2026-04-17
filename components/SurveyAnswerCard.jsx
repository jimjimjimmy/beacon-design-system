import { colors, typography, radii } from "./tokens";

/**
 * SurveyAnswerCard — Selectable answer option for pulse surveys
 * Used on: Pulse Survey question flow
 *
 * Props:
 *   text: string — Answer text
 *   selected: boolean — Whether this answer is selected
 *   onClick: () => void
 */
export default function SurveyAnswerCard({ text, selected = false, onClick }) {
  return (
    <div
      style={{
        ...styles.card,
        border: selected ? `2px solid ${colors.slate}` : `1px solid ${colors.cream}`,
        boxShadow: selected ? "none" : "0 2px 8px rgba(0,0,0,0.06)",
      }}
      onClick={onClick}
    >
      <p style={styles.text}>{text}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "100%", borderRadius: radii.card,
    backgroundColor: colors.warmBg,
    padding: "20px 18px",
    cursor: "pointer", fontFamily: typography.family,
    transition: "all 0.15s ease",
  },
  text: {
    fontSize: 16, fontWeight: typography.weight.bold,
    color: colors.slate, lineHeight: "140%", letterSpacing: -0.5, margin: 0,
  },
};
