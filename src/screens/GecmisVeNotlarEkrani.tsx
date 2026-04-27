// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Geçmiş ve Notlar Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GecmisVeNotlarEkraniProps {}

export function GecmisVeNotlarEkrani(props: GecmisVeNotlarEkraniProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 z-50 bg-[#0b1326] bg-gradient-to-b from-[#2d3449]/20 to-transparent flex justify-between items-center px-6 py-4 w-full flat no shadows">
      <div className="text-[#dae2fd] font-black tracking-tighter text-xl">SESSİZ GÖZLEMCİ</div>
      <div className="flex items-center gap-4">
      <button className="text-[#adc6ff] hover:text-[#adc6ff] transition-colors duration-300 scale-98 active:opacity-80 transition-all p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50">
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
      <button className="text-[0.75rem] font-label font-bold tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors uppercase pb-1 flex items-center gap-1 group">
      <span>GEÇMİŞİ TEMİZLE</span>
      <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform" data-icon="delete_sweep">delete_sweep</span>
      </button>
      </div>
      <div className="flex flex-col gap-4 relative">
      {/* Timeline Line (Ghost Line) */}
      <div className="absolute left-[11px] top-4 bottom-4 w-px bg-outline-variant/15 z-0 hidden md:block"></div>
      {/* History Item */}
      <div className="relative z-10 flex gap-4 items-start group">
      <div className="w-6 h-6 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center mt-1 border border-outline-variant/20 group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-primary text-[14px]" data-icon="add">add</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">+1 Artırıldı</span>
      <span className="text-on-surface-variant text-sm mt-0.5">Bugün, 14:32</span>
      </div>
      </div>
      {/* History Item */}
      <div className="relative z-10 flex gap-4 items-start group">
      <div className="w-6 h-6 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center mt-1 border border-outline-variant/20 group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant text-[14px]" data-icon="remove">remove</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface-variant font-medium">-1 Azaltıldı</span>
      <span className="text-on-surface-variant/70 text-sm mt-0.5">Dün, 09:15</span>
      </div>
      </div>
      {/* History Item */}
      <div className="relative z-10 flex gap-4 items-start group">
      <div className="w-6 h-6 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center mt-1 border border-outline-variant/20 group-hover:border-primary/30 transition-colors">
      <span className="material-symbols-outlined text-tertiary text-[14px]" data-icon="restart_alt">restart_alt</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface font-medium">Sıfırlandı</span>
      <span className="text-on-surface-variant text-sm mt-0.5">23 Ekim, 22:00</span>
      </div>
      </div>
      </div>
      </section>
      {/* Günlük Notlar */}
      <section className="md:col-span-7 flex flex-col gap-6">
      <h2 className="text-[1.75rem] font-headline font-bold text-on-surface tracking-tight mb-2">Günlük Notlar</h2>
      <div className="flex flex-col gap-6">
      {/* Note Card 1 */}
      <div className="bg-surface-container-low rounded-xl p-6 group transition-all duration-300 hover:bg-surface-container hover:shadow-[0_8px_32px_rgba(218,226,253,0.04)] relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
      <span className="text-[0.75rem] font-label font-bold tracking-[0.05em] text-primary uppercase">24 EKİM 2023</span>
      <button aria-label="Sil" className="text-on-surface-variant/40 hover:text-error transition-colors p-1 -mr-2 -mt-2 focus:outline-none opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
      </button>
      </div>
      <p className="text-[0.875rem] font-body leading-[1.6] text-on-surface">Odaklanma süresi bugün belirgin bir şekilde daha yüksekti. Ortamdaki dikkat dağıtıcı unsurları azalttıktan sonra sayacın istikrarlı artışı sağlandı.</p>
      </div>
      {/* Note Card 2 */}
      <div className="bg-surface-container-low rounded-xl p-6 group transition-all duration-300 hover:bg-surface-container hover:shadow-[0_8px_32px_rgba(218,226,253,0.04)] relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
      <span className="text-[0.75rem] font-label font-bold tracking-[0.05em] text-on-surface-variant uppercase">22 EKİM 2023</span>
      <button aria-label="Sil" className="text-on-surface-variant/40 hover:text-error transition-colors p-1 -mr-2 -mt-2 focus:outline-none opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
      </button>
      </div>
      <p className="text-[0.875rem] font-body leading-[1.6] text-on-surface-variant/80">Yeni rutin oluşturma denemesi. Sabah ilk iş olarak hedef belirlemek verimi artırabilir.</p>
      </div>
      {/* Input Area */}
      <div className="mt-8 bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 focus-within:ring-primary/50 focus-within:shadow-[0_0_15px_rgba(173,198,255,0.15)] transition-all">
      <div className="flex flex-col sm:flex-row gap-2 relative">
      <textarea className="w-full bg-transparent border-none text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 resize-none min-h-[56px] py-4 px-4 font-body text-[0.875rem]" placeholder="Yeni not ekle..." rows={1}></textarea>
      <div className="flex justify-end p-2 sm:self-end">
      <button className="bg-primary hover:bg-primary-container text-on-primary font-label font-bold text-[0.75rem] tracking-[0.05em] uppercase px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
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
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#0b1326]/80 backdrop-blur-xl rounded-t-3xl border-t border-[#dae2fd]/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] md:hidden">
      <a className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="add_circle">add_circle</span>
      <span className="font-['Inter'] font-bold text-[10px] tracking-[0.05em]">SAYAÇ</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-[#2d3449] text-[#adc6ff] rounded-2xl px-5 py-2 shadow-[0_0_15px_rgba(173,198,255,0.2)] active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="history_edu">history_edu</span>
      <span className="font-['Inter'] font-bold text-[10px] tracking-[0.05em]">NOTLAR</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="tune">tune</span>
      <span className="font-['Inter'] font-bold text-[10px] tracking-[0.05em]">AYARLAR</span>
      </a>
      </nav>
      {/* Web Navigation Cluster (Hidden on mobile) */}
      <nav className="hidden md:flex fixed top-0 right-0 z-50 items-center h-[68px] px-6 gap-8 text-[#dae2fd]/60 mr-16">
      <a className="flex items-center gap-2 hover:text-[#adc6ff] transition-colors text-sm font-medium tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
      <span>SAYAÇ</span>
      </a>
      <a className="flex items-center gap-2 text-[#adc6ff] font-bold text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
      <span>NOTLAR</span>
      </a>
      <a className="flex items-center gap-2 hover:text-[#adc6ff] transition-colors text-sm font-medium tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span>AYARLAR</span>
      </a>
      </nav>
    </>
  );
}
