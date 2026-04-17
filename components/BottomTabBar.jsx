import { colors, typography } from "./tokens";
import { IconNavHome, IconNavIssues, IconNavPulse, IconNavOfficials, IconNavAccount } from "./icons";

/**
 * BottomTabBar — 5-tab mobile navigation
 * Used on: All mobile screens
 *
 * Props:
 *   activeTab: "home" | "issues" | "pulse" | "officials" | "account"
 *   onTabChange: (tab: string) => void
 */
export default function BottomTabBar({ activeTab = "home", onTabChange }) {
  const tabs = [
    { key: "home", label: "Home", Icon: IconNavHome },
    { key: "issues", label: "Issues", Icon: IconNavIssues },
    { key: "pulse", label: "Pulse", Icon: IconNavPulse },
    { key: "officials", label: "Officials", Icon: IconNavOfficials },
    { key: "account", label: "Account", Icon: IconNavAccount },
  ];

  return (
    <div style={styles.bar}>
      <div style={styles.tabRow}>
        {tabs.map(({ key, label, Icon }) => {
          const isActive = activeTab === key;
          const isAccount = key === "account";
          return (
            <div
              key={key}
              style={{
                ...styles.tab,
                ...(isAccount ? styles.tabAccount : {}),
                ...(isActive ? styles.tabActive : {}),
              }}
              onClick={() => onTabChange?.(key)}
            >
              <Icon active={isActive} />
              <span style={{ ...styles.label, color: isActive ? colors.slate : colors.gray }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  bar: {
    display: "flex", alignItems: "flex-start", justifyContent: "center",
    width: "100%", backgroundColor: "#fff",
    boxShadow: "0px -1px 20px rgba(34, 34, 34, 0.3)",
    fontFamily: typography.family, position: "relative",
    paddingTop: 14,
  },
  tabRow: {
    display: "flex", alignItems: "flex-start", justifyContent: "center",
    width: 284,
  },
  tab: {
    display: "flex", flexDirection: "column", alignItems: "center",
    gap: 4, cursor: "pointer", position: "relative",
    width: 68, paddingTop: 4, paddingBottom: 8,
    borderBottom: "4px solid transparent",
  },
  tabAccount: {
    width: 72,
  },
  tabActive: {
    borderBottom: `4px solid ${colors.slate}`,
  },
  label: {
    fontSize: 10, fontWeight: typography.weight.semibold,
    letterSpacing: -0.25, lineHeight: "15px", textAlign: "center",
    whiteSpace: "nowrap",
  },
};
