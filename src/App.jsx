import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ChevronUp, Search, GraduationCap, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { allSections } from './data';
import PythonLogo from './images/Pythonlogo.png';

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
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex < allSections.length - 1) handlePageChange(allSections[currentIndex + 1]);
  };

  const handlePrevPage = () => {
    const currentIndex = allSections.findIndex(s => s.id === selectedSection.id);
    if (currentIndex > 0) handlePageChange(allSections[currentIndex - 1]);
  };

  const scrollToTop = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col lg:flex-row overflow-hidden font-sans">
      <header className="lg:hidden bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePageChange(null)}>
          <img src={PythonLogo} alt="Python Logo" className="w-8 h-8" />
          <span className="font-black text-white text-xs tracking-tighter uppercase">PYTHON REHBERI</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#ffd43b] text-xs font-black uppercase border border-[#ffd43b]/30 px-3 py-1 rounded">
          {isSidebarOpen ? 'KAPAT' : 'MENÜ'}
        </button>
      </header>

      <aside className={`fixed lg:sticky top-0 h-screen w-80 bg-[#1e293b] border-r border-slate-700 transform transition-transform duration-300 z-40 flex flex-col shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="hidden lg:flex flex-col items-center justify-center mb-8 w-full cursor-pointer" onClick={() => handlePageChange(null)}>
            <img src={PythonLogo} alt="Python Logo" className="w-16 h-16 mb-4" />
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

      <main id="main-content" className="flex-1 overflow-y-auto h-screen bg-[#0f172a] relative">
        {selectedSection ? (
          <div className="p-5 lg:p-12 max-w-4xl mx-auto w-full pb-32">
            <article className="prose prose-invert prose-slate max-w-none">
              <div className="mb-4 text-[#ffd43b] font-bold tracking-widest text-[10px] uppercase border-l-4 border-[#3776ab] pl-3">BÖLÜM {String(selectedSection.id).padStart(2, '0')}</div>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">{selectedSection.title}</h2>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="w-full overflow-x-auto rounded-xl my-4 border border-slate-800">
                        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" customStyle={{ margin: 0, padding: '16px', background: '#0d1117', fontSize: '13px' }} {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="bg-slate-800 text-[#ffd43b] px-1.5 py-0.5 rounded text-[13px] font-mono border border-slate-700/50" {...props}>{children}</code>
                    );
                  },
                  table: ({children}) => (
                    <div className="overflow-x-auto my-6 rounded-lg border border-slate-800">
                      <table className="min-w-full divide-y divide-slate-800 border-collapse">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({children}) => (
                    <thead className="bg-slate-800/50">
                      {children}
                    </thead>
                  ),
                  tbody: ({children}) => (
                    <tbody className="divide-y divide-slate-800/50">
                      {children}
                    </tbody>
                  ),
                  tr: ({children}) => (
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      {children}
                    </tr>
                  ),
                  th: ({children}) => (
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-200 whitespace-nowrap">
                      {children}
                    </th>
                  ),
                  td: ({children}) => (
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {children}
                    </td>
                  ),
                  h2: ({children}) => <h2 className="text-2xl lg:text-3xl font-black text-white mt-10 mb-4 border-b border-slate-800 pb-2 uppercase">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl lg:text-2xl font-bold text-white mt-8 mb-3 uppercase">{children}</h3>,
                  h4: ({children}) => <h4 className="text-lg lg:text-xl font-semibold text-white mt-6 mb-2">{children}</h4>,
                  h5: ({children}) => <h5 className="text-base lg:text-lg font-semibold text-white mt-5 mb-2">{children}</h5>,
                  h6: ({children}) => <h6 className="text-sm lg:text-base font-medium text-white mt-4 mb-2">{children}</h6>,
                  p: ({children}) => <p className="text-slate-300 leading-relaxed mb-5 text-sm">{children}</p>,
                  li: ({children}) => <li className="text-slate-300 mb-2 text-sm">{children}</li>,
                  ul: ({children}) => <ul className="list-disc ml-6 mb-5 space-y-2">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal ml-6 mb-5 space-y-2">{children}</ol>,
                  strong: ({children}) => <strong className="font-bold text-white">{children}</strong>,
                  details: ({children}) => <details className="group bg-[#1e293b]/50 border border-slate-700 rounded-xl mb-6 overflow-hidden">{children}</details>,
                  summary: ({children}) => (
                    <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-bold text-[#ffd43b] list-none">
                      <div className="flex items-center gap-2 text-[11px] font-black uppercase"><GraduationCap size={16} /><span>CEVABI GÖR</span></div>
                      <ChevronRight size={16} className="group-open:rotate-90 transition-transform" />
                    </summary>
                  ),
                  div: ({children, ...props}) => {
                    if (props.className === "answer-content") return <div className="px-4 py-3 bg-[#0f172a] text-emerald-400 font-bold border-t border-slate-700/50 italic text-sm lg:text-base">{children}</div>;
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
            <img src={PythonLogo} alt="Python Logo" className="w-24 h-24 lg:w-48 lg:h-48 mb-8 animate-bounce-slow" />
            <h2 className="text-4xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none">HELLO PYTHON</h2>
            <div className="bg-[#1e293b] border border-slate-700/50 px-8 py-8 lg:px-12 lg:py-10 rounded-3xl shadow-2xl max-w-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-[#ffd43b]"></div>
               <p className="text-slate-100 text-lg lg:text-2xl font-black mb-4 uppercase text-center leading-tight">Python Rehberi</p>
               <p className="text-slate-400 text-sm lg:text-base font-medium opacity-80">
                <span className="text-[#ffd43b] uppercase tracking-widest font-bold">Menüden</span> bir konu seç ve kodlamaya başla.
                </p>
            </div>
          </div>
        )}

        {selectedSection && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 bg-[#3776ab] hover:bg-[#2d5f8d] text-white p-3 rounded-xl z-50 border border-white/10 cursor-pointer shadow-lg transition-all"
          >
            <ChevronUp size={20} />
          </button>
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