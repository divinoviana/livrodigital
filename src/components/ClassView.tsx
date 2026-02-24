import { Class } from "../data/types";
import { Target, Lightbulb, ClipboardList, MessageSquare, Clock, Sparkles, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { generateDeepDive } from "../services/aiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ClassViewProps {
  aula: Class;
  aiContent: string | null;
  onUpdateAiContent: (content: string) => void;
}

export default function ClassView({ aula, aiContent, onUpdateAiContent }: ClassViewProps) {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isAiExpanded, setIsAiExpanded] = useState(false);

  // Reset expansion when class changes
  useEffect(() => {
    setIsAiExpanded(false);
    setIsAiLoading(false);
  }, [aula.id]);

  const handleDeepDive = async () => {
    if (aiContent) {
      setIsAiExpanded(!isAiExpanded);
      return;
    }

    setIsAiLoading(true);
    setIsAiExpanded(true);
    try {
      const content = await generateDeepDive(aula.title, aula.theory.content);
      onUpdateAiContent(content || "Não foi possível gerar o conteúdo no momento.");
    } catch (error) {
      onUpdateAiContent("Erro ao conectar com a inteligência artificial. Verifique sua conexão ou chave de API.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <motion.div 
      key={aula.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8 space-y-12 pb-24"
    >
      <header className="space-y-4 border-b border-line/10 pb-8">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-50">
          <span>Aula {aula.class_number}</span>
        </div>
        <h2 className="text-5xl font-serif font-bold leading-tight">{aula.title}</h2>
      </header>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
          <Target size={18} className="text-ink/60" />
          <span>Objetivos de Aprendizagem</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aula.objectives.map((obj, idx) => (
            <li key={idx} className="bg-white/40 p-4 rounded-xl border border-line/5 text-sm leading-relaxed">
              {obj}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Lightbulb size={18} className="text-ink/60" />
            <span>Conteúdo Teórico</span>
          </div>
          
          <button
            onClick={handleDeepDive}
            disabled={isAiLoading}
            className="flex items-center gap-2 px-4 py-2 bg-ink text-bg rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isAiLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Sparkles size={14} />
            )}
            {aiContent ? (isAiExpanded ? "Recolher IA" : "Ver Aprofundamento IA") : "Aprofundar com IA"}
          </button>
        </div>

        <AnimatePresence>
          {isAiExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-ink/5 border border-ink/10 rounded-2xl p-8 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={48} />
                </div>
                
                <div className="flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  <Sparkles size={12} />
                  <span>Aprofundamento Gerado por IA</span>
                </div>

                {isAiLoading ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <Loader2 size={32} className="animate-spin opacity-20" />
                    <p className="text-sm font-serif italic opacity-40">Expandindo horizontes filosóficos...</p>
                  </div>
                ) : (
                  <div className="markdown-body prose prose-slate max-w-none prose-headings:font-serif prose-p:text-base prose-p:leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {aiContent || ""}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="prose prose-slate max-w-none">
          <h3 className="text-2xl font-serif italic mb-4">{aula.theory.title}</h3>
          <p className="text-lg leading-relaxed opacity-80 mb-8">{aula.theory.content}</p>
          
          <div className="grid grid-cols-1 gap-8">
            {aula.theory.sections && aula.theory.sections.length > 0 && aula.theory.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest border-l-2 border-ink pl-4">{section.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="bg-ink text-bg p-4 rounded-lg text-sm font-mono tracking-tight">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {aula.methodology.steps.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Clock size={18} className="text-ink/60" />
            <span>Metodologia</span>
          </div>
          <div className="space-y-2">
            {aula.methodology.steps.map((step, idx) => (
              <div key={idx} className="data-row flex items-center gap-6 p-4 rounded-lg">
                <span className="data-value w-16 opacity-50">{step.duration}</span>
                <span className="font-serif italic w-32">{step.title}</span>
                <span className="text-sm flex-1">{step.description}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {aula.activities.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <ClipboardList size={18} className="text-ink/60" />
            <span>Atividades Práticas</span>
          </div>
          <div className="space-y-8">
            {aula.activities.map((activity, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-line/5 space-y-6">
                <h4 className="text-xl font-bold">{activity.title}</h4>
                {activity.description && <p className="text-sm opacity-70">{activity.description}</p>}
                
                {activity.questions && (
                  <ol className="list-decimal list-inside space-y-3">
                    {activity.questions.map((q, qIdx) => (
                      <li key={qIdx} className="text-sm font-medium border-b border-line/5 pb-2">{q}</li>
                    ))}
                  </ol>
                )}

                {activity.table && (
                  <div className="overflow-x-auto border border-line/10 rounded-xl">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-ink/5">
                        <tr>
                          {activity.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-4 col-header">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line/10">
                        {activity.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {aula.reflectionQuestions.length > 0 && (
        <section className="bg-ink text-bg p-12 rounded-[2rem] space-y-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-60">
            <MessageSquare size={18} />
            <span>Questões para Reflexão</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {aula.reflectionQuestions.map((q, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="font-serif italic text-3xl opacity-20">“</span>
                <p className="text-xl font-serif leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
