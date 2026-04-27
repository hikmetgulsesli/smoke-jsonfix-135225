// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Geçmiş ve Notlar Ekranı

import { useState } from "react";
import type { HistoryEntry, Note } from "../types";

interface GecmisVeNotlarEkraniProps {
  history: HistoryEntry[];
  notes: Note[];
  onClearHistory: () => void;
  onAddNote: (text: string) => void;
  onDeleteNote: (id: string) => void;
  onNavigate: (screen: 'counter' | 'notes' | 'settings') => void;
}

export function GecmisVeNotlarEkrani({
  history,
  notes,
  onClearHistory,
  onAddNote,
  onDeleteNote,
  onNavigate,
}: GecmisVeNotlarEkraniProps) {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim()) {
      onAddNote(noteText);
      setNoteText("");
    }
  };

  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
    const time = date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    return `${day}, ${time}`;
  };

  const getHistoryIcon = (type: HistoryEntry["type"]) => {
    switch (type) {
      case "increment": return "add";
      case "decrement": return "remove";
      case "reset": return "restart_alt";
    }
  };

  const getHistoryLabel = (entry: HistoryEntry): string => {
    switch (entry.type) {
      case "increment": return `+${entry.value} Artırıldı`;
      case "decrement": return `-${entry.value} Azaltıldı`;
      case "reset": return "Sıfırlandı";
    }
  };

  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 z-50 bg-background bg-gradient-to-b from-surface-container-highest/20 to-transparent flex justify-between items-center px-6 py-4 w-full flat no shadows">
      <div className="text-on-surface font-black tracking-tighter text-xl">SESSİZ GÖZLEMCİ</div>
      <div className="flex items-center gap-4">
      <button onClick={() => onNavigate("settings")} className="text-primary hover:text-primary transition-colors duration-300 scale-98 active:opacity-80 transition-all p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-grow container mx-auto px-6 pt-8 pb-32 max-w-4xl flex flex-col gap-12">
      {/* Bento Layout: Gelecek / Notlar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Sayaç Geçmişi */}
      <section className="md:col-span-5 flex flex-col gap-6">
      <div className="flex justify-between items-end mb-2">
      <h2 className="text-[1.75rem] font-headline font-bold text-on-surface tracking-tight leading-tight">Sayaç<br />Geçmişi</h2>
      <button onClick={onClearHistory} className="text-[0.75rem] font-label font-bold tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors uppercase pb-1 flex items-center gap-1 group cursor-pointer">
      <span>GEÇMİŞİ TEMİZLE</span>
      <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform" data-icon="delete_sweep">delete_sweep</span>
      </button>
      </div>
      <div className="flex flex-col gap-4 relative">
      {/* Timeline Line (Ghost Line) */}
      <div className="absolute left-[11px] top-4 bottom-4 w-px bg-outline-variant/15 z-0 hidden md:block"></div>
      {history.length === 0 ? (
        <p className="text-on-surface-variant text-sm pl-8">Henüz geçmiş yok.</p>
      ) : (
        history.slice(0, 20).map((entry) => (
          <div key={entry.id} className="relative z-10 flex gap-4 items-start group">
            <div className="w-6 h-6 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center mt-1 border border-outline-variant/20 group-hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-[14px]" data-icon={getHistoryIcon(entry.type)}>{getHistoryIcon(entry.type)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-medium">{getHistoryLabel(entry)}</span>
              <span className="text-on-surface-variant text-sm mt-0.5">{formatDate(entry.timestamp)}</span>
            </div>
          </div>
        ))
      )}
      </div>
      </section>
      {/* Günlük Notlar */}
      <section className="md:col-span-7 flex flex-col gap-6">
      <h2 className="text-[1.75rem] font-headline font-bold text-on-surface tracking-tight mb-2">Günlük Notlar</h2>
      <div className="flex flex-col gap-6">
      {notes.length === 0 ? (
        <p className="text-on-surface-variant text-sm">Henüz not yok.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="bg-surface-container-low rounded-xl p-6 group transition-all duration-300 hover:bg-surface-container hover:shadow-[0_8px_32px_rgba(218,226,253,0.04)] relative overflow-hidden">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[0.75rem] font-label font-bold tracking-[0.05em] text-primary uppercase">
                {new Date(note.date).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <button onClick={() => onDeleteNote(note.id)} aria-label="Sil" className="text-on-surface-variant/40 hover:text-error transition-colors p-1 -mr-2 -mt-2 focus:outline-none opacity-0 group-hover:opacity-100 cursor-pointer">
                <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
              </button>
            </div>
            <p className="text-[0.875rem] font-body leading-[1.6] text-on-surface">{note.text}</p>
          </div>
        ))
      )}
      {/* Input Area */}
      <div className="mt-8 bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 focus-within:ring-primary/50 focus-within:shadow-[0_0_15px_rgba(173,198,255,0.15)] transition-all">
        <div className="flex flex-col sm:flex-row gap-2 relative">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAddNote(); } }}
            className="w-full bg-transparent border-none text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 resize-none min-h-[56px] py-4 px-4 font-body text-[0.875rem]"
            placeholder="Yeni not ekle..."
            rows={1}
          ></textarea>
          <div className="flex justify-end p-2 sm:self-end">
            <button onClick={handleAddNote} className="bg-primary hover:bg-primary-container text-on-primary font-label font-bold text-[0.75rem] tracking-[0.05em] uppercase px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>EKLE</span>
              <span className="material-symbols-outlined text-[16px]" data-icon="send">send</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      </section>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-background/80 backdrop-blur-xl rounded-t-3xl border-t border-on-surface/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] md:hidden">
        <button onClick={() => onNavigate("counter")} className="flex flex-col items-center justify-center text-on-surface/40 px-5 py-2 hover:text-on-surface transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
          <span className="material-symbols-outlined mb-1" data-icon="add_circle">add_circle</span>
          <span className="font-body font-bold text-[10px] tracking-[0.05em]">SAYAÇ</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-surface-container-highest text-primary rounded-2xl px-5 py-2 shadow-[0_0_15px_rgba(173,198,255,0.2)] active:scale-90 transition-transform duration-200">
          <span className="material-symbols-outlined mb-1" data-icon="history_edu">history_edu</span>
          <span className="font-body font-bold text-[10px] tracking-[0.05em]">NOTLAR</span>
        </button>
        <button onClick={() => onNavigate("settings")} className="flex flex-col items-center justify-center text-on-surface/40 px-5 py-2 hover:text-on-surface transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
          <span className="material-symbols-outlined mb-1" data-icon="tune">tune</span>
          <span className="font-body font-bold text-[10px] tracking-[0.05em]">AYARLAR</span>
        </button>
      </nav>
      {/* Web Navigation Cluster */}
      <nav className="hidden md:flex fixed top-0 right-0 z-50 items-center h-[68px] px-6 gap-8 text-on-surface/60 mr-16">
        <button onClick={() => onNavigate("counter")} className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium tracking-wide cursor-pointer">
          <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
          <span>SAYAÇ</span>
        </button>
        <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide cursor-pointer">
          <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
          <span>NOTLAR</span>
        </button>
        <button onClick={() => onNavigate("settings")} className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium tracking-wide cursor-pointer">
          <span className="material-symbols-outlined" data-icon="tune">tune</span>
          <span>AYARLAR</span>
        </button>
      </nav>
    </>
  );
}
