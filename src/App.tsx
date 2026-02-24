import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ClassView from "./components/ClassView";
import { fetchBookContent } from "./services/bookService";
import { bookData as localBookData } from "./data/content";
import { BookContent } from "./data/types";
import { Book, Search, User, Menu, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [selectedClass, setSelectedClass] = useState<{ s: number; b: number; c: number } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [bookData, setBookData] = useState<BookContent | null>(null);
  const [loading, setLoading] = useState(true);

  const [dataSource, setDataSource] = useState<"supabase" | "local" | null>(null);

  useEffect(() => {
    async function loadData() {
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Timeout")), 5000)
      );

      try {
        const data = await Promise.race([
          fetchBookContent(),
          timeoutPromise
        ]) as BookContent | null;

        if (data && data.series && data.series.length > 0) {
          setBookData(data);
          setDataSource("supabase");
        } else {
          throw new Error("Empty data");
        }
      } catch (error) {
        console.warn("Using local fallback due to:", error);
        setBookData(localBookData);
        setDataSource("local");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSelectClass = (s: number, b: number, c: number) => {
    setSelectedClass({ s, b, c });
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const currentAula = selectedClass && bookData
    ? bookData.series[selectedClass.s].bimestres[selectedClass.b].classes[selectedClass.c]
    : null;

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-bg">
        <Loader2 className="animate-spin opacity-20" size={48} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-ink text-bg p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Mobile Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-30 lg:hidden"
            />
            
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed lg:relative z-40 h-full"
            >
              <Sidebar 
                onSelectClass={handleSelectClass} 
                selectedClass={selectedClass} 
                bookData={bookData}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col min-w-0 h-full">
        {/* Top Header */}
        <header className="h-16 border-b border-line/10 flex items-center justify-between px-8 bg-bg/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:flex items-center justify-center p-2 hover:bg-ink/5 rounded-lg transition-colors"
              title={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
            >
              <Menu size={20} className="opacity-60" />
            </button>
            <Book size={20} className="opacity-40" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-40 truncate max-w-[200px] md:max-w-none">
              {currentAula ? `Série ${selectedClass?.s! + 1} / Bimestre ${selectedClass?.b! + 1}` : "Início"}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-ink/5 border border-ink/5">
              <div className={`w-1.5 h-1.5 rounded-full ${dataSource === "supabase" ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                {dataSource === "supabase" ? "Nuvem" : "Local"}
              </span>
            </div>
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" />
              <input 
                type="text" 
                placeholder="Buscar conteúdo..." 
                className="bg-ink/5 border-none rounded-full py-1.5 pl-10 pr-4 text-xs focus:ring-1 focus:ring-ink/20 w-64"
              />
            </div>
            <User size={20} className="opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto scroll-smooth">
          {currentAula ? (
            <ClassView aula={currentAula} />
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <h1 className="text-7xl font-serif font-bold tracking-tighter">Filosofia para o Ensino Médio</h1>
                <p className="text-xl font-serif italic opacity-60 max-w-2xl mx-auto">
                  Conectando o pensamento filosófico clássico, moderno e contemporâneo com a realidade juvenil brasileira.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {bookData?.series.map((serie, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-line/5 shadow-sm hover:shadow-md transition-all group">
                    <span className="text-4xl font-serif font-bold opacity-10 group-hover:opacity-100 transition-opacity">{serie.number}ª</span>
                    <h3 className="text-lg font-bold mt-4">Série</h3>
                    <p className="text-xs opacity-50 mt-2">Clique no menu lateral para acessar as aulas desta série.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
