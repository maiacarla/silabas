import React from 'react';
import { X, Printer, Download, BookOpen, Scissors, Sparkles, ExternalLink } from 'lucide-react';
import { playSfx } from '../utils/audio';

interface PdfPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfPrintModal: React.FC<PdfPrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const pdfUrl = `${baseUrl}assets/aistudio/grafemas___casos_de_leitura_desdobra_veis_0079b7ea.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl border-2 border-amber-300 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-amber-100 border-b border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-amber-950 font-bold shadow-xs">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-800">
                Caderno Original de Desdobráveis (1º Ano)
              </h3>
              <p className="text-xs text-amber-800">
                Grafemas e Casos de Leitura Desdobráveis · 48 Páginas para Imprimir e Montar
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

        {/* Instructions strip */}
        <div className="bg-amber-50 px-6 py-3 border-b border-amber-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-amber-900 flex items-center gap-1">
              <Scissors className="w-4 h-4 text-amber-600" />
              <span>Como fazer os desdobráveis em papel:</span>
            </span>
            <span>1. Imprime</span>
            <span>·</span>
            <span>2. Pinta</span>
            <span>·</span>
            <span>3. Recorta pelo tracejado</span>
            <span>·</span>
            <span>4. Dobra e cola a aba</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir em Nova Aba</span>
            </a>
            <a
              href={pdfUrl}
              download="desdobraveis_1ano_alfabetizacao.pdf"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descarregar</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 min-h-[450px] p-4 bg-slate-100 flex flex-col items-center justify-center">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Caderno de Desdobráveis"
            className="w-full h-full min-h-[460px] rounded-2xl border border-slate-300 bg-white shadow-xs"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Eliana Ernesto · Português 1º Ano · Desdobráveis de A a Z + Casos de Leitura</span>
          <button
            onClick={() => {
              playSfx('click');
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
