import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
  theme?: "light" | "dark";
}

export function AppShell({ children, theme = "dark" }: AppShellProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={
        theme === "dark"
          ? { backgroundColor: "var(--color-background)", color: "var(--color-on-surface)" }
          : { backgroundColor: "#ffffff", color: "#0f172a" }
      }
    >
      {children}
    </div>
  );
}
