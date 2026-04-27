import { useState } from "react";
import { usePersistentAppState } from "./features/app/usePersistentAppState";
import { AnaSayacEkrani } from "./screens/AnaSayacEkrani";
import { GecmisVeNotlarEkrani } from "./screens/GecmisVeNotlarEkrani";
import { AyarlarEkrani } from "./screens/AyarlarEkrani";
import { SifirlamaOnayModali } from "./screens/SifirlamaOnayModali";
import type { Screen } from "./types";

export default function App() {
  const {
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
  } = usePersistentAppState();

  const [screen, setScreen] = useState<Screen>("counter");
  const [showResetModal, setShowResetModal] = useState(false);

  const handleNavigate = (target: Screen) => setScreen(target);

  const handleResetConfirm = () => {
    reset();
    setShowResetModal(false);
  };

  const handleClearAllConfirm = () => {
    clearAllData();
    setShowResetModal(false);
  };

  const lastEntry = state.history[0];

  return (
    <div
      data-setfarm-root="baseline"
      className={`min-h-screen flex flex-col ${
        state.theme === "light" ? "bg-white text-slate-950" : ""
      }`}
      style={
        state.theme === "dark"
          ? { backgroundColor: "var(--color-background)", color: "var(--color-on-surface)" }
          : undefined
      }
    >
      {screen === "counter" && (
        <AnaSayacEkrani
          count={state.count}
          stepSize={state.stepSize}
          onIncrement={increment}
          onDecrement={decrement}
          onReset={() => setShowResetModal(true)}
          onNavigate={handleNavigate}
          lastEntry={lastEntry}
        />
      )}
      {screen === "notes" && (
        <GecmisVeNotlarEkrani
          history={state.history}
          notes={state.notes}
          onClearHistory={clearHistory}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
          onNavigate={handleNavigate}
        />
      )}
      {screen === "settings" && (
        <AyarlarEkrani
          stepSize={state.stepSize}
          theme={state.theme}
          notes={state.notes}
          onSetStepSize={setStepSize}
          onSetTheme={setTheme}
          onClearAllData={handleClearAllConfirm}
          onNavigate={handleNavigate}
          onShowResetConfirm={() => setShowResetModal(true)}
        />
      )}
      {showResetModal && (
        <SifirlamaOnayModali
          count={state.count}
          onConfirm={handleResetConfirm}
          onCancel={() => setShowResetModal(false)}
        />
      )}
    </div>
  );
}
