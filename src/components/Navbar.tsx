import React from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen, Award, Printer } from 'lucide-react';

interface NavbarProps {
  currentTab: 'desdobraveis' | 'oficina' | 'detetive' | 'secretas';
  setCurrentTab: (tab: 'desdobraveis' | 'oficina' | 'detetive' | 'secretas') => void;
  isUppercase: boolean;
  setIsUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  stars: number;
  onOpenStickerAlbum: () => void;
  onOpenPdfModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  isUppercase,
  setIsUppercase,
  soundEnabled,
  setSoundEnabled,
  stars,
  onOpenStickerAlbum,
  onOpenPdfModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-sm ring-2 ring-amber-300/60">
            <span className="font-heading font-bold text-xl">Aa</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-slate-800 tracking-tight leading-tight">
              Desdobráveis 1º Ano
            </span>
            <span className="text-[11px] text-amber-700 font-medium hidden sm:inline">
              Casos de Leitura & Sílabas Complexas
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Tabs (Single line with clean buttons) */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => setCurrentTab('desdobraveis')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentTab === 'desdobraveis'
                ? 'bg-amber-400 text-amber-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-100/60'
            }`}
          >
            <span>📄</span>
            <span>Desdobráveis</span>
          </button>

          <button
            onClick={() => setCurrentTab('oficina')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentTab === 'oficina'
                ? 'bg-amber-400 text-amber-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-100/60'
            }`}
          >
            <span>🧩</span>
            <span>Monta-Palavras</span>
          </button>

          <button
            onClick={() => setCurrentTab('detetive')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentTab === 'detetive'
                ? 'bg-amber-400 text-amber-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-100/60'
            }`}
          >
            <span>🔍</span>
            <span>Detetive dos Sons</span>
          </button>

          <button
            onClick={() => setCurrentTab('secretas')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentTab === 'secretas'
                ? 'bg-amber-400 text-amber-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-100/60'
            }`}
          >
            <span>✨</span>
            <span>Sílabas Secretas</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Literacy Helpers */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Uppercase / Lowercase toggle */}
          <button
            onClick={() => setIsUppercase((prev) => !prev)}
            title="Alternar entre LETRAS MAIÚSCULAS e minúsculas"
            className="h-9 px-2.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span className="font-mono text-sm">{isUppercase ? 'Aa' : 'AA'}</span>
            <span className="hidden md:inline">{isUppercase ? 'Minúsculas' : 'MAIÚSCULAS'}</span>
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            title={soundEnabled ? 'Silenciar som' : 'Ativar som'}
            className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Star Counter & Sticker Album */}
          <button
            onClick={onOpenStickerAlbum}
            title="Ver Álbum de Cromos e Estrelas"
            className="h-9 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" />
            <span className="font-mono font-bold text-sm tabular-nums">{stars}</span>
            <span className="hidden lg:inline font-heading">Cromos</span>
          </button>

          {/* Original PDF Material Sheet Button */}
          <button
            onClick={onOpenPdfModal}
            title="Ver Caderno Original em PDF & Imprimir Desdobráveis"
            className="h-9 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden md:inline">PDF Original</span>
          </button>
        </div>
      </div>
    </header>
  );
};
