import { colors, typography } from "./tokens";
import { IconChevronBack } from "./icons";

/**
 * BackHeader — Back chevron + centered page title
 * Used on: Issue detail, Official profile, Score sub-pages
 *
 * Props:
 *   title: string — Page title (centered)
 *   onBack: () => void — Back button handler
 */
export default function BackHeader({ title, onBack }) {
  return (
    <div style={styles.header}>
      <div style={styles.backButton} onClick={onBack}>
        <IconChevronBack color="#a19a8b" />
      </div>
      <span style={styles.title}>{title}</span>
      <div style={styles.spacer} />
    </div>
  );
}

const styles = {
  header: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 18px", height: 48, width: "100%",
    backgroundColor: colors.cream, fontFamily: typography.family,
  },
  backButton: {
    width: 24, height: 24, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  title: {
    fontSize: 18, fontWeight: typography.weight.bold,
    color: "#a19a8b", lineHeight: "130%", letterSpacing: -0.5,
    textAlign: "center",
  },
  spacer: {
    width: 24, height: 24,
  },
};
