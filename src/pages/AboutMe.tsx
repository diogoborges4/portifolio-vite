import VerticalSlider from "../components/VerticalSlider";
import ScrollReveal from "../components/ScrollReveal";

const AboutMe: React.FC = () => {
  const codeLines = [
    "/**",
    " * Sobre mim",
    " *",
    " * Desenvolvo aplicações para web e mobile a mais de 3 anos,",
    " *",
    " * Realizei alguns projetos pessoais que me fizeram adquirir bastante conhecimento prático",
    " * em tecnologias como HTML, CSS, JavaScript, React, React Native e Node.JS.",
    " * Atualmente tenho focado em utilizar a IA para aumentar a produtividade e qualidade",
    " * do meu código, estou sempre buscando aprender coisas novas e me aperfeiçoar",
    " * como desenvolvedor.",
    " */"
  ];

  return (
    <section id="about-me" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-12">
        
      {/* Code Editor Section */}
      <div className="w-full xl:w-1/2 mt-8 xl:mt-16">
        <ScrollReveal>
          <div className="glass rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl hover:border-indigo-500/30 transition-colors duration-500">
            {/* Editor Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors"></div>
              </div>
              <div className="mx-auto text-slate-400 text-xs font-['Inter'] font-medium">
                aboutMe.ts
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-6 overflow-x-auto">
              <div className="flex font-['Fira_Code'] text-sm sm:text-base md:text-lg leading-relaxed">
                {/* Line Numbers */}
                <div className="flex flex-col text-slate-600 select-none pr-6 text-right border-r border-white/10 mr-6">
                  {codeLines.map((_, i) => (
                    <span key={`line-${i + 1}`}>{i + 1}</span>
                  ))}
                </div>
                
                {/* Code Text */}
                <div className="flex flex-col text-slate-300">
                  {codeLines.map((line, i) => (
                    <span key={`code-${i}`}>
                      {line.startsWith('/**') || line.startsWith(' */') ? (
                        <span className="text-slate-500">{line}</span>
                      ) : (
                        <span className="text-slate-400">
                          <span className="text-slate-500 mr-2">*</span>
                          <span className="text-emerald-300/80 hover:text-emerald-300 transition-colors cursor-text">{line.substring(2)}</span>
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical Slider Section */}
      <div className="w-full xl:w-1/2">
        <ScrollReveal delay={200}>
          <div className="glass rounded-xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/30 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Fira Code'] border-b border-white/10 pb-4">
              <span className="text-indigo-500">&lt;</span>
              Tech_Stack
              <span className="text-indigo-500">/&gt;</span>
            </h3>
            <div className="h-[400px] overflow-hidden rounded-lg bg-black/20 p-4 border border-white/5 relative">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#050b14] to-transparent z-10 pointer-events-none"></div>
              <VerticalSlider />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050b14] to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutMe;
