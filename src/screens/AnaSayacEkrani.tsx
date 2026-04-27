// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayaç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayacEkraniProps {}

export function AnaSayacEkrani(props: AnaSayacEkraniProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-6 py-4 w-full z-50 bg-[#0b1326] bg-gradient-to-b from-[#2d3449]/20 to-transparent docked full-width top-0 text-[#adc6ff] font-['Inter'] font-medium tracking-wider text-xs flat no shadows">
      <div className="text-[#dae2fd] font-black tracking-tighter text-xl scale-98 active:opacity-80 transition-all">SESSİZ GÖZLEMCİ</div>
      <div className="flex items-center gap-4">
      <button className="hover:text-[#adc6ff] transition-colors duration-300 scale-98 active:opacity-80 transition-all flex items-center justify-center p-2 rounded-full hover:bg-surface-container-highest">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32 pt-16 relative z-10">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50"></div>
      </div>
      {/* Counter Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-16 w-full max-w-lg">
      {/* Number Display */}
      <div className="flex flex-col items-center justify-center p-12 rounded-[2rem] bg-surface-container-low/80 backdrop-blur-xl border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] w-full">
      <div className="text-[8rem] leading-none font-black text-on-surface tracking-tighter mix-blend-plus-lighter" style={{letterSpacing: "-0.02em"}}>42</div>
      <div className="text-on-surface-variant font-medium tracking-[0.2em] uppercase text-xs mt-4 opacity-70">GÜNCEL DEĞER</div>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-8 w-full">
      {/* Decrease Button */}
      <button className="flex items-center justify-center w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest active:scale-95 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <span className="material-symbols-outlined text-3xl" data-icon="remove">remove</span>
      </button>
      {/* Increase Button (Primary) */}
      <button className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-primary to-primary-container text-on-primary hover:brightness-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(173,198,255,0.3)]">
      <span className="material-symbols-outlined text-5xl" data-icon="add" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      </button>
      </div>
      {/* Action History Briefly */}
      <div className="flex flex-col items-center gap-3 w-full mt-8">
      <button className="px-6 py-2 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low active:scale-95 transition-all text-xs font-bold tracking-widest">
                          SIFIRLA
                      </button>
      <div className="text-[10px] text-on-surface-variant/50 font-medium tracking-wide mt-2">
                          Son işlem: +1 (Bugün, 14:32)
                      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#0b1326]/80 backdrop-blur-xl border-t border-[#dae2fd]/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] fixed bottom-0 w-full rounded-t-3xl text-[#adc6ff] font-['Inter'] font-bold text-[10px] tracking-[0.05em]">
      {/* SAYAÇ (Active) */}
      <div className="flex flex-col items-center justify-center bg-[#2d3449] text-[#adc6ff] rounded-2xl px-5 py-2 shadow-[0_0_15px_rgba(173,198,255,0.2)] hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="add_circle" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span>SAYAÇ</span>
      </div>
      {/* NOTLAR (Inactive) */}
      <div className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="history_edu">history_edu</span>
      <span>NOTLAR</span>
      </div>
      {/* AYARLAR (Inactive) */}
      <div className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="tune">tune</span>
      <span>AYARLAR</span>
      </div>
      </nav>
      {/* Desktop Nav Replacement (Hidden on mobile, matching the design system rules) */}
      <nav className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-surface-container-low/80 backdrop-blur-xl rounded-full border border-white/5 p-2 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2">
      <button className="flex items-center gap-2 bg-surface-container-highest text-primary px-6 py-3 rounded-full font-bold text-xs tracking-wider transition-all">
      <span className="material-symbols-outlined" data-icon="add_circle" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
                      SAYAÇ
                  </button>
      <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface px-6 py-3 rounded-full font-bold text-xs tracking-wider transition-all">
      <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
                      NOTLAR
                  </button>
      <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface px-6 py-3 rounded-full font-bold text-xs tracking-wider transition-all">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
                      AYARLAR
                  </button>
      </div>
      </nav>
    </>
  );
}
