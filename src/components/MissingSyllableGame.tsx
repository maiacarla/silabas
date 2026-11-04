import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CURRICULUM_DATA, LiteracyWord, LiteracyModule } from '../data/curriculum';
import { playSfx, speakWord } from '../utils/audio';

interface MissingSyllableGameProps {
  isUppercase: boolean;
  onEarnStar: () => void;
}

interface MissingQuestion {
  id: string;
  module: LiteracyModule;
  word: LiteracyWord;
  missingIndex: number;
  correctSyllable: string;
  options: string[];
}

export const MissingSyllableGame: React.FC<MissingSyllableGameProps> = ({
  isUppercase,
  onEarnStar,
}) => {
  // Build a list of missing syllable questions
  const questions: MissingQuestion[] = React.useMemo(() => {
    const list: MissingQuestion[] = [];
    const distractorPool = ['lho', 'nho', 'cho', 'qui', 'que', 'cle', 'tre', 'bre', 'tar', 'car', 'gi', 'ji', 'gui', 'da', 'ba', 'truz', 'bor', 'por', 'dor', 'mor', 'pão', 'rão', 'ção'];

    CURRICULUM_DATA.forEach((mod) => {
      mod.words.forEach((w) => {
        if (w.syllables.length >= 2) {
          // Identify the syllable with the target highlight, or choose last or middle
          let missingIdx = w.syllables.findIndex((s) =>
            s.toLowerCase().includes(mod.highlightPhoneme.toLowerCase())
          );
          if (missingIdx === -1) missingIdx = w.syllables.length - 1;

          const correct = w.syllables[missingIdx];

          // Pick 2 distractors that are different from correct
          const distractors = distractorPool
            .filter((d) => d.toLowerCase() !== correct.toLowerCase())
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

          const options = [correct, ...distractors].sort(() => Math.random() - 0.5);

          list.push({
            id: `${w.id}-missing`,
            module: mod,
            word: w,
            missingIndex: missingIdx,
            correctSyllable: correct,
            options,
          });
        }
      });
    });

    return list.sort(() => Math.random() - 0.5);
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const currentQ = questions[currentIndex % questions.length];

  const formatText = (text: string) => {
    return isUppercase ? text.toUpperCase() : text.toLowerCase();
  };

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(opt);

    if (opt.toLowerCase() === currentQ.correctSyllable.toLowerCase()) {
      playSfx('correct');
      onEarnStar();
      setCompletedCount((c) => c + 1);

      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.65 },
        });
      } catch {
        // ignore
      }

      setTimeout(() => {
        speakWord(`Muito bem! ${currentQ.word.word}!`);
      }, 300);
    } else {
      playSfx('wrong');
      setTimeout(() => {
        speakWord(`Tenta outra vez! A palavra é ${currentQ.word.word}.`);
      }, 300);
    }
  };

  const handleNext = () => {
    playSfx('click');
    setSelectedOption(null);
    setCurrentIndex((prev) => prev + 1);
  };

  if (!currentQ) return null;

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption?.toLowerCase() === currentQ.correctSyllable.toLowerCase();

  return (
    <div className="max-w-2xl mx-auto my-6 px-4">
      {/* Top Banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-amber-800">
            {currentQ.module.title}
          </span>
          <span>·</span>
          <span>{currentQ.module.symbol}</span>
        </div>
        <div className="flex items-center gap-1 font-mono font-bold text-amber-700">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Completadas: {completedCount}</span>
        </div>
      </div>

      {/* Main Puzzle Card */}
      <div className="bg-white rounded-3xl border-2 border-amber-300 p-6 sm:p-8 shadow-md text-center">
        {/* Illustration */}
        <div className="my-2">
          <div
            onClick={() => {
              playSfx('pop');
              speakWord(currentQ.word.word);
            }}
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-6xl sm:text-7xl shadow-inner cursor-pointer hover:scale-105 transition-transform"
            title="Clica na imagem para ouvir a palavra!"
          >
            {currentQ.word.emoji}
          </div>
          <button
            onClick={() => speakWord(currentQ.word.word)}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-colors shadow-2xs"
          >
            <Volume2 className="w-4 h-4 text-amber-700" />
            <span>Ouvir a palavra completa</span>
          </button>
        </div>

        {/* Syllable Missing Card */}
        <div className="my-6">
          <p className="text-xs font-medium text-slate-500 mb-3">
            Descobre a sílaba secreta que falta nesta palavra:
          </p>

          <div className="inline-flex items-center gap-2 sm:gap-3 p-3 bg-amber-50/60 rounded-2xl border border-amber-200">
            {currentQ.word.syllables.map((syl, idx) => {
              const isMissingSlot = idx === currentQ.missingIndex;

              return (
                <div
                  key={idx}
                  className={`min-w-16 h-14 sm:min-w-20 sm:h-16 px-3 rounded-2xl border-2 flex items-center justify-center text-xl sm:text-2xl font-heading font-black transition-all ${
                    isMissingSlot
                      ? isAnswered
                        ? isCorrect
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 scale-105 shadow-xs'
                          : 'bg-rose-100 border-rose-400 text-rose-950'
                        : 'border-dashed border-amber-400 bg-amber-100/60 text-amber-700 animate-pulse'
                      : 'bg-white border-slate-300 text-slate-800'
                  }`}
                >
                  {isMissingSlot
                    ? isAnswered
                      ? formatText(selectedOption || '')
                      : '❓'
                    : formatText(syl)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Options to Choose From */}
        <div className="my-6">
          <p className="text-xs font-semibold text-slate-600 mb-3 uppercase tracking-wider">
            Escolhe a sílaba correta:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {currentQ.options.map((opt, idx) => {
              const isChosen = selectedOption === opt;
              const isThisRight = opt.toLowerCase() === currentQ.correctSyllable.toLowerCase();

              let optStyle = 'bg-white border-2 border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/50';

              if (isAnswered) {
                if (isThisRight) {
                  optStyle = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 font-black';
                } else if (isChosen) {
                  optStyle = 'bg-rose-100 border-2 border-rose-400 text-rose-950';
                } else {
                  optStyle = 'bg-slate-50 border border-slate-200 text-slate-300';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt)}
                  className={`px-6 py-3.5 rounded-2xl text-2xl font-heading font-black shadow-xs transition-all active:scale-95 ${optStyle}`}
                >
                  {formatText(opt)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation & Next */}
        {isAnswered && (
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-left">
              <span className="text-xs font-bold text-slate-700 block">
                {isCorrect ? '✨ Parabéns!' : '💡 Dica do Mascote:'}
              </span>
              <span className="text-xs text-slate-500">
                {currentQ.word.word.toUpperCase()} divide-se em {currentQ.word.syllables.map(formatText).join(' - ')}.
              </span>
            </div>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-sm flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 animate-bounce"
            >
              <span>Seguinte</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
