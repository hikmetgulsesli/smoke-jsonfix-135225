// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sıfırlama Onay Modalı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SifirlamaOnayModaliProps {}

export function SifirlamaOnayModali(props: SifirlamaOnayModaliProps) {
  return (
    <>
      {/* Dimmed Background Content (Counter Screen) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-30 filter blur-sm transition-all duration-300">
      <div className="flex flex-col items-center justify-center space-y-12">
      <h1 className="text-[8rem] font-black tracking-[-0.02em] text-primary leading-none">42</h1>
      <div className="flex space-x-8">
      <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-[0_0_32px_rgba(173,198,255,0.1)]">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>remove</span>
      </div>
      <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-[0_0_48px_rgba(173,198,255,0.2)]">
      <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      </div>
      </div>
      </div>
      </div>
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md">
      {/* Modal Content */}
      <div className="bg-surface-container-low rounded-2xl w-full max-w-sm overflow-hidden flex flex-col shadow-[0_32px_64px_rgba(11,19,38,0.8),0_0_0_1px_rgba(218,226,253,0.05)] relative transform transition-all scale-100 opacity-100">
      {/* Glow Effect */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-error/10 rounded-full blur-[64px] pointer-events-none"></div>
      <div className="p-8 pb-6 flex flex-col items-center text-center relative z-10">
      <div className="w-12 h-12 rounded-full bg-error-container/30 flex items-center justify-center text-error mb-6">
      <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      <h2 className="font-headline font-bold text-2xl text-on-surface mb-3 tracking-tight">Sayacı Sıfırla?</h2>
      <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
                          Sayaç sıfırlanacak. Bu işlem geri alınamaz. Onaylıyor musunuz?
                      </p>
      <div className="flex flex-col w-full space-y-3">
      <button className="w-full bg-error text-on-error font-label font-bold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-error/90 active:scale-[0.98] transition-all shadow-[0_8px_16px_rgba(255,180,171,0.1)] flex items-center justify-center space-x-2">
      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>delete</span>
      <span>EVET, SIFIRLA</span>
      </button>
      <button className="w-full bg-transparent text-on-surface font-label font-bold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-surface-container-highest active:scale-[0.98] transition-all border border-outline-variant/30">
                              İPTAL
                          </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
