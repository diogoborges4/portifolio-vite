import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
  const cards = [
    {
      id: 1,
      content: "Warna",
      headme:
        "Warna é uma landing page completa e moderna de produtos para festas.",
      bgImage: "/warna-app.png",
      repoLink: "https://github.com/diogoborges4/warna-landing-page",
      deployLink: "https://warna-landing-page.vercel.app/",
    },
    {
      id: 2,
      content: "Euphoria",
      headme:
        "Euphoria é um e-commerce de roupas desenvovido em React.js.",
      bgImage: "/Euphoria-app.png",
      repoLink: "https://github.com/diogoborges4/Euphoria_Store",
      deployLink: "https://euphoria-storee.netlify.app/",
    },
    {
      id: 3,
      content: "Flikka",
      headme: "Flikka é um projeto de rede social desenvovido em React.js.",
      bgImage: "/flikka-app.png",
      repoLink: "https://github.com/diogoborges4/Flikka",
      deployLink: "https://flikka.netlify.app/",
    },
    {
      id: 4,
      content: "Elojobs",
      headme:
        "Projeto de uma landing page de serviços de aumentar o elo no game League of Legends",
      bgImage: "/elojobs-pp.png",
      repoLink:
        "https://github.com/diogoborges4/project-elojob",
      deployLink: "https://eloproject.netlify.app/",
    },
    {
      id: 5,
      content: "Movie-Lib",
      headme: "Acervo de filmes feito em React utilizando API do TMDB.",
      bgImage: "/Captura de tela 2024-03-18 153509.png",
      repoLink: "https://github.com/diogoborges4/Lib_Movie",
      deployLink: "https://libmoviesx.netlify.app",
    },
    {
      id: 6,
      content: "Finantial-app",
      headme:
        "Finance application made in React-native consuming an api-backend made in Node.js",
      bgImage: "/Finantial-app Template2.png",
      repoLink: "https://github.com/diogoborges4/finantial-app",
      deployLink:
        "https://snack.expo.dev/@dborges4/github.com-diogoborges4-finantial-app?platform=android",
    },
    {
      id: 7,
      content: "Crud API em C#",
      headme:
        "Uma api Crud que conecta com um banco de dados em sqlite feito em C#",
      bgImage: "/c_Sharp_pic.jpg",
      repoLink: "https://github.com/diogoborges4/ApiTesteCrud",
      deployLink: "https://github.com/diogoborges4/ApiTesteCrud",
    },
    {
      id: 8,
      content: "Store App",
      headme:
        "Um aplicativo de loja feito em React-native que utiliza um api externa.",
      bgImage: "/Finantial-app Template.png",
      repoLink: "https://github.com/diogoborges4/store-app",
      deployLink:
        "https://snack.expo.dev/@dborges4/github.com-diogoborges4-store-app",
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Fira Code'] mb-2">
            <span className="text-indigo-500">_</span>projects
          </h2>
          <p className="text-slate-400">// Alguns dos meus trabalhos recentes</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 150}>
            <div
              className="glass rounded-xl overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col h-full bg-slate-900/50"
            >
              <div className="relative h-48 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  src={item.bgImage}
                  alt={item.content}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-indigo-400 text-sm font-bold font-['Fira Code'] uppercase tracking-wider">
                    Project {item.id}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2 line-clamp-1">
                    {item.content}
                  </h3>
                  <p className="text-slate-400 text-sm font-['Inter'] line-clamp-3 leading-relaxed">
                    {item.headme}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10 flex gap-3">
                  <a
                    href={item.deployLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm font-medium shadow-lg shadow-indigo-500/30"
                  >
                    <GlobalOutlined /> Preview
                  </a>
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 glass hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <GithubOutlined /> Code
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
