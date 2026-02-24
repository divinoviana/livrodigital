import { BookContent } from "../data/types";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SidebarProps {
  onSelectClass: (serieIdx: number, bimestreIdx: number, classIdx: number) => void;
  selectedClass: { s: number; b: number; c: number } | null;
  bookData: BookContent | null;
}

export default function Sidebar({ onSelectClass, selectedClass, bookData }: SidebarProps) {
  const [expandedSeries, setExpandedSeries] = useState<number[]>([0]);
  const [expandedBimestres, setExpandedBimestres] = useState<string[]>([]);

  const toggleSerie = (idx: number) => {
    setExpandedSeries(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const toggleBimestre = (serieIdx: number, bimIdx: number) => {
    const id = `${serieIdx}-${bimIdx}`;
    setExpandedBimestres(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (!bookData) return null;

  return (
    <div className="w-80 h-full border-r border-line/10 overflow-y-auto bg-bg flex flex-col shadow-xl lg:shadow-none">
      <div className="p-6 border-b border-line/10">
        <h1 className="font-serif italic text-2xl font-bold">Filosofia</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-1">Livro Digital Interativo</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {bookData.series.map((serie, sIdx) => (
          <div key={sIdx} className="space-y-1">
            <button 
              onClick={() => toggleSerie(sIdx)}
              className="w-full flex items-center justify-between p-2 hover:bg-ink/5 rounded-lg transition-colors text-left"
            >
              <span className="font-bold text-sm">{serie.title}</span>
              {expandedSeries.includes(sIdx) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            
            <AnimatePresence>
              {expandedSeries.includes(sIdx) && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4 space-y-1"
                >
                  {serie.bimestres.map((bimestre, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <button 
                        onClick={() => toggleBimestre(sIdx, bIdx)}
                        className="w-full flex items-center justify-between p-2 hover:bg-ink/5 rounded-lg transition-colors text-left text-xs opacity-80"
                      >
                        <span className="font-medium">{bimestre.number}º Bimestre</span>
                        {expandedBimestres.includes(`${sIdx}-${bIdx}`) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </button>
                      
                      <AnimatePresence>
                        {expandedBimestres.includes(`${sIdx}-${bIdx}`) && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 space-y-1"
                          >
                            {bimestre.classes.map((aula, cIdx) => (
                              <button
                                key={cIdx}
                                onClick={() => onSelectClass(sIdx, bIdx, cIdx)}
                                className={`w-full flex items-start gap-2 p-2 rounded-lg transition-all text-left text-xs ${
                                  selectedClass?.s === sIdx && selectedClass?.b === bIdx && selectedClass?.c === cIdx
                                    ? "bg-ink text-bg shadow-lg"
                                    : "hover:bg-ink/5 opacity-70 hover:opacity-100"
                                }`}
                              >
                                <BookOpen size={14} className="mt-0.5 shrink-0" />
                                <span>Aula {aula.class_number}: {aula.title}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
      
      <div className="p-6 border-t border-line/20 bg-ink text-bg">
        <p className="text-[10px] uppercase tracking-widest opacity-50">Autor</p>
        <p className="text-xs font-serif italic mt-1">{bookData.author}</p>
      </div>
    </div>
  );
}
