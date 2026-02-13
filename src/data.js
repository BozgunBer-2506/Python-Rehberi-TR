const markdownFiles = import.meta.glob('./docs/**/*.md', { query: '?raw', eager: true });

export const allSections = Object.keys(markdownFiles).map((path) => {
  const module = markdownFiles[path];
  const content = typeof module === 'string' ? module : module.default;
  
  const pathParts = path.split('/');
  const folderName = pathParts[pathParts.length - 2] || "General"; 
  
  const idMatch = folderName.match(/^\d+/);
  const id = idMatch ? parseInt(idMatch[0]) : 999;
  const cleanTitle = folderName.replace(/^\d+-/, '').replace(/-/g, ' ').toUpperCase();

  return {
    id: id,
    title: cleanTitle,
    content: content
  };
})
.sort((a, b) => a.id - b.id);