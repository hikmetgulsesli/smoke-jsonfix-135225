import { AyarlarEkrani } from "../screens/AyarlarEkrani";
import type { Note } from "../types";

interface SettingsPanelProps {
  stepSize: number;
  theme: "light" | "dark";
  notes: Note[];
  onSetStepSize: (size: number) => void;
  onSetTheme: (theme: "light" | "dark") => void;
  onClearAllData: () => void;
  onNavigate: (screen: "counter" | "notes" | "settings") => void;
  onShowResetConfirm: () => void;
}

export function SettingsPanel(props: SettingsPanelProps) {
  return <AyarlarEkrani {...props} />;
}
