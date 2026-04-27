export interface HistoryEntry {
  id: string;
  type: 'increment' | 'decrement' | 'reset';
  value: number;
  timestamp: number;
}

export interface Note {
  id: string;
  text: string;
  date: number;
}

export interface AppState {
  count: number;
  stepSize: number;
  theme: 'light' | 'dark';
  history: HistoryEntry[];
  notes: Note[];
}

export type Screen = 'counter' | 'notes' | 'settings';
