import { useState } from "react";

/* ── SVG Icons (reused from Batch 1 + new) ── */

function IconPulse() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.97 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.97 12.7L7.97 12.68C8.72 12.68 9.56 13.25 9.84 13.95L10.98 16.83C11.24 17.48 11.65 17.48 11.91 16.83L14.2 11.02C14.42 10.46 14.83 10.44 15.11 10.97L16.15 12.94C16.46 13.53 17.26 14.01 17.92 14.01H21.98" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.05 2.659L3.807 6.934C2.396 7.309 2.11 9.105 3.267 10.262L7.763 14.758L13.889 10.196L9.327 16.323L13.823 20.819C14.98 21.976 16.776 21.689 17.151 20.279L21.427 4.036C21.647 3.21 20.887 2.45 20.06 2.67L20.05 2.659Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  );
}

function IconReactionHappy({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 7.124C5 6.422 5.27 5.852 5.6 5.852C5.93 5.852 6.2 6.422 6.2 7.124" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.8 7.124C9.8 6.422 10.07 5.852 10.4 5.852C10.73 5.852 11 6.422 11 7.124" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <path d="M10.754 9.188C10.292 10.25 9.236 11 8 11C6.764 11 5.708 10.256 5.246 9.188" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

function IconReactionAngry({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.333C11.314 13.333 14 10.647 14 7.333C14 4.02 11.314 1.333 8 1.333C4.686 1.333 2 4.02 2 7.333C2 10.647 4.686 13.333 8 13.333Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <circle cx="5.6" cy="6.133" r="0.6" fill={color}/>
      <circle cx="9.2" cy="6.133" r="0.6" fill={color}/>
      <path d="M8.432 4.615C8.948 4.429 9.884 4.369 10.46 4.771" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.476 8.497C7.436 8.329 9.092 8.521 9.974 9.391" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.62 4.195C6.146 3.919 5.234 3.703 4.598 3.997" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M3.272 12.829C3.182 12.289 3.038 10.543 3.602 10.021C4.166 9.499 4.436 11.203 4.64 11.215C4.844 11.227 7.004 10.195 7.64 10.243C8.276 10.291 7.64 11.437 6.47 11.935C6.47 11.935 7.058 13.171 6.818 13.573C6.47 14.161 4.598 14.173 4.22 14.011C3.866 13.861 3.356 13.369 3.272 12.829Z" fill="transparent" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
    </svg>
  );
}

function IconReactionSad({ color = "#999" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.295 10.37C10.295 11.096 9.269 10.898 8.003 10.898C6.737 10.898 5.711 11.102 5.711 10.37C5.711 9.638 6.737 9.05 8.003 9.05C9.269 9.05 10.295 9.638 10.295 10.37Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <path d="M8.003 14C11.316 14 14.003 11.314 14.003 8C14.003 4.686 11.316 2 8.003 2C4.689 2 2.003 4.686 2.003 8C2.003 11.314 4.689 14 8.003 14Z" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <circle cx="5.603" cy="7.4" r="0.6" fill={color}/>
      <circle cx="10.403" cy="7.4" r="0.6" fill={color}/>
      <path d="M4.727 11.21C4.727 12.038 4.055 12.71 3.227 12.71C2.399 12.71 1.727 12.038 1.727 11.21C1.727 10.382 3.227 8.51 3.227 8.51C3.227 8.51 4.727 10.382 4.727 11.21Z" fill="white" stroke={color} strokeWidth="0.8" strokeMiterlimit="10"/>
      <path d="M3.857 6.488C4.403 6.422 5.261 6.05 5.597 5.438" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.999 6.488C11.453 6.422 10.595 6.05 10.259 5.438" stroke={color} strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

function IconAddReaction({ color = "#141810" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15.634 15.634C14.7 16.569 13.414 17.143 12 17.143C10.586 17.143 9.291 16.569 8.366 15.634" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.474 3.566C12.994 3.48 12.506 3.429 12 3.429C7.268 3.429 3.428 7.269 3.428 12C3.428 16.731 7.268 20.571 12 20.571C16.731 20.571 20.571 16.731 20.571 12C20.571 11.494 20.52 11.006 20.434 10.526" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.429 6H20.572" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18 8.571V3.429" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  );
}

function IconVerify() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.56 10.738L20.2 9.154c-.266-.302-.478-.87-.478-1.274V6.178c0-1.148-.946-2.094-2.094-2.094h-1.702c-.394 0-.972-.212-1.274-.478l-1.584-1.35c-.89-.758-2.348-.758-3.248 0L8.236 3.616c-.292.256-.87.468-1.264.468H5.22c-1.148 0-2.094.946-2.094 2.094V7.89c0 .394-.212.962-.468 1.264l-1.34 1.594c-.748.89-.748 2.338 0 3.228l1.34 1.594c.256.302.468.87.468 1.264v1.712c0 1.148.946 2.094 2.094 2.094h1.752c.394 0 .972.212 1.264.478l1.584 1.35c.89.758 2.348.758 3.248 0l1.584-1.35c.302-.266.87-.478 1.274-.478h1.702c1.148 0 2.094-.946 2.094-2.094v-1.702c0-.394.212-.972.478-1.274l1.35-1.584c.768-.9.768-2.348.01-3.238z" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.38 12l2.33 2.33 4.66-4.66" stroke="#999" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11.949 11.04c-.16 0-.312.063-.424.176a.6.6 0 0 0-.176.424v3.766a.6.6 0 0 0 1.2 0v-3.766a.6.6 0 0 0-.6-.6Z" fill="#999"/>
      <path d="M12.749 8.863c0 1.066-1.6 1.066-1.6 0s1.6-1.066 1.6 0Z" fill="#999"/>
      <circle cx="11.782" cy="11.782" r="7.5" stroke="#999"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M1.33 4.33l1.67 1.67 3.33-3.33" stroke="#141810" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SHARED: Engagement components (from Batch 1)
   ───────────────────────────────────────────── */

function ResponsesRow({ light = false }) {
  const textColor = light ? "#fafafa" : "#999";
  const iconColor = light ? "#fafafa" : "#999";
  return (
    <div style={styles.responsesRow}>
      <div style={{ ...styles.responsesLeft, color: textColor }}>
        <span>6 Pulses</span>
        <span>•</span>
        <span>421Shares</span>
      </div>
      <div style={styles.responsesRight}>
        <div style={styles.reactionIcons}>
          <IconReactionHappy color={iconColor} />
          <IconReactionAngry color={iconColor} />
          <IconReactionSad color={iconColor} />
        </div>
        <span style={{ ...styles.responseText, color: textColor }}>1.4k Reactions</span>
      </div>
    </div>
  );
}

function PostActionsRow({ light = false }) {
  const textColor = light ? "#fafafa" : "#999";
  const reactBg = light ? "transparent" : "#f0e8d8";
  const reactStroke = light ? "#fafafa" : "#141810";
  return (
    <div style={styles.postActionsRow}>
      <div style={styles.actionButton}>
        <span style={{ color: textColor }}><IconPulse /></span>
        <span style={{ ...styles.actionLabel, color: textColor }}>Pulses</span>
      </div>
      <div style={styles.actionButton}>
        <span style={{ color: textColor }}><IconShare /></span>
        <span style={{ ...styles.actionLabel, color: textColor }}>Share</span>
      </div>
      <div style={styles.actionSpacer} />
      <div style={styles.actionButton}>
        <div style={{ ...styles.reactCircle, backgroundColor: reactBg }}>
          <IconAddReaction color={reactStroke} />
        </div>
        <span style={{ ...styles.actionLabel, color: textColor }}>React</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. POST — IMAGE ONLY (dark overlay variant)
   Figma node 7821:85762, property1="Image Only"
   ───────────────────────────────────────────── */
function PostImageOnly() {
  return (
    <div style={styles.imageOnlyCard}>
      {/* Background image + gradient */}
      <div style={styles.imageOnlyBg}>
        <div style={styles.imageOnlyGradient} />
      </div>
      {/* Badge top-right */}
      <div style={styles.imageOnlyTopRow}>
        <div style={styles.newsTag}>FOREIGN POLICY</div>
      </div>
      {/* Headline area */}
      <div style={styles.imageOnlyHeadline}>
        <div style={styles.imageOnlyTextWrap}>
          <h2 style={styles.imageOnlyTitle}>
            Justice Department official posts social media photo revealing investigation into...
          </h2>
          <span style={styles.imageOnlyTimestamp}>30m ago</span>
        </div>
      </div>
      {/* Engagement — light/dark variant */}
      <div style={styles.imageOnlyEngagement}>
        <ResponsesRow light={true} />
        <div style={styles.imageOnlyDivider} />
        <PostActionsRow light={true} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. POST — HOME SLIM (short image + text below)
   Figma node 7821:85763, property1="Home Slim"
   ───────────────────────────────────────────── */
function PostHomeSlim() {
  return (
    <div style={styles.homeSlimCard}>
      {/* Short image area — 128px tall */}
      <div style={styles.homeSlimImage}>
        <div style={styles.homeSlimGradient} />
      </div>
      {/* Text body — cream bg */}
      <div style={styles.homeSlimBody}>
        <div style={styles.homeSlimText}>
          <div style={styles.homeSlimTitleWrap}>
            <p style={styles.homeSlimTitle}>
              DOJ says it erroneously relied on ICE memo to justify immigration courthou...
            </p>
            <span style={styles.homeSlimDate}>Mar 11, 2026</span>
          </div>
        </div>
        {/* Engagement bar */}
        <div style={styles.engagementSection}>
          <ResponsesRow />
          <div style={styles.engagementDivider} />
          <PostActionsRow />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. OFFICIAL CARD (Tracked / Pending variants)
   Figma nodes 7821:85955, 7821:85956
   ───────────────────────────────────────────── */
function OfficialCard({ name, role, location, party, status = "tracked", score, bgColor = "#036", imageUrl }) {
  const isTracked = status === "tracked";
  return (
    <div style={styles.officialCard}>
      {/* Color box with avatar */}
      <div style={{ ...styles.officialColorBox, backgroundColor: bgColor }}>
        <div style={{ ...styles.officialAvatar, backgroundImage: `url('${imageUrl}')` }} />
      </div>
      {/* Name + status + role */}
      <div style={styles.officialContent}>
        <div style={styles.officialInfo}>
          <p style={styles.officialName}>{name}</p>
          <div style={styles.officialTagWrap}>
            <div style={isTracked ? styles.statusTracked : styles.statusPending}>
              {isTracked && (
                <span style={styles.statusCheckIcon}><IconCheck /></span>
              )}
              <span style={isTracked ? styles.statusTrackedText : styles.statusPendingText}>
                {isTracked ? "Tracked" : "Pending"}
              </span>
            </div>
          </div>
          <div style={styles.officialRole}>
            <p style={styles.officialRoleLine}>{role} - {party}</p>
            <p style={styles.officialRoleLine}>{location}</p>
          </div>
        </div>
        {/* Score (only for tracked) */}
        {score != null && (
          <div style={styles.officialScore}>
            <span style={styles.officialScoreNumber}>{score}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   7. DATA DETAILS (Participation breakdown)
   Figma node 7821:85984
   ───────────────────────────────────────────── */
function DataDetails() {
  return (
    <div style={styles.dataCard}>
      {/* Header section */}
      <div style={styles.dataHeader}>
        <div style={styles.dataTopRow}>
          <div style={styles.dataTextAndIcon}>
            <div style={styles.dataIconWrap}>
              <IconVerify />
            </div>
            <div style={styles.dataTitleSection}>
              <div style={styles.dataTitleRow}>
                <span style={styles.dataTitle}>Participation</span>
                <span style={styles.dataInfoIcon}><IconInfo /></span>
              </div>
              <p style={styles.dataDescription}>
                Participation score is a blend of voting participation (50%) and committee participation (50%)
              </p>
            </div>
          </div>
          <div style={styles.dataScoreAndChevron}>
            <div style={styles.dataChevron}><IconChevron /></div>
            <div style={styles.dataScoreWrap}>
              <span style={styles.dataScoreBig}>17</span>
              <span style={styles.dataScoreMax}> /20</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.dataDivider} />

      {/* Bar graph */}
      <div style={styles.dataGraph}>
        <div style={styles.barContainer}>
          <div style={styles.barOrange} />
          <span style={styles.barLabelLeft}>49</span>
          <span style={styles.barLabelRight}>36</span>
        </div>
        <div style={styles.barLabels}>
          <div style={styles.barLabelCol}>
            <span style={styles.barLabelBold}>Voting</span>
            <span style={styles.barLabelSub}>(50% x 97%)</span>
          </div>
          <div style={{ ...styles.barLabelCol, textAlign: "right" }}>
            <span style={styles.barLabelBold}>Committees</span>
            <span style={styles.barLabelSub}>(50% x 71%)</span>
          </div>
        </div>
      </div>

      {/* Score formula */}
      <div style={styles.formulaRow}>
        <div style={styles.formulaBox}>
          <div style={styles.formulaValueBox}>
            <span style={styles.formulaValue}>85</span>
          </div>
          <span style={styles.formulaLabel}>Overall{"\n"}Participation</span>
        </div>
        <span style={styles.formulaOp}>×</span>
        <div style={styles.formulaBox}>
          <div style={styles.formulaValueBox}>
            <span style={styles.formulaValue}>20%</span>
          </div>
          <span style={styles.formulaLabel}>Participation{"\n"}Weight</span>
        </div>
        <span style={styles.formulaOp}>=</span>
        <div style={styles.formulaBox}>
          <div style={styles.formulaResultBox}>
            <span style={styles.formulaValue}>17</span>
          </div>
          <span style={styles.formulaLabel}>Rounded{"\n"}Score</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT — ALL BATCH 2 CARDS
   ───────────────────────────────────────────── */
export default function BeaconCardsBatch2() {
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <PostImageOnly />
        <PostHomeSlim />
      </div>
      <div style={styles.column}>
        <OfficialCard
          name="Suzanne Bonamici"
          role="U.S. Representative"
          location="Oregon"
          party="D"
          status="tracked"
          score={91}
          bgColor="#036"
          imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        />
        <OfficialCard
          name="Lauren Boebert"
          role="U.S. Representative"
          location="Colorado"
          party="R"
          status="pending"
          score={null}
          bgColor="#de0100"
          imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
        />
        <DataDetails />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STYLES
   ───────────────────────────────────────────── */
const styles = {
  container: {
    display: "flex", gap: 24, padding: 32, backgroundColor: "#f0f0f0",
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    flexWrap: "wrap", justifyContent: "center", minHeight: "100vh", alignItems: "flex-start",
  },
  column: {
    display: "flex", flexDirection: "column", gap: 24,
  },

  /* ── Shared engagement ── */
  responsesRow: {
    display: "flex", gap: 24, alignItems: "center", justifyContent: "flex-end", width: "100%",
  },
  responsesLeft: {
    flex: 1, display: "flex", gap: 8, alignItems: "center",
    fontWeight: 500, fontSize: 11, letterSpacing: -0.25, lineHeight: "15px", whiteSpace: "nowrap",
  },
  responsesRight: {
    flex: 1, display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end",
  },
  responseText: {
    fontWeight: 500, fontSize: 11, letterSpacing: -0.25, lineHeight: "15px", whiteSpace: "nowrap",
  },
  reactionIcons: { display: "flex", alignItems: "center", gap: 1.333 },
  postActionsRow: {
    display: "flex", gap: 24, alignItems: "center", justifyContent: "flex-end", width: "100%",
  },
  actionButton: {
    display: "flex", flexDirection: "column", gap: 4, alignItems: "center", justifyContent: "center",
  },
  actionLabel: {
    fontWeight: 600, fontSize: 11, letterSpacing: -0.25, lineHeight: "15px", whiteSpace: "nowrap",
  },
  actionSpacer: { flex: 1 },
  reactCircle: {
    width: 24, height: 24, borderRadius: 48,
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
  },
  engagementDivider: { width: "100%", height: 1, backgroundColor: "#f0e8d8" },
  engagementSection: {
    display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", width: "100%",
  },

  /* ── Post Image Only (dark) ── */
  imageOnlyCard: {
    width: 357, height: 400, borderRadius: 10, overflow: "hidden",
    position: "relative", display: "flex", flexDirection: "column", gap: 8,
    padding: "18px 18px 16px 18px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },
  imageOnlyBg: {
    position: "absolute", inset: 0, zIndex: 0,
    background: "url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800') center/cover",
  },
  imageOnlyGradient: {
    position: "absolute", inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 15.636%, rgba(0,0,0,0) 80%)",
  },
  imageOnlyTopRow: {
    display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 1,
  },
  newsTag: {
    width: 120, height: 29, borderRadius: 3,
    backgroundColor: "rgba(20, 24, 16, 0.25)",
    border: "0.5px solid rgba(240, 232, 216, 1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#f0e8d8", fontSize: 9, fontWeight: 600,
    letterSpacing: 0.5, textTransform: "uppercase", lineHeight: "15px",
  },
  imageOnlyHeadline: {
    flex: 1, display: "flex", alignItems: "flex-end", paddingBottom: 18,
    position: "relative", zIndex: 1,
  },
  imageOnlyTextWrap: {
    display: "flex", flexDirection: "column", gap: 8, paddingRight: 40,
    lineHeight: "110%", letterSpacing: -0.5,
  },
  imageOnlyTitle: {
    color: "#fff", fontSize: 20, fontWeight: 900,
    lineHeight: "110%", letterSpacing: -0.5, margin: 0,
    overflow: "hidden", textOverflow: "ellipsis",
  },
  imageOnlyTimestamp: {
    color: "#f0e8d8", fontSize: 13, fontWeight: 600,
    lineHeight: "110%", letterSpacing: -0.5,
  },
  imageOnlyEngagement: {
    display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1,
  },
  imageOnlyDivider: {
    width: "100%", height: 1, backgroundColor: "#f0e8d8", opacity: 0.5,
  },

  /* ── Post Home Slim ── */
  homeSlimCard: {
    width: 333, borderRadius: 10, overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    display: "flex", flexDirection: "column",
  },
  homeSlimImage: {
    position: "relative", width: "100%", height: 128,
    background: "url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800') center/cover",
    padding: 18,
  },
  homeSlimGradient: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "linear-gradient(to top, rgba(0,0,0,0.5) 15.636%, rgba(0,0,0,0) 80%)",
  },
  homeSlimBody: {
    backgroundColor: "#fff9ed", padding: 18,
    display: "flex", flexDirection: "column", gap: 20,
  },
  homeSlimText: {
    display: "flex", flexDirection: "column",
  },
  homeSlimTitleWrap: {
    display: "flex", flexDirection: "column", gap: 10, paddingRight: 40,
  },
  homeSlimTitle: {
    fontSize: 14, fontWeight: 800, color: "#141810",
    lineHeight: "130%", letterSpacing: -0.5, margin: 0,
    overflow: "hidden", textOverflow: "ellipsis",
  },
  homeSlimDate: {
    fontSize: 11, fontWeight: 600, color: "#999",
    lineHeight: "130%", letterSpacing: -0.5,
    overflow: "hidden", textOverflow: "ellipsis",
  },

  /* ── Official Card ── */
  officialCard: {
    width: 357, height: 100, borderRadius: 10, overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    display: "flex", gap: 16, alignItems: "center",
    paddingRight: 16,
  },
  officialColorBox: {
    width: 102, height: 100, display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  officialAvatar: {
    width: 64, height: 64, borderRadius: "50%",
    backgroundSize: "cover", backgroundPosition: "center",
  },
  officialContent: {
    flex: 1, display: "flex", alignItems: "center",
  },
  officialInfo: {
    flex: 1, display: "flex", flexDirection: "column", gap: 2,
  },
  officialName: {
    fontSize: 14, fontWeight: 700, color: "#141810",
    lineHeight: "130%", letterSpacing: -0.5, margin: 0,
    height: 20,
  },
  officialTagWrap: {
    paddingBottom: 4,
  },
  statusTracked: {
    backgroundColor: "rgba(153,153,153,0.25)", borderRadius: 2,
    padding: "0 4px", display: "inline-flex", gap: 2, alignItems: "center",
  },
  statusPending: {
    border: "0.8px solid rgba(153,153,153,0.5)", borderRadius: 2,
    padding: "0 4px", display: "inline-flex", gap: 2, alignItems: "center",
  },
  statusCheckIcon: { opacity: 0.5 },
  statusTrackedText: {
    fontSize: 9, fontWeight: 600, color: "#141810", opacity: 0.5,
    letterSpacing: -0.2, textTransform: "uppercase", lineHeight: "1.2",
  },
  statusPendingText: {
    fontSize: 9, fontWeight: 600, color: "#999", opacity: 0.8,
    letterSpacing: -0.2, textTransform: "uppercase", lineHeight: "1.2",
  },
  officialRole: {
    fontSize: 13, fontWeight: 400, color: "rgba(20,24,16,0.6)",
    lineHeight: "130%", letterSpacing: -0.5,
  },
  officialRoleLine: { margin: 0 },
  officialScore: {
    width: 48, display: "flex", flexDirection: "column", alignItems: "flex-end",
  },
  officialScoreNumber: {
    fontSize: 22, fontWeight: 700, color: "#141810",
    lineHeight: "130%", letterSpacing: -0.5, textAlign: "right",
  },

  /* ── Data Details ── */
  dataCard: {
    width: 325, borderRadius: 10, backgroundColor: "#fff9ed",
    display: "flex", flexDirection: "column", gap: 24,
    paddingBottom: 18, overflow: "hidden",
  },
  dataHeader: {
    backgroundColor: "#fff9ed", borderRadius: 10,
    display: "flex", flexDirection: "column", gap: 16,
  },
  dataTopRow: {
    display: "flex", alignItems: "flex-start", justifyContent: "flex-end",
    padding: "0",
  },
  dataTextAndIcon: {
    flex: 1, display: "flex", gap: 10, alignItems: "flex-start",
  },
  dataIconWrap: {
    display: "flex", alignItems: "flex-start", justifyContent: "center",
  },
  dataTitleSection: {
    flex: 1, display: "flex", flexDirection: "column", gap: 8, paddingRight: 40,
  },
  dataTitleRow: {
    display: "flex", gap: 8, alignItems: "center",
  },
  dataTitle: {
    fontSize: 18, fontWeight: 800, color: "#141810",
    lineHeight: "130%", letterSpacing: -0.5,
  },
  dataInfoIcon: {
    flex: 1, display: "flex", alignItems: "center",
  },
  dataDescription: {
    fontSize: 14, fontWeight: 500, color: "#141810",
    lineHeight: "120%", letterSpacing: -0.5, margin: 0,
  },
  dataScoreAndChevron: {
    display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end",
    alignSelf: "stretch",
  },
  dataChevron: {},
  dataScoreWrap: {
    flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
    paddingRight: 6,
  },
  dataScoreBig: {
    fontSize: 22, fontWeight: 700, color: "#141810",
    lineHeight: "130%", letterSpacing: -1, textAlign: "right",
  },
  dataScoreMax: {
    fontSize: 22, fontWeight: 700, color: "#999",
    lineHeight: "130%", letterSpacing: -1,
  },
  dataDivider: {
    width: "100%", height: 1, backgroundColor: "#141810",
  },

  /* Bar graph */
  dataGraph: {
    display: "flex", flexDirection: "column", gap: 4, alignItems: "center",
    padding: "0",
  },
  barContainer: {
    width: "100%", height: 24, position: "relative",
    backgroundColor: "#39503d", overflow: "hidden",
  },
  barOrange: {
    position: "absolute", left: 0, top: 0, height: 24,
    width: "calc(100% - 128px)",
    backgroundColor: "#f80",
  },
  barLabelLeft: {
    position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
    fontSize: 11, fontWeight: 600, color: "#fafafa", lineHeight: "1",
  },
  barLabelRight: {
    position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
    fontSize: 11, fontWeight: 600, color: "#fafafa", lineHeight: "1", textAlign: "right",
  },
  barLabels: {
    display: "flex", justifyContent: "space-between", width: "100%", padding: "0 8px",
  },
  barLabelCol: {
    display: "flex", flexDirection: "column",
  },
  barLabelBold: {
    fontSize: 11, fontWeight: 700, color: "#141810", lineHeight: "140%",
  },
  barLabelSub: {
    fontSize: 11, fontWeight: 500, color: "#999", lineHeight: "140%",
  },

  /* Formula row */
  formulaRow: {
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    width: "100%", padding: "0",
  },
  formulaBox: {
    width: 72, display: "flex", flexDirection: "column", gap: 6, alignItems: "center",
  },
  formulaValueBox: {
    width: "100%", height: 32, borderRadius: 5,
    border: "1px solid #f0e8d8",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  formulaResultBox: {
    width: "100%", height: 32, borderRadius: 5,
    backgroundColor: "#f0e8d8",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  formulaValue: {
    fontSize: 16, fontWeight: 600, color: "#141810", lineHeight: "130%", textAlign: "center",
  },
  formulaLabel: {
    fontSize: 10, fontWeight: 500, color: "#999",
    lineHeight: "110%", letterSpacing: -0.5, textAlign: "center", whiteSpace: "pre-line",
  },
  formulaOp: {
    fontSize: 16, fontWeight: 400, color: "#141810",
    display: "flex", alignItems: "center", height: 29, marginTop: 1,
  },
};
