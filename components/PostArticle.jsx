import { colors, typography, radii } from "./tokens";

/**
 * PostArticle — Full-width hero image card for Issue detail
 * Used on: Issue Focus, Active Issues list
 *
 * Props:
 *   imageUrl: string — Hero background image
 *   badge: string — Category badge text (e.g. "FOREIGN POLICY")
 *   title: string — Article headline
 *   date: string — Publication date (e.g. "Mar 11, 2026")
 *   updated: string — Update timestamp (e.g. "Updated 8:28am EST")
 */
export default function PostArticle({ imageUrl, badge, title, date, updated }) {
  return (
    <div style={styles.card}>
      {/* Hero image with gradient overlay */}
      <div style={{ ...styles.imageArea, backgroundImage: `url('${imageUrl}')` }}>
        <div style={styles.gradient} />
        {/* Back arrow area (placeholder) */}
        <div style={styles.topRow}>
          <div style={styles.backArea} />
          {badge && <div style={styles.badge}>{badge}</div>}
        </div>
        {/* Headline */}
        <div style={styles.headlineArea}>
          <h1 style={styles.title}>{title}</h1>
          <div style={styles.dateRow}>
            <span style={styles.date}>{date}</span>
            {updated && <span style={styles.updated}>{updated}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "100%", borderRadius: radii.card, overflow: "hidden",
    fontFamily: typography.family,
  },
  imageArea: {
    position: "relative", width: "100%", minHeight: 400,
    backgroundSize: "cover", backgroundPosition: "center",
    display: "flex", flexDirection: "column",
    padding: 18,
  },
  gradient: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0) 70%)",
  },
  topRow: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    position: "relative", zIndex: 1,
  },
  backArea: { width: 24, height: 24 },
  badge: {
    width: 120, height: 29, borderRadius: 3,
    backgroundColor: "rgba(20, 24, 16, 0.25)",
    border: "0.5px solid rgba(240, 232, 216, 1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: colors.cream, fontSize: 9, fontWeight: typography.weight.semibold,
    letterSpacing: 0.5, textTransform: "uppercase", lineHeight: "15px",
  },
  headlineArea: {
    flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end",
    gap: 8, position: "relative", zIndex: 1, paddingTop: 40,
  },
  title: {
    color: "#fff", fontSize: 38, fontWeight: typography.weight.black,
    lineHeight: "100%", letterSpacing: -1, margin: 0,
  },
  dateRow: {
    display: "flex", flexDirection: "column", gap: 2,
  },
  date: {
    color: colors.cream, fontSize: 13, fontWeight: typography.weight.semibold,
    lineHeight: "130%", letterSpacing: -0.5,
  },
  updated: {
    color: "rgba(240,232,216,0.7)", fontSize: 13, fontWeight: typography.weight.medium,
    lineHeight: "130%", letterSpacing: -0.5,
  },
};
