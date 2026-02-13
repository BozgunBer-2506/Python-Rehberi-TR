import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ChevronUp, Search, GraduationCap, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { allSections } from './data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedSection, setSelectedSection] = useState(() => {
    const saved = localStorage.getItem('lastSectionId');
    return saved ? allSections.find(s => String(s.id) === saved) : null;
  });

  const filteredSections = allSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (section) => {
    setSelectedSection(section);
    setIsSidebarOpen(false);
    if (section) {
      localStorage.setItem('lastSectionId', String(section.id));
    } else {
      localStorage.removeItem('lastSectionId');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex < allSections.length - 1) handlePageChange(allSections[currentIndex + 1]);
  };

  const handlePrevPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex > 0) handlePageChange(allSections[currentIndex - 1]);
  };

  const PythonLogo = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.05 4C18.1 4 18.35 6.55 18.35 6.55L18.37 9.2H24.25V10.05H16.03C16.03 10.05 12 10.05 12 16.03C12 22 15.15 22.15 15.15 22.15H17.2V19.25C17.2 19.25 17.15 15.6 20.8 15.6H28.95C28.95 15.6 32.55 15.45 32.55 11.9V6.75C32.55 6.75 32.75 4 24.05 4Z" fill="#3776AB"/>
      <path d="M23.95 44C29.9 44 29.65 41.45 29.65 41.45L29.63 38.8H23.75V37.95H31.97C31.97 37.95 36 37.95 36 31.97C36 26 32.85 25.85 32.85 25.85H30.8V28.75C30.8 28.75 30.85 32.4 27.2 32.4H19.05C19.05 32.4 15.45 32.55 15.45 36.1V41.25C15.45 41.25 15.25 44 23.95 44Z" fill="#FFD43B"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col lg:flex-row overflow-hidden font-sans">
      <header className="lg:hidden bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => handlePageChange(null)}>
          <div className="w-8 h-8"><PythonLogo /></div>
          <span className="font-black text-white text-xs tracking-tighter uppercase">PYTHON TÜRKÇE</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#ffd43b] text-xs font-black uppercase border border-[#ffd43b]/30 px-3 py-1 rounded">
          {isSidebarOpen ? 'KAPAT' : 'MENÜ'}
        </button>
      </header>

      <aside className={`fixed lg:sticky top-0 h-screen w-80 bg-[#1e293b] border-r border-slate-700 transform transition-transform duration-300 z-40 flex flex-col shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="hidden lg:flex flex-col items-center justify-center mb-8 w-full cursor-pointer" onClick={() => handlePageChange(null)}>
            <div className="w-16 h-16 mb-4"><PythonLogo /></div>
            <div className="text-center">
              <h1 className="text-2xl font-black text-white tracking-[0.2em] mb-1 uppercase leading-none">PYTHON</h1>
              <span className="text-[10px] text-[#ffd43b] font-bold tracking-[0.3em] uppercase block">REHBERİ</span>
            </div>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Konu ara..." className="w-full bg-[#0f172a] border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#3776ab] text-white" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
            {filteredSections.map((section) => (
              <button key={section.id} onClick={() => handlePageChange(section)} className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center justify-between transition-all group ${selectedSection?.id === section.id ? 'bg-[#3776ab] text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                <span className="text-[14px] font-bold uppercase tracking-tight leading-tight">{String(section.id).padStart(2, '0')} - {section.title}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-700/50 flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase italic text-center leading-tight">YAVUZ BARIŞ ÖZGÜN</p>
            <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ffd43b] hover:text-white transition-colors">
              <Github size={18} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">github.com/BozgunBer-2506</span>
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto h-screen bg-[#0f172a] relative">
        {selectedSection ? (
          <div className="p-5 lg:p-12 max-w-4xl mx-auto w-full pb-32">
            <article className="prose prose-invert prose-slate max-w-none">
              <div className="mb-4 text-[#ffd43b] font-bold tracking-widest text-[10px] uppercase border-l-4 border-[#3776ab] pl-3">BÖLÜM {String(selectedSection.id).padStart(2, '0')}</div>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">{selectedSection.title}</h1>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="w-full overflow-hidden rounded-xl my-4 border border-slate-800">
                        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" customStyle={{ margin: 0, padding: '16px', background: '#0d1117', fontSize: '13px' }} {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="bg-slate-800 text-[#ffd43b] px-1.5 py-0.5 rounded text-[13px] font-mono border border-slate-700/50" {...props}>{children}</code>
                    );
                  },
                  h2: ({children}) => <h2 className="text-2xl lg:text-3xl font-black text-white mt-10 mb-4 border-b border-slate-800 pb-2 uppercase">{children}</h2>,
                  p: ({children}) => <p className="text-slate-300 leading-relaxed mb-6 text-2xl lg:text-xl">{children}</p>,
                  li: ({children}) => <li className="text-slate-300 mb-4 text-2xl lg:text-xl bg-slate-800/30 px-5 py-4 rounded-xl border border-slate-700/50 list-none">{children}</li>,
                  details: ({children}) => <details className="group bg-[#1e293b]/50 border border-slate-700 rounded-xl mb-6 overflow-hidden">{children}</details>,
                  summary: ({children}) => (
                    <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-bold text-[#ffd43b] list-none">
                      <div className="flex items-center gap-2 text-[11px] font-black uppercase"><GraduationCap size={16} /><span>CEVABI GÖR</span></div>
                      <ChevronRight size={16} className="group-open:rotate-90 transition-transform" />
                    </summary>
                  ),
                  div: ({children, ...props}) => {
                    if (props.className === "answer-content") return <div className="px-4 py-3 bg-[#0f172a] text-emerald-400 font-bold border-t border-slate-700/50 italic text-2xl lg:text-lg">{children}</div>;
                    return <div {...props}>{children}</div>;
                  }
                }}
              >
                {selectedSection.content}
              </ReactMarkdown>
            </article>

            <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
              <button onClick={handlePrevPage} disabled={allSections.findIndex(s => s.id === selectedSection.id) === 0} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 disabled:opacity-0"><ChevronLeft size={16} /> ÖNCEKİ</button>
              <button onClick={handleNextPage} disabled={allSections.findIndex(s => s.id === selectedSection.id) === allSections.length - 1} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#ffd43b]">SONRAKİ <ChevronRight size={16} /></button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="w-24 h-24 lg:w-48 lg:h-48 mb-8 animate-bounce-slow"><PythonLogo /></div>
            <h2 className="text-4xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none">HELLO PYTHON</h2>
            <div className="bg-[#1e293b] border border-slate-700/50 px-8 py-8 lg:px-12 lg:py-10 rounded-3xl shadow-2xl max-w-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-[#ffd43b]"></div>
               <p className="text-slate-100 text-xl lg:text-4xl font-black mb-4 uppercase text-center leading-tight">Python Türkçe Rehberi</p>
               <p className="text-slate-400 text-lg font-medium opacity-80">
                 <span className="text-[#ffd43b] uppercase tracking-widest font-bold">Menüden</span> bir konu seç ve kodlamaya başla.
               </p>
            </div>
          </div>
        )}

        {selectedSection && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-[#3776ab] text-white p-3 rounded-xl z-50 border border-white/10"><ChevronUp size={20} /></button>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-15px) rotate(3deg); } }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        summary::-webkit-details-marker { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3776ab66; border-radius: 10px; }
      `}} />
    </div>
  );
}

export default App;