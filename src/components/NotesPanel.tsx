import { GecmisVeNotlarEkrani } from "../screens/GecmisVeNotlarEkrani";
import type { HistoryEntry, Note } from "../types";

interface NotesPanelProps {
  history: HistoryEntry[];
  notes: Note[];
  onClearHistory: () => void;
  onAddNote: (text: string) => void;
  onDeleteNote: (id: string) => void;
  onNavigate: (screen: "counter" | "notes" | "settings") => void;
}

export function NotesPanel(props: NotesPanelProps) {
  return <GecmisVeNotlarEkrani {...props} />;
}
