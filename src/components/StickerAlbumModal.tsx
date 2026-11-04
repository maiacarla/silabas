import React from 'react';
import { X, Sparkles, Lock, Trophy, Volume2 } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculum';
import { playSfx, speakWord } from '../utils/audio';

interface StickerAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  stars: number;
}

export const StickerAlbumModal: React.FC<StickerAlbumModalProps> = ({
  isOpen,
  onClose,
  stars,
}) => {
  if (!isOpen) return null;

  // Each module has a mascot sticker with an unlock threshold (e.g. 0, 2, 4, 6, 8, etc.)
  const stickers = CURRICULUM_DATA.map((mod, index) => {
    const requiredStars = index * 2;
    const isUnlocked = stars >= requiredStars;
    return {
      id: mod.id,
      name: mod.mascot.name,
      animal: mod.mascot.animal,
      emoji: mod.mascot.emoji,
      quote: mod.mascot.quote,
      symbol: mod.symbol,
      requiredStars,
      isUnlocked,
    };
  });

  const unlockedCount = stickers.filter((s) => s.isUnlocked).length;

  const handleStickerClick = (sticker: typeof stickers[0]) => {
    if (sticker.isUnlocked) {
      playSfx('star');
      speakWord(`Olá! Eu sou o ${sticker.name}! ${sticker.quote}`);
    } else {
      playSfx('wrong');
      speakWord(`Precisas de ${sticker.requiredStars} estrelas para desbloquear este cromo!`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl border-2 border-amber-300 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-200 via-amber-100 to-orange-100 border-b border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center text-amber-950 shadow-xs">
              <Trophy className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-800">
                Álbum de Cromos dos Mascotes
              </h3>
              <p className="text-xs text-amber-900">
                Ganha estrelas a ler e desdobrar para colecionar todos os amigos do 1º Ano!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSfx('click');
              onClose();
            }}
            className="w-9 h-9 rounded-xl hover:bg-amber-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Ribbon */}
        <div className="bg-amber-50 px-6 py-3 border-b border-amber-200 flex items-center justify-between text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>As tuas estrelas: <strong className="text-amber-800 font-mono text-sm">{stars}</strong></span>
          </div>
          <div>
            Colecionados: <strong className="text-amber-800 font-mono text-sm">{unlockedCount}</strong> de {stickers.length}
          </div>
        </div>

        {/* Sticker Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stickers.map((stk) => (
              <div
                key={stk.id}
                onClick={() => handleStickerClick(stk)}
                className={`relative p-4 rounded-3xl border-2 transition-all cursor-pointer text-center select-none ${
                  stk.isUnlocked
                    ? 'bg-white border-amber-300 shadow-sm hover:scale-105 hover:border-amber-400'
                    : 'bg-slate-100 border-dashed border-slate-300 opacity-60 hover:opacity-80'
                }`}
              >
                {/* Sticker Emoji Avatar */}
                <div className="text-5xl my-2 flex items-center justify-center">
                  {stk.isUnlocked ? (
                    <span>{stk.emoji}</span>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                      <Lock className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Sticker Name & Case Symbol */}
                <div className="mt-2">
                  <span className="font-heading font-bold text-sm text-slate-800 block truncate">
                    {stk.isUnlocked ? stk.name : 'Bloqueado'}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700">
                    {stk.isUnlocked ? `Caso: ${stk.symbol}` : `Faltam ${stk.requiredStars} ⭐`}
                  </span>
                </div>

                {stk.isUnlocked && (
                  <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                    <Volume2 className="w-3 h-3 text-amber-600" />
                    <span>Toca para ouvir</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={() => {
              playSfx('click');
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs shadow-2xs transition-colors"
          >
            Continuar a Jogar
          </button>
        </div>
      </div>
    </div>
  );
};
