import { useState, useEffect, useCallback } from 'react';
import type { AppState, HistoryEntry, Note } from '../../types';

const STORAGE_KEY = 'smoke-jsonfix-state';

const defaultState: AppState = {
  count: 0,
  stepSize: 1,
  theme: 'dark',
  history: [],
  notes: [],
};

function loadState(): AppState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...defaultState, ...parsed };
    }
  } catch {
    // ignore parse errors
  }
  return defaultState;
}

function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function usePersistentAppState() {
  const [state, setState] = useState<AppState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const increment = useCallback(() => {
    setState(s => ({
      ...s,
      count: s.count + s.stepSize,
      history: [
        {
          id: crypto.randomUUID(),
          type: 'increment',
          value: s.stepSize,
          timestamp: Date.now(),
        },
        ...s.history,
      ],
    }));
  }, []);

  const decrement = useCallback(() => {
    setState(s => ({
      ...s,
      count: s.count - s.stepSize,
      history: [
        {
          id: crypto.randomUUID(),
          type: 'decrement',
          value: s.stepSize,
          timestamp: Date.now(),
        },
        ...s.history,
      ],
    }));
  }, []);

  const reset = useCallback(() => {
    setState(s => ({
      ...s,
      count: 0,
      history: [
        {
          id: crypto.randomUUID(),
          type: 'reset',
          value: 0,
          timestamp: Date.now(),
        },
        ...s.history,
      ],
    }));
  }, []);

  const clearHistory = useCallback(() => {
    setState(s => ({ ...s, history: [] }));
  }, []);

  const addNote = useCallback((text: string) => {
    if (!text.trim()) return;
    setState(s => ({
      ...s,
      notes: [
        { id: crypto.randomUUID(), text: text.trim(), date: Date.now() },
        ...s.notes,
      ],
    }));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setState(s => ({ ...s, notes: s.notes.filter(n => n.id !== id) }));
  }, []);

  const setStepSize = useCallback((stepSize: number) => {
    setState(s => ({ ...s, stepSize }));
  }, []);

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setState(s => ({ ...s, theme }));
  }, []);

  const clearAllData = useCallback(() => {
    setState(defaultState);
  }, []);

  return {
    state,
    increment,
    decrement,
    reset,
    clearHistory,
    addNote,
    deleteNote,
    setStepSize,
    setTheme,
    clearAllData,
  };
}
