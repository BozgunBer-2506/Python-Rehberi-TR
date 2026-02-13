import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronUp, Search, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { allSections } from './data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = allSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (section) => {
    setSelectedSection(section);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainElement = document.querySelector('main');
    if (mainElement) mainElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex < allSections.length - 1) {
      handlePageChange(allSections[currentIndex + 1]);
    }
  };

  const handlePrevPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex > 0) {
      handlePageChange(allSections[currentIndex - 1]);
    }
  };

  const PythonLogo = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.05 4C18.1 4 18.35 6.55 18.35 6.55L18.37 9.2H24.25V10.05H16.03C16.03 10.05 12 10.05 12 16.03C12 22 15.15 22.15 15.15 22.15H17.2V19.25C17.2 19.25 17.15 15.6 20.8 15.6H28.95C28.95 15.6 32.55 15.45 32.55 11.9V6.75C32.55 6.75 32.75 4 24.05 4Z" fill="#3776AB"/>
      <path d="M23.95 44C29.9 44 29.65 41.45 29.65 41.45L29.63 38.8H23.75V37.95H31.97C31.97 37.95 36 37.95 36 31.97C36 26 32.85 25.85 32.85 25.85H30.8V28.75C30.8 28.75 30.85 32.4 27.2 32.4H19.05C19.05 32.4 15.45 32.55 15.45 36.1V41.25C15.45 41.25 15.25 44 23.95 44Z" fill="#FFD43B"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* MOBILE HEADER */}
      <header className="lg:hidden bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => handlePageChange(null)}>
          <div className="w-8 h-8"><PythonLogo /></div>
          <span className="font-black text-white text-xs tracking-tighter uppercase">PYTHON TÜRKÇE</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#ffd43b] text-xs font-black uppercase">
          {isSidebarOpen ? 'KAPAT' : 'MENÜ'}
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className={`fixed lg:sticky top-0 h-screen w-80 bg-[#1e293b] border-r border-slate-700 transform transition-transform duration-300 z-40 flex flex-col shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
          
          <div className="hidden lg:flex flex-col items-center justify-center mb-8 w-full cursor-pointer" onClick={() => handlePageChange(null)}>
            <div className="w-16 h-16 mb-4 drop-shadow-2xl"><PythonLogo /></div>
            <div className="text-center">
              <h1 className="text-2xl font-black text-white tracking-[0.2em] mb-1 uppercase leading-none">PYTHON</h1>
              <span className="text-[10px] text-[#ffd43b] font-bold tracking-[0.3em] uppercase block">REHBERİ</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-3 block border-t border-slate-700/30 pt-2 italic text-center">
                Yavuz Barış Özgün
              </span>
            </div>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Konu ara..." 
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#3776ab] text-white transition-all" 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
            {filteredSections.map((section) => (
              <button 
                key={section.id} 
                onClick={() => handlePageChange(section)} 
                className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center justify-between transition-all group ${selectedSection?.id === section.id ? 'bg-[#3776ab] text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                <span className="text-[14px] font-bold uppercase tracking-tight leading-tight">
                   {String(section.id).padStart(2, '0')} - {section.title}
                </span>
                <ChevronRight size={16} className={`${selectedSection?.id === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'} transition-all`} />
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto h-screen bg-[#0f172a] custom-scrollbar relative">
        {selectedSection ? (
          <div className="p-6 lg:p-12 max-w-4xl mx-auto w-full pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <article className="prose prose-invert prose-slate max-w-none">
              <div className="mb-6 text-[#ffd43b] font-bold tracking-widest text-xs uppercase border-l-4 border-[#3776ab] pl-4">
                BÖLÜM {String(selectedSection.id).padStart(2, '0')}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">
                {selectedSection.title}
              </h1>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="w-full overflow-hidden rounded-2xl my-6 border border-slate-800 shadow-2xl">
                        <SyntaxHighlighter 
                          style={atomDark} 
                          language={match[1]} 
                          PreTag="div" 
                          customStyle={{ margin: 0, padding: '24px', background: '#0d1117', fontSize: '14px' }} 
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="bg-slate-800 text-[#ffd43b] px-2 py-0.5 rounded text-[14px] font-mono border border-slate-700/50" {...props}>{children}</code>
                    );
                  },
                  h2: ({children}) => <h2 className="text-2xl font-black text-white mt-12 mb-6 border-b border-slate-800 pb-3 uppercase tracking-tight">{children}</h2>,
                  p: ({children}) => <p className="text-slate-300 leading-relaxed mb-6 text-lg">{children}</p>,
                  
                  // ŞIKLAR İÇİN SADE TASARIM (Sadece üzerine gelince parlar)
                  li: ({children}) => (
                    <li className="text-slate-300 mb-3 text-lg bg-slate-800/30 px-4 py-2 rounded-lg border border-slate-700/50 hover:border-[#3776ab] hover:bg-slate-800/60 transition-all list-none select-none">
                      {children}
                    </li>
                  ),

                  // TEST CEVABI İÇİN AÇILIR KUTU
                  details: ({children}) => (
                    <details className="group bg-[#1e293b]/50 border border-slate-700 rounded-2xl mb-8 overflow-hidden transition-all duration-300 open:bg-[#1e293b]">
                      {children}
                    </details>
                  ),
                  summary: ({children}) => (
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-bold text-[#ffd43b] hover:bg-slate-700/50 list-none transition-colors">
                      <div className="flex items-center gap-3 italic font-black uppercase tracking-widest text-xs">
                        <GraduationCap size={18} />
                        <span>CEVABI GÖR</span>
                      </div>
                      <ChevronRight size={18} className="group-open:rotate-90 transition-transform duration-300" />
                    </summary>
                  ),
                  div: ({children, ...props}) => {
                    if (props.className === "answer-content") {
                      return <div className="px-6 py-4 bg-[#0f172a] text-emerald-400 font-bold border-t border-slate-700/50 italic">{children}</div>;
                    }
                    return <div {...props}>{children}</div>;
                  }
                }}
              >
                {selectedSection.content}
              </ReactMarkdown>
            </article>

            {/* NAVIGASYON */}
            <div className="mt-20 pt-10 border-t border-slate-800 flex justify-between items-center">
              <button 
                onClick={handlePrevPage}
                disabled={allSections.findIndex(s => s.id === selectedSection.id) === 0}
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#ffd43b] disabled:opacity-0 transition-all group"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Önceki
              </button>
              
              <button 
                onClick={handleNextPage}
                disabled={allSections.findIndex(s => s.id === selectedSection.id) === allSections.length - 1}
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#ffd43b] hover:scale-105 transition-all group"
              >
                Sonraki <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          /* ANASAYFA */
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 animate-in fade-in duration-700">
            <div className="w-32 h-32 lg:w-48 lg:h-48 mb-12 animate-bounce-slow"><PythonLogo /></div>
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none opacity-90">Hello Python</h2>
            <div className="bg-[#1e293b] border border-slate-700/50 px-12 py-10 rounded-[2.5rem] shadow-2xl max-w-2xl relative overflow-hidden text-center">
               <div className="absolute top-0 left-0 w-3 h-full bg-[#ffd43b]"></div>
               <p className="text-slate-100 text-2xl lg:text-4xl font-black tracking-tight mb-4 uppercase">Python Türkçe Rehberi</p>
               <p className="text-slate-400 text-base lg:text-lg font-medium opacity-80">
                 <span className="text-[#ffd43b] uppercase tracking-widest font-bold">Menüden</span> bir konu seç ve kodlamaya başla.
               </p>
            </div>
          </div>
        )}

        {selectedSection && (
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="fixed bottom-8 right-8 bg-[#3776ab] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 border border-white/10"
          >
            <ChevronUp size={24} strokeWidth={3} />
          </button>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3776ab66; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3776ab; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        summary::-webkit-details-marker { display: none; }
      `}} />
    </div>
  );
}

export default App;