// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar Ekranı

import type { Note } from "../types";

interface AyarlarEkraniProps {
  stepSize: number;
  theme: 'light' | 'dark';
  notes: Note[];
  onSetStepSize: (size: number) => void;
  onSetTheme: (theme: 'light' | 'dark') => void;
  onClearAllData: () => void;
  onNavigate: (screen: 'counter' | 'notes' | 'settings') => void;
  onShowResetConfirm: () => void;
}

export function AyarlarEkrani({
  stepSize,
  theme,
  notes,
  onSetStepSize,
  onSetTheme,
  onClearAllData,
  onNavigate,
  onShowResetConfirm,
}: AyarlarEkraniProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-[#0b1326] font-['Inter'] font-medium tracking-wider text-xs docked full-width top-0 bg-gradient-to-b from-[#2d3449]/20 to-transparent flat no shadows scale-98 active:opacity-80 transition-all flex justify-between items-center px-6 py-4 w-full z-50 sticky">
        <div className="text-[#dae2fd] font-black tracking-tighter text-xl">SESSİZ GÖZLEMCİ</div>
        <div className="flex items-center gap-4">
          <button className="text-[#dae2fd]/60 hover:text-[#adc6ff] transition-colors duration-300 cursor-pointer">
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </button>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow px-6 pt-8 pb-32 max-w-3xl mx-auto w-full flex flex-col gap-10">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-display font-bold tracking-tight text-on-surface">Ayarlar</h1>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed max-w-md">Deneyiminizi kişiselleştirin ve verilerinizi yönetin.</p>
        </section>
        {/* Settings Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Theme Settings Card */}
          <section className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b-0">
                <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>palette</span>
                <h2 className="text-base font-headline font-semibold text-on-surface tracking-wide">Görünüm</h2>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-on-surface">Tema Seçimi</p>
                  <p className="text-xs text-on-surface-variant mt-1">Arayüz renk düzenini değiştirin.</p>
                </div>
                <div className="flex bg-surface-container-highest p-1 rounded-full">
                  <button
                    onClick={() => onSetTheme('light')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest transition-colors flex items-center gap-2 cursor-pointer ${theme === 'light' ? 'bg-surface-container-low text-primary shadow-[0_2px_10px_rgba(0,0,0,0.2)]' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">light_mode</span>
                  </button>
                  <button
                    onClick={() => onSetTheme('dark')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest transition-colors flex items-center gap-2 cursor-pointer ${theme === 'dark' ? 'bg-surface-container-low text-primary shadow-[0_2px_10px_rgba(0,0,0,0.2)]' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Counter Settings Card */}
          <section className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>calculate</span>
                <h2 className="text-base font-headline font-semibold text-on-surface tracking-wide">Sayaç Tercihleri</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-on-surface">Sayaç Adım Boyutu</p>
                    <p className="text-xs text-on-surface-variant mt-1">Her artırma/azaltma işlemindeki değer.</p>
                  </div>
                  <div className="text-xl font-display font-bold text-primary w-12 text-right tabular-nums">
                    {stepSize}
                  </div>
                </div>
                <div className="relative w-full h-2 bg-surface-container-highest rounded-full mt-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(stepSize / 10) * 100}%` }}
                  ></div>
                  <input
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    max="10"
                    min="1"
                    type="range"
                    value={stepSize}
                    onChange={(e) => onSetStepSize(Number(e.target.value))}
                  />
                  {/* Custom Thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(173,198,255,0.5)] z-10 pointer-events-none -ml-2 transition-all"
                    style={{ left: `calc(${(stepSize / 10) * 100}% - 8px)` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant font-label tracking-widest mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </section>
          {/* Danger Zone Card */}
          <section className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group border border-error/10">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                <h2 className="text-base font-headline font-semibold text-error tracking-wide">Tehlikeli Alan</h2>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-on-surface">Tüm Verileri Temizle</p>
                  <p className="text-xs text-on-surface-variant mt-1">Sayaç ve notlarınızı kalıcı olarak siler. Bu işlem geri alınamaz.</p>
                </div>
                <button
                  onClick={onShowResetConfirm}
                  className="bg-error-container text-on-error-container px-5 py-2.5 rounded-lg text-xs font-bold tracking-[0.05em] hover:bg-error hover:text-on-error transition-colors flex-shrink-0 cursor-pointer"
                >
                  SİL
                </button>
              </div>
            </div>
          </section>
          {/* Info Card */}
          <section className="bg-surface-container-lowest rounded-xl p-6 relative overflow-hidden mt-4">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              </div>
              <h3 className="text-sm font-headline font-semibold text-on-surface">Uygulama Hakkında</h3>
              <p className="text-xs text-on-surface-variant max-w-[200px] leading-relaxed">Sessiz Gözlemci, minimalizm ve içe bakış odaklı bir araçtır.</p>
              <div className="mt-4 text-[10px] text-on-surface-variant/60 font-label tracking-widest">
                VERSİYON 1.0.4 (BETA)
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* BottomNavBar */}
      <nav className="bg-[#0b1326]/80 backdrop-blur-xl font-['Inter'] font-bold text-[10px] tracking-[0.05em] fixed bottom-0 w-full rounded-t-3xl border-t border-[#dae2fd]/10 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 md:hidden">
        <button onClick={() => onNavigate("counter")} className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
          <span className="material-symbols-outlined text-[24px] mb-1">add_circle</span>
          <span>SAYAÇ</span>
        </button>
        <button onClick={() => onNavigate("notes")} className="flex flex-col items-center justify-center text-[#dae2fd]/40 px-5 py-2 hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
          <span className="material-symbols-outlined text-[24px] mb-1">history_edu</span>
          <span>NOTLAR</span>
        </button>
        <div className="flex flex-col items-center justify-center bg-[#2d3449] text-[#adc6ff] rounded-2xl px-5 py-2 shadow-[0_0_15px_rgba(173,198,255,0.2)] hover:text-[#dae2fd] transition-all active:scale-90 transition-transform duration-200">
          <span className="material-symbols-outlined text-[24px] mb-1" style={{fontVariationSettings: "'FILL' 1"}}>tune</span>
          <span>AYARLAR</span>
        </div>
      </nav>
    </>
  );
}
