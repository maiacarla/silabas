import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FoldableCard } from './components/FoldableCard';
import { SyllableLabGame } from './components/SyllableLabGame';
import { ReadingDetectiveGame } from './components/ReadingDetectiveGame';
import { MissingSyllableGame } from './components/MissingSyllableGame';
import { PdfPrintModal } from './components/PdfPrintModal';
import { StickerAlbumModal } from './components/StickerAlbumModal';
import { CURRICULUM_DATA, LiteracyModule } from './data/curriculum';
import { playSfx, speakWord } from './utils/audio';
import { Scissors, Sparkles, BookOpen, ChevronRight, ChevronLeft, Award, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'desdobraveis' | 'oficina' | 'detetive' | 'secretas'>('desdobraveis');
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [stars, setStars] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('alfabetizacao_stars');
      return saved ? parseInt(saved, 10) : 5;
    } catch {
      return 5;
    }
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'casos_leitura' | 'silabas_complexas' | 'consoantes'>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('caso-lh');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isStickerModalOpen, setIsStickerModalOpen] = useState<boolean>(false);

  // Save stars
  useEffect(() => {
    try {
      localStorage.setItem('alfabetizacao_stars', stars.toString());
    } catch {
      // ignore
    }
  }, [stars]);

  const handleEarnStar = () => {
    setStars((prev) => prev + 1);
  };

  const filteredModules = React.useMemo(() => {
    if (activeCategory === 'all') return CURRICULUM_DATA;
    return CURRICULUM_DATA.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const activeModule = CURRICULUM_DATA.find((m) => m.id === selectedModuleId) || CURRICULUM_DATA[0];

  // Navigate between modules
  const currentModuleIndex = filteredModules.findIndex((m) => m.id === activeModule.id);

  const handlePrevModule = () => {
    if (currentModuleIndex > 0) {
      playSfx('click');
      setSelectedModuleId(filteredModules[currentModuleIndex - 1].id);
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < filteredModules.length - 1) {
      playSfx('click');
      setSelectedModuleId(filteredModules[currentModuleIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800 font-sans selection:bg-amber-200">
      {/* Top Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isUppercase={isUppercase}
        setIsUppercase={setIsUppercase}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        stars={stars}
        onOpenStickerAlbum={() => {
          playSfx('click');
          setIsStickerModalOpen(true);
        }}
        onOpenPdfModal={() => {
          playSfx('click');
          setIsPdfModalOpen(true);
        }}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col items-center">
        {/* TAB 1: DESDOBRÁVEIS INTERATIVOS */}
        {currentTab === 'desdobraveis' && (
          <div className="w-full flex flex-col items-center">
            {/* Pedagogical Banner */}
            <div className="w-full max-w-2xl bg-gradient-to-r from-amber-100/90 via-orange-100/80 to-amber-100/90 rounded-3xl p-4 sm:p-5 border border-amber-200 shadow-2xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-2xl shadow-xs shrink-0">
                  ✂️
                </div>
                <div>
                  <h1 className="font-heading font-bold text-base sm:text-lg text-amber-950">
                    Caderno de Desdobráveis do 1º Ano
                  </h1>
                  <p className="text-xs text-amber-800 leading-snug">
                    Pinta, dobra, recorta, cola e descobre os casos de leitura e sílabas complexas!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsPdfModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Ver PDF de Origem</span>
                </button>
              </div>
            </div>

            {/* Category Filter Selector */}
            <div className="w-full max-w-2xl flex items-center justify-center gap-1.5 p-1 bg-amber-100/70 rounded-2xl mb-4 overflow-x-auto scrollbar-none">
              <button
                onClick={() => {
                  playSfx('click');
                  setActiveCategory('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-white text-amber-950 shadow-xs'
                    : 'text-amber-900/70 hover:text-amber-950'
                }`}
              >
                Todos ({CURRICULUM_DATA.length})
              </button>
              <button
                onClick={() => {
                  playSfx('click');
                  setActiveCategory('casos_leitura');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === 'casos_leitura'
                    ? 'bg-white text-amber-950 shadow-xs'
                    : 'text-amber-900/70 hover:text-amber-950'
                }`}
              >
                Casos de Leitura (CH, LH, NH, RR...)
              </button>
              <button
                onClick={() => {
                  playSfx('click');
                  setActiveCategory('silabas_complexas');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === 'silabas_complexas'
                    ? 'bg-white text-amber-950 shadow-xs'
                    : 'text-amber-900/70 hover:text-amber-950'
                }`}
              >
                Sílabas Complexas (AR, AL, AS, BR...)
              </button>
              <button
                onClick={() => {
                  playSfx('click');
                  setActiveCategory('consoantes');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === 'consoantes'
                    ? 'bg-white text-amber-950 shadow-xs'
                    : 'text-amber-900/70 hover:text-amber-950'
                }`}
              >
                Consoantes Básicas
              </button>
            </div>

            {/* Horizontal Module Strip (Mascot Buttons) */}
            <div className="w-full max-w-2xl overflow-x-auto pb-2 scrollbar-none mb-2">
              <div className="flex items-center gap-2 px-1">
                {filteredModules.map((mod) => {
                  const isSelected = mod.id === activeModule.id;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        playSfx('click');
                        setSelectedModuleId(mod.id);
                      }}
                      className={`px-3 py-2 rounded-2xl border-2 flex items-center gap-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 border-amber-600 text-amber-950 font-bold shadow-xs scale-105'
                          : 'bg-white border-amber-200 text-slate-700 hover:bg-amber-50 hover:border-amber-300'
                      }`}
                    >
                      <span className="text-lg">{mod.mascot.emoji}</span>
                      <span className="text-xs font-heading">{mod.symbol}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Previous / Next Module Navigation Arrows */}
            <div className="w-full max-w-2xl flex items-center justify-between text-xs text-slate-500 px-2 my-1">
              <button
                disabled={currentModuleIndex === 0}
                onClick={handlePrevModule}
                className="flex items-center gap-1 font-semibold text-amber-800 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-950"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <span className="font-mono text-xs text-slate-400">
                {currentModuleIndex + 1} de {filteredModules.length}
              </span>

              <button
                disabled={currentModuleIndex === filteredModules.length - 1}
                onClick={handleNextModule}
                className="flex items-center gap-1 font-semibold text-amber-800 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-950"
              >
                <span>Seguinte</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* The Active Interactive Desdobrável Card */}
            <FoldableCard
              key={activeModule.id}
              module={activeModule}
              isUppercase={isUppercase}
              onEarnStar={handleEarnStar}
            />
          </div>
        )}

        {/* TAB 2: OFICINA DE SÍLABAS / MONTA-PALAVRAS */}
        {currentTab === 'oficina' && (
          <div className="w-full">
            <div className="text-center max-w-md mx-auto mb-2">
              <h1 className="font-heading font-bold text-xl text-slate-900">
                Oficina de Sílabas: Monta a Palavra
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Ouve a palavra e clica nas bolhas das sílabas na sequência certa para construir a palavra completa!
              </p>
            </div>
            <SyllableLabGame
              isUppercase={isUppercase}
              onEarnStar={handleEarnStar}
            />
          </div>
        )}

        {/* TAB 3: DETETIVE DOS SONS */}
        {currentTab === 'detetive' && (
          <div className="w-full">
            <div className="text-center max-w-md mx-auto mb-2">
              <h1 className="font-heading font-bold text-xl text-slate-900">
                Detetive dos Casos de Leitura
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Aplica as regras fonéticas fundamentais: RR vs R, SS vs S com som de Z, GUE/GUI, CE/CI e os 4 sons do X!
              </p>
            </div>
            <ReadingDetectiveGame
              isUppercase={isUppercase}
              onEarnStar={handleEarnStar}
            />
          </div>
        )}

        {/* TAB 4: SÍLABAS SECRETAS */}
        {currentTab === 'secretas' && (
          <div className="w-full">
            <div className="text-center max-w-md mx-auto mb-2">
              <h1 className="font-heading font-bold text-xl text-slate-900">
                Sílabas Secretas: Completa a Palavra
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Uma sílaba complexa fugiu da palavra! Olha para o desenho e descobre qual é a sílaba que falta.
              </p>
            </div>
            <MissingSyllableGame
              isUppercase={isUppercase}
              onEarnStar={handleEarnStar}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-amber-200/80 py-4 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Desdobráveis de Alfabetização · 1º Ciclo do Ensino Básico · Baseado na obra de Eliana Ernesto
          </span>
          <div className="flex items-center gap-4 text-amber-800">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="hover:underline font-medium"
            >
              Imprimir Atividades (PDF)
            </button>
            <span>·</span>
            <button
              onClick={() => setIsStickerModalOpen(true)}
              className="hover:underline font-medium"
            >
              Álbum de Cromos
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PdfPrintModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <StickerAlbumModal
        isOpen={isStickerModalOpen}
        onClose={() => setIsStickerModalOpen(false)}
        stars={stars}
      />
    </div>
  );
}
