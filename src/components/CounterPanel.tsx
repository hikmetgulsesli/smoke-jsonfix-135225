import { AnaSayacEkrani } from "../screens/AnaSayacEkrani";
import type { HistoryEntry } from "../types";

interface CounterPanelProps {
  count: number;
  stepSize: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  onNavigate: (screen: "counter" | "notes" | "settings") => void;
  lastEntry?: HistoryEntry;
}

export function CounterPanel(props: CounterPanelProps) {
  return <AnaSayacEkrani {...props} />;
}
