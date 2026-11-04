import React, { useState } from 'react';
import { Volume2, Scissors, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Palette, RefreshCw } from 'lucide-react';
import { LiteracyModule, LiteracyWord } from '../data/curriculum';
import { playSfx, speakWord } from '../utils/audio';

interface FoldableCardProps {
  module: LiteracyModule;
  isUppercase: boolean;
  onWordComplete?: () => void;
  onEarnStar?: () => void;
}

export const FoldableCard: React.FC<FoldableCardProps> = ({
  module,
  isUppercase,
  onEarnStar,
}) => {
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const [highlightedWords, setHighlightedWords] = useState<Set<string>>(new Set());
  const [activeMarkerColor, setActiveMarkerColor] = useState<string>(module.markerColorHex);
  const [hasRewardedAll, setHasRewardedAll] = useState<boolean>(false);

  // Format text based on uppercase toggle
  const formatText = (text: string) => {
    return isUppercase ? text.toUpperCase() : text.toLowerCase();
  };

  const handleToggleFold = () => {
    playSfx('fold');
    setIsFolded((prev) => !prev);
  };

  const handleWordClick = (wordObj: LiteracyWord) => {
    playSfx('pop');
    speakWord(wordObj.word);

    // Toggle highlight
    setHighlightedWords((prev) => {
      const next = new Set(prev);
      if (next.has(wordObj.id)) {
        next.delete(wordObj.id);
      } else {
        next.add(wordObj.id);
        // If completed all words on the sheet
        if (next.size === module.words.length && !hasRewardedAll) {
          setHasRewardedAll(true);
          playSfx('star');
          if (onEarnStar) onEarnStar();
        }
      }
      return next;
    });
  };

  const handleHighlightAll = () => {
    playSfx('star');
    const allIds = new Set(module.words.map((w) => w.id));
    setHighlightedWords(allIds);
    if (!hasRewardedAll) {
      setHasRewardedAll(true);
      if (onEarnStar) onEarnStar();
    }
  };

  const handleResetHighlights = () => {
    playSfx('click');
    setHighlightedWords(new Set());
    setHasRewardedAll(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-white rounded-3xl border-2 border-amber-300 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Top Banner: Folding Controls & Activity Badge */}
      <div className="bg-amber-100/70 border-b border-amber-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-amber-900 font-semibold">
          <Scissors className="w-4 h-4 text-amber-600" />
          <span>Desdobrável Educativo · Pág. {module.pageRef}</span>
          <span className="hidden sm:inline text-amber-600 font-normal">| {module.subtitle}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleFold}
            className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold transition-transform active:scale-95 flex items-center gap-1 shadow-2xs"
          >
            {isFolded ? (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Desdobrar Folha</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Dobrar / Fechar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Foldable Content Container */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-amber-50/30 to-white">
        {/* CUTOUT ARCH & MASCOT HEADER (Exactly matching the printable desdobrável template) */}
        <div className="relative border-2 border-dashed border-slate-300 rounded-t-3xl pt-6 pb-4 px-4 bg-white shadow-2xs mb-4 text-center">
          {/* Scissors indicator tag */}
          <div className="absolute -top-3 left-6 bg-white px-2 py-0.5 border border-dashed border-slate-400 rounded-full text-[10px] text-slate-500 font-mono flex items-center gap-1">
            <Scissors className="w-3 h-3 text-slate-400" />
            <span>recorta pelo tracejado</span>
          </div>

          <div className="absolute top-2 right-4 text-[10px] text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded font-mono">
            aba para colar
          </div>

          {/* Mascot Portrait & Target Letter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 my-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-amber-100 flex items-center justify-center text-5xl sm:text-6xl shadow-inner border border-amber-200 select-none transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => {
                playSfx('pop');
                speakWord(module.mascot.name);
              }}
              title="Clica para ouvir o mascote!"
            >
              {module.mascot.emoji}
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className={`text-4xl sm:text-5xl font-heading font-black ${module.textColor}`}>
                  {formatText(module.symbol)}
                </span>
                <span className="text-xl sm:text-2xl font-heading font-bold text-slate-700">
                  {formatText(module.mascot.animal)}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                "{module.mascot.quote}"
              </p>
              <button
                onClick={() => speakWord(module.ruleExplanation)}
                className="mt-2 text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 bg-amber-100/80 hover:bg-amber-200/80 px-2.5 py-1 rounded-lg transition-colors inline-flex"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Ouvir a regra fonética</span>
              </button>
            </div>
          </div>

          {/* Fold guide line */}
          <div className="mt-4 pt-2 border-t-2 border-dashed border-amber-300/80 flex items-center justify-between text-[11px] text-amber-700 font-mono">
            <span>---- dobra aqui ----</span>
            <span className="font-sans font-medium text-slate-500">1º ciclo escolar</span>
            <span>---- dobra aqui ----</span>
          </div>
        </div>

        {/* FOLDED PREVIEW MODE: when folded, reveals the pocket view */}
        {isFolded ? (
          <div className="p-8 text-center bg-amber-50 rounded-2xl border border-amber-200/80 my-2">
            <p className="text-sm font-semibold text-slate-700">
              O desdobrável está dobrado e guardado!
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Clica no botão "Desdobrar Folha" acima para abrir e explorar as 9 palavras e desenhos.
            </p>
            <button
              onClick={handleToggleFold}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs shadow-xs transition-transform active:scale-95 inline-flex items-center gap-1.5"
            >
              <ChevronDown className="w-4 h-4" />
              <span>Abrir Desdobrável</span>
            </button>
          </div>
        ) : (
          /* UNFOLDED 3x3 WORD GRID & PEDAGOGICAL ACTIVITIES */
          <>
            {/* Pedagogical Toolbar: Interactive Magic Crayon */}
            <div className="my-3 p-3 bg-amber-50/70 rounded-2xl border border-amber-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-amber-600" />
                <span className="font-medium text-slate-700">
                  Rodeia o som <strong className={module.textColor}>"{module.highlightPhoneme}"</strong> tocando em cada palavra:
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleHighlightAll}
                  className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 hover:bg-amber-100 text-amber-900 font-semibold transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Pintar Todos</span>
                </button>
                <button
                  onClick={handleResetHighlights}
                  title="Limpar destaques"
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3x3 GRID OF ILLUSTRATED WORDS (Exact layout from the printable craft) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-4">
              {module.words.map((wordObj) => {
                const isSelected = highlightedWords.has(wordObj.id);
                return (
                  <div
                    key={wordObj.id}
                    onClick={() => handleWordClick(wordObj)}
                    className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer select-none group ${
                      isSelected
                        ? 'bg-amber-100/50 border-amber-400 shadow-sm scale-[1.02]'
                        : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/20'
                    }`}
                  >
                    {/* Marked Stamp Indicator */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 text-amber-500">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}

                    {/* Emoji Illustration */}
                    <div className="text-3xl sm:text-4xl mb-1.5 group-hover:scale-110 transition-transform">
                      {wordObj.emoji}
                    </div>

                    {/* Word Label with Syllables and Grapheme Highlighting */}
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-bold text-slate-800 tracking-wide">
                        {wordObj.word.split('').map((char, cIdx) => {
                          const lowerWord = wordObj.word.toLowerCase();
                          const lowerHighlight = wordObj.highlight.toLowerCase();
                          const highlightStart = lowerWord.indexOf(lowerHighlight);
                          const isPartOfHighlight =
                            highlightStart !== -1 &&
                            cIdx >= highlightStart &&
                            cIdx < highlightStart + lowerHighlight.length;

                          return (
                            <span
                              key={cIdx}
                              className={`transition-colors ${
                                isPartOfHighlight
                                  ? isSelected
                                    ? 'bg-amber-300/80 text-amber-950 font-black px-0.5 rounded'
                                    : `${module.textColor} font-black underline decoration-2 decoration-amber-400`
                                  : 'text-slate-700'
                              }`}
                            >
                              {formatText(char)}
                            </span>
                          );
                        })}
                      </span>

                      {/* Syllable breakup tooltip / text */}
                      <span className="block text-[10px] text-slate-400 font-mono mt-0.5">
                        {wordObj.syllables.map(formatText).join(' · ')}
                      </span>
                    </div>

                    {/* Audio pronunciation trigger */}
                    <div className="mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Card: Cursive / Handwriting & Tracing area */}
            <div className="mt-4 border-2 border-dashed border-slate-300 rounded-b-2xl p-4 bg-slate-50/80">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                    Escrita Cursiva & Manuscrita
                  </span>
                  <div className="text-2xl sm:text-3xl font-handwriting text-slate-800 mt-1">
                    {module.words[0].word} · {module.symbol}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playSfx('fanfare');
                      speakWord(`Muito bem! Completaste o desdobrável de ${module.title}!`);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-900" />
                    <span>Concluir Atividade</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Progress Footer */}
      <div className="bg-slate-50 px-4 sm:px-6 py-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-medium">
          Palavras destacadas: {highlightedWords.size} de {module.words.length}
        </span>
        <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${(highlightedWords.size / module.words.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
