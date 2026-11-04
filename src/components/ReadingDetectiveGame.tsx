import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculum';
import { playSfx, speakWord } from '../utils/audio';

interface ReadingDetectiveGameProps {
  isUppercase: boolean;
  onEarnStar: () => void;
}

interface DetectiveQuestion {
  id: string;
  categoryTitle: string;
  categorySymbol: string;
  mascotEmoji: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ReadingDetectiveGame: React.FC<ReadingDetectiveGameProps> = ({
  isUppercase,
  onEarnStar,
}) => {
  // Aggregate all challenges from curriculum
  const allQuestions: DetectiveQuestion[] = React.useMemo(() => {
    const list: DetectiveQuestion[] = [];
    CURRICULUM_DATA.forEach((mod) => {
      if (mod.detectiveChallenges && mod.detectiveChallenges.length > 0) {
        mod.detectiveChallenges.forEach((ch, idx) => {
          list.push({
            id: `${mod.id}-q-${idx}`,
            categoryTitle: mod.title,
            categorySymbol: mod.symbol,
            mascotEmoji: mod.mascot.emoji,
            question: ch.question,
            options: ch.options,
            correctIndex: ch.correctIndex,
            explanation: ch.explanation,
          });
        });
      }
    });
    return list.sort(() => Math.random() - 0.5);
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const currentQ = allQuestions[currentIndex % allQuestions.length];

  const formatText = (text: string) => {
    return isUppercase ? text.toUpperCase() : text;
  };

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (index === currentQ.correctIndex) {
      playSfx('correct');
      setStreak((prev) => prev + 1);
      setScore((prev) => prev + 10);
      onEarnStar();

      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }

      setTimeout(() => {
        speakWord('Muito bem! ' + currentQ.explanation);
      }, 250);
    } else {
      playSfx('wrong');
      setStreak(0);
      setTimeout(() => {
        speakWord('Não faz mal! ' + currentQ.explanation);
      }, 250);
    }
  };

  const handleNext = () => {
    playSfx('click');
    setSelectedOption(null);
    setCurrentIndex((prev) => prev + 1);
  };

  if (!currentQ) return null;

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div className="max-w-2xl mx-auto my-6 px-4">
      {/* Top Stats Banner */}
      <div className="flex items-center justify-between text-xs text-slate-600 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-amber-800">
            {currentQ.categoryTitle}
          </span>
          <span>·</span>
          <span>Regra: {currentQ.categorySymbol}</span>
        </div>
        <div className="flex items-center gap-3 font-mono font-bold">
          {streak > 1 && (
            <span className="text-orange-600 flex items-center gap-1">
              🔥 {streak} seguidos!
            </span>
          )}
          <span className="text-amber-700 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Pontos: {score}
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border-2 border-amber-300 p-6 sm:p-8 shadow-md">
        {/* Detective Mascot Badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-4xl shadow-inner border border-amber-200">
            {currentQ.mascotEmoji}
          </div>
          <div>
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Desafio do Detetive
            </div>
            <div className="text-sm font-bold text-slate-700">
              Caso: {currentQ.categorySymbol}
            </div>
          </div>
        </div>

        {/* Question Text & Sound */}
        <div className="text-center my-4">
          <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 leading-snug">
            {formatText(currentQ.question)}
          </h2>
          <button
            onClick={() => speakWord(currentQ.question)}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-colors shadow-2xs"
          >
            <Volume2 className="w-4 h-4 text-amber-700" />
            <span>Ouvir a pergunta</span>
          </button>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {currentQ.options.map((opt, idx) => {
            const isThisSelected = selectedOption === idx;
            const isThisCorrect = idx === currentQ.correctIndex;

            let buttonStyle = 'bg-white border-2 border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/40';

            if (isAnswered) {
              if (isThisCorrect) {
                buttonStyle = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 font-black shadow-xs';
              } else if (isThisSelected) {
                buttonStyle = 'bg-rose-100 border-2 border-rose-400 text-rose-950';
              } else {
                buttonStyle = 'bg-slate-50 border border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`p-4 rounded-2xl text-base sm:text-lg font-heading font-bold transition-all text-left flex items-center justify-between shadow-2xs active:scale-98 ${buttonStyle}`}
              >
                <span>{formatText(opt)}</span>
                {isAnswered && (
                  <span>
                    {isThisCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : isThisSelected ? (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Callout when answered */}
        {isAnswered && (
          <div
            className={`p-4 rounded-2xl border text-xs sm:text-sm my-4 transition-all animate-fadeIn ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex items-start gap-2">
              <ShieldCheck className={`w-5 h-5 shrink-0 ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`} />
              <div>
                <strong className="block font-semibold mb-0.5">
                  {isCorrect ? 'Excelente dedução!' : 'Aprende com a regra:'}
                </strong>
                <span>{currentQ.explanation}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Next Button */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
          {isAnswered && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-sm flex items-center gap-2 shadow-xs transition-transform active:scale-95 animate-bounce"
            >
              <span>Próximo Caso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
