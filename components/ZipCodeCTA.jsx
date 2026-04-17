import { colors, typography, radii } from "./tokens";

/**
 * ZipCodeCTA — Dark green card prompting zip code entry
 * Used on: Home screen
 *
 * Props:
 *   onSubmit: (zip: string) => void
 */
export default function ZipCodeCTA({ onSubmit }) {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.textCol}>
          <h3 style={styles.headline}>Politics hits different when it's local.</h3>
          <p style={styles.subtext}>Enter your zip to see what's happening in your district.</p>
          <div style={styles.inputRow}>
            <input
              type="text"
              placeholder="Enter your zip code"
              style={styles.input}
              maxLength={5}
            />
          </div>
        </div>
        <div style={styles.iconWrap}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#f80" strokeWidth="2"/>
            <circle cx="24" cy="20" r="6" stroke="#f80" strokeWidth="2"/>
            <path d="M24 26c0 4 0 10 0 10" stroke="#f80" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "100%", borderRadius: radii.card,
    backgroundColor: colors.deepGreen,
    padding: 18, fontFamily: typography.family,
  },
  content: {
    display: "flex", gap: 16, alignItems: "flex-start",
  },
  textCol: {
    flex: 1, display: "flex", flexDirection: "column", gap: 8,
  },
  headline: {
    fontSize: 18, fontWeight: typography.weight.extrabold,
    color: colors.white, lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  subtext: {
    fontSize: 13, fontWeight: typography.weight.medium,
    color: "rgba(250,250,250,0.7)", lineHeight: "130%", letterSpacing: -0.5, margin: 0,
  },
  inputRow: {
    marginTop: 4,
  },
  input: {
    width: "100%", height: 36, borderRadius: 5,
    border: "1px solid rgba(250,250,250,0.3)",
    backgroundColor: "rgba(250,250,250,0.1)",
    color: colors.white, fontSize: 13, fontWeight: typography.weight.medium,
    padding: "0 12px", outline: "none",
    fontFamily: typography.family, letterSpacing: -0.5,
  },
  iconWrap: {
    flexShrink: 0,
  },
};
