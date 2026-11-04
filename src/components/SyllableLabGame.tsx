import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, ArrowRight, RotateCcw, Check, HelpCircle } from 'lucide-react';
import { CURRICULUM_DATA, LiteracyWord, LiteracyModule } from '../data/curriculum';
import { playSfx, speakWord } from '../utils/audio';

interface SyllableLabGameProps {
  isUppercase: boolean;
  onEarnStar: () => void;
}

interface PuzzleItem {
  module: LiteracyModule;
  word: LiteracyWord;
  shuffledSyllables: { id: string; text: string }[];
}

export const SyllableLabGame: React.FC<SyllableLabGameProps> = ({
  isUppercase,
  onEarnStar,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'casos_leitura' | 'silabas_complexas' | 'consoantes'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedSyllables, setSelectedSyllables] = useState<{ id: string; text: string }[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [solvedCount, setSolvedCount] = useState<number>(0);

  // Generate word puzzle list
  const puzzles: PuzzleItem[] = React.useMemo(() => {
    const list: PuzzleItem[] = [];
    const filteredModules = selectedCategory === 'all'
      ? CURRICULUM_DATA
      : CURRICULUM_DATA.filter((m) => m.category === selectedCategory);

    filteredModules.forEach((mod) => {
      mod.words.forEach((w) => {
        if (w.syllables.length >= 2) {
          const syllablesWithIds = w.syllables.map((syl, i) => ({
            id: `${w.id}-syl-${i}`,
            text: syl,
          }));
          // Shuffle syllables
          const shuffled = [...syllablesWithIds].sort(() => Math.random() - 0.5);
          list.push({
            module: mod,
            word: w,
            shuffledSyllables: shuffled,
          });
        }
      });
    });

    return list.sort(() => Math.random() - 0.5);
  }, [selectedCategory]);

  const currentPuzzle = puzzles[currentIndex % puzzles.length];

  // Reset when puzzle changes
  useEffect(() => {
    setSelectedSyllables([]);
    setIsSuccess(false);
    setIsError(false);
    setShowHint(false);
  }, [currentIndex, selectedCategory]);

  const formatText = (text: string) => {
    return isUppercase ? text.toUpperCase() : text.toLowerCase();
  };

  const handleSyllableClick = (syl: { id: string; text: string }) => {
    if (isSuccess) return;
    if (selectedSyllables.some((s) => s.id === syl.id)) return;

    playSfx('pop');
    const newSelected = [...selectedSyllables, syl];
    setSelectedSyllables(newSelected);

    // Speak the tapped syllable
    speakWord(syl.text);

    // Check if word is complete
    if (newSelected.length === currentPuzzle.word.syllables.length) {
      const assembledWord = newSelected.map((s) => s.text).join('').toLowerCase();
      const targetWord = currentPuzzle.word.word.replace(/[-]/g, '').toLowerCase();

      if (assembledWord === targetWord) {
        // Correct!
        setIsSuccess(true);
        setIsError(false);
        playSfx('correct');
        onEarnStar();
        setSolvedCount((c) => c + 1);

        // Confetti burst
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.65 },
          });
        } catch {
          // ignore
        }

        setTimeout(() => {
          speakWord(`Muito bem! ${currentPuzzle.word.word}!`);
        }, 300);
      } else {
        // Incorrect
        setIsError(true);
        playSfx('wrong');
        setTimeout(() => {
          setSelectedSyllables([]);
          setIsError(false);
        }, 800);
      }
    }
  };

  const handleRemoveSyllable = (index: number) => {
    if (isSuccess) return;
    playSfx('click');
    const updated = [...selectedSyllables];
    updated.splice(index, 1);
    setSelectedSyllables(updated);
    setIsError(false);
  };

  const handleNext = () => {
    playSfx('click');
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    playSfx('click');
    setSelectedSyllables([]);
    setIsError(false);
  };

  if (!currentPuzzle) return null;

  return (
    <div className="max-w-2xl mx-auto my-6 px-4">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 p-1.5 bg-amber-100/60 rounded-2xl mb-6">
        <button
          onClick={() => {
            setSelectedCategory('all');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            selectedCategory === 'all'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950'
          }`}
        >
          Todas as Palavras
        </button>
        <button
          onClick={() => {
            setSelectedCategory('casos_leitura');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            selectedCategory === 'casos_leitura'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950'
          }`}
        >
          Casos de Leitura
        </button>
        <button
          onClick={() => {
            setSelectedCategory('silabas_complexas');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            selectedCategory === 'silabas_complexas'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-900/70 hover:text-amber-950'
          }`}
        >
          Sílabas Complexas
        </button>
      </div>

      {/* Main Puzzle Card */}
      <div className="bg-white rounded-3xl border-2 border-amber-300 p-6 sm:p-8 shadow-md text-center relative overflow-hidden">
        {/* Module Kicker & Score */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-800">
              {currentPuzzle.module.title}
            </span>
            <span>·</span>
            <span>Regra: {currentPuzzle.module.symbol}</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold text-amber-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Resolvidas: {solvedCount}</span>
          </div>
        </div>

        {/* Big Illustration & Voice Prompt */}
        <div className="my-4">
          <div
            onClick={() => {
              playSfx('pop');
              speakWord(currentPuzzle.word.word);
            }}
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-6xl sm:text-7xl shadow-inner cursor-pointer hover:scale-105 transition-transform"
            title="Clica na imagem para ouvir a palavra!"
          >
            {currentPuzzle.word.emoji}
          </div>
          <button
            onClick={() => speakWord(currentPuzzle.word.word)}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-colors shadow-2xs"
          >
            <Volume2 className="w-4 h-4 text-amber-700" />
            <span>Ouvir a palavra</span>
          </button>
        </div>

        {/* Hint Callout */}
        {showHint && (
          <div className="max-w-xs mx-auto mb-4 p-2 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 animate-fadeIn">
            💡 Dica: {currentPuzzle.word.meaningHint} ({currentPuzzle.word.syllables.length} sílabas)
          </div>
        )}

        {/* Syllable Assembly Slots (Drop Targets) */}
        <div className="my-6">
          <p className="text-xs font-medium text-slate-500 mb-2">
            Monta a palavra clicando nas sílabas na ordem correta:
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-3 min-h-[58px]">
            {currentPuzzle.word.syllables.map((_, idx) => {
              const placedSyllable = selectedSyllables[idx];
              return (
                <div
                  key={idx}
                  onClick={() => placedSyllable && handleRemoveSyllable(idx)}
                  className={`w-16 h-14 sm:w-20 sm:h-16 rounded-2xl border-2 flex items-center justify-center text-lg sm:text-xl font-heading font-bold transition-all ${
                    placedSyllable
                      ? isSuccess
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-950 scale-105 shadow-xs'
                        : isError
                        ? 'bg-rose-100 border-rose-400 text-rose-950 animate-shake'
                        : 'bg-amber-100 border-amber-400 text-amber-950 cursor-pointer hover:bg-amber-200'
                      : 'border-dashed border-slate-300 bg-slate-50 text-slate-400'
                  }`}
                >
                  {placedSyllable ? formatText(placedSyllable.text) : idx + 1}
                </div>
              );
            })}
          </div>
        </div>

        {/* Syllable Options (Available Bubbles) */}
        <div className="my-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {currentPuzzle.shuffledSyllables.map((syl) => {
              const isUsed = selectedSyllables.some((s) => s.id === syl.id);
              return (
                <button
                  key={syl.id}
                  disabled={isUsed || isSuccess}
                  onClick={() => handleSyllableClick(syl)}
                  className={`px-5 py-3 rounded-2xl text-xl sm:text-2xl font-heading font-black transition-all active:scale-95 shadow-sm ${
                    isUsed
                      ? 'opacity-25 bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                      : 'bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-amber-950 border-2 border-amber-500 hover:scale-105 cursor-pointer'
                  }`}
                >
                  {formatText(syl.text)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Controls & Success State */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setShowHint((prev) => !prev)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>{showHint ? 'Esconder dica' : 'Preciso de ajuda'}</span>
          </button>

          <div className="flex items-center gap-2">
            {!isSuccess && selectedSyllables.length > 0 && (
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar</span>
              </button>
            )}

            {isSuccess ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 animate-bounce"
              >
                <span>Próxima Palavra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 transition-colors flex items-center gap-1"
              >
                <span>Passar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
