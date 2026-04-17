import { colors, typography } from "./tokens";
import { IconChevronForward } from "./icons";

/**
 * StateRow — State flag + state name + chevron
 * Used on: Officials browse (by State)
 *
 * Props:
 *   flagUrl: string — URL to state flag image
 *   name: string — State name
 *   onClick: () => void
 */
export default function StateRow({ flagUrl, name, onClick }) {
  return (
    <div style={styles.row} onClick={onClick}>
      <div style={styles.flagWrap}>
        {flagUrl ? (
          <img src={flagUrl} alt={name} style={styles.flag} />
        ) : (
          <div style={styles.flagPlaceholder} />
        )}
      </div>
      <span style={styles.name}>{name}</span>
      <div style={styles.chevron}>
        <IconChevronForward color={colors.gray} />
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex", alignItems: "center", gap: 16,
    padding: "16px 18px", width: "100%",
    borderBottom: `1px solid ${colors.cream}`,
    cursor: "pointer", fontFamily: typography.family,
    backgroundColor: "transparent",
  },
  flagWrap: {
    width: 48, height: 32, flexShrink: 0, overflow: "hidden",
    borderRadius: 2,
  },
  flag: {
    width: 48, height: 32, objectFit: "cover",
  },
  flagPlaceholder: {
    width: 48, height: 32, backgroundColor: colors.cream, borderRadius: 2,
  },
  name: {
    flex: 1, fontSize: 16, fontWeight: typography.weight.semibold,
    color: colors.slate, lineHeight: "130%", letterSpacing: -0.5,
  },
  chevron: {
    flexShrink: 0,
  },
};
