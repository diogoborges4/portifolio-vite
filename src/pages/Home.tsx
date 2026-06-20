import TypingEffect from "../components/TypingEffect";

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full h-full max-w-7xl">
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start justify-center pt-20 md:pt-0">
          <div className="fade-in">
            <h1 className="flex flex-col items-start text-slate-300 text-xl md:text-2xl font-normal font-['Fira Code'] mb-6">
              <span className="mb-2">
                <TypingEffect text="Olá, eu sou o" disableCursor />
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                <TypingEffect text="Diogo Borges" delay={1400} disableCursor />
              </span>
              <span className="text-indigo-400 text-lg md:text-2xl font-semibold">
                <TypingEffect text="> Web Developer" delay={2900} />
              </span>
            </h1>
          </div>

          <div className="fade-in opacity-0" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
            <div className="glass p-6 rounded-xl mt-8 max-w-lg shadow-2xl hover:border-indigo-500/50 transition-colors duration-500">
              <p className="text-slate-400 text-sm md:text-base font-medium mb-4">
                // Veja este e outros repositórios no meu perfil do GitHub
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base bg-black/40 p-3 rounded-lg border border-white/5 font-['Fira Code'] overflow-x-auto">
                <span className="text-indigo-400 font-semibold">const</span>
                <span className="text-emerald-400">githubLink</span>
                <span className="text-white">=</span>
                <a
                  href="https://github.com/diogoborges4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-rose-400 hover:text-rose-300 underline underline-offset-4 transition-colors"
                >
                  "https://github.com/diogoborges4"
                </a>
                <span className="text-slate-500">;</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex w-full md:w-1/3 lg:w-1/2 justify-center items-center mt-12 md:mt-0 fade-in" style={{ animationDelay: '1s' }}>
          {/* Decorative abstract element to replace game */}
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-dashed border-emerald-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-purple-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-full bg-indigo-900/10">
              <span className="text-6xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
