import BtnDrawer from "../components/BtnDrawer";

const Projects = () => {
  const cards = [
    {
      id: 1,
      content: "Site de e-commerce de roupas",
      headme:
        "Projeto inspirado em um e-commerce utilizando redux no React.js.",
      bgImage: "src/assets/cardsImg/Captura de tela 2023-09-03 084910.png",
      repoLink: "https://github.com/diogoborges4/Loja-Online-main",
      deployLink: "https://onlinestorev2.netlify.app",
    },
    {
      id: 2,
      content: "React-Gram",
      headme: "Projeto inspirado no instagram.",
      bgImage: "src/assets/cardsImg/Captura de tela 2023-09-03 090910.png",
      repoLink: "https://github.com/diogoborges4/reactGram",
      deployLink: "https://reactgramapp.netlify.app",
    },
    {
      id: 3,
      content: "Elojobs",
      headme:
        "Projeto de um site para serviços de aumentar o elo no game League of Legends",
      bgImage: "src/assets/cardsImg/Captura de tela 2024-03-18 095430.png",
      repoLink:
        "https://app.rocketseat.com.br/certificates/56fb502b-aa76-4987-955b-e00b9dca104c",
      deployLink: "https://eloproject.netlify.app/",
    },
    {
      id: 4,
      content: "Movie-Lib",
      headme: "Acervo de filmes feito em React utilizando API do TMDB.",
      bgImage: "src/assets/cardsImg/Captura de tela 2024-03-18 153509.png",
      repoLink: "https://github.com/diogoborges4/Lib_Movie",
      deployLink: "https://libmoviesx.netlify.app",
    },
    {
      id: 5,
      content: "Finantial-app",
      headme:
        "Finance application made in React-native consuming an api-backend made in Node.js",
      bgImage: "src/assets/cardsImg/Finantial-app Template2.png",
      repoLink: "https://github.com/diogoborges4/finantial-app",
      deployLink:
        "https://snack.expo.dev/@dborges4/github.com-diogoborges4-finantial-app?platform=android",
    },
    {
      id: 6,
      content: "Crud API em C#",
      headme:
        "Uma api Crud que conecta com um banco de dados em sqlite feito em C#",
      bgImage: "src/assets/cardsImg/c_Sharp_pic.jpg",
      repoLink: "https://github.com/diogoborges4/ApiTesteCrud",
      deployLink: "https://github.com/diogoborges4/ApiTesteCrud",
    },
    {
      id: 7,
      content: "Store App",
      headme:
        "Um aplicativo de loja feito em React-native que utiliza um api externa.",
      bgImage: "src/assets/cardsImg/Finantial-app Template.png",
      repoLink: "https://github.com/diogoborges4/store-app",
      deployLink:
        "https://snack.expo.dev/@dborges4/github.com-diogoborges4-store-app",
    },
  ];
  return (
    <>
      <BtnDrawer />

      <div className="fade-in flex flex-wrap mt-24 pl-4 max-[410px]:pl-0">
        {cards.map((item) => (
          <div
            key={item.id}
            className="w-[340.35px] h-[422px] max-[410px]:w-[270px] mx-5 max-[420px]:mx-0 z-10"
          >
            <div className="w-[370.35px] h-[422px] max-[410px]:w-[290px] relative">
              <div className=" ">
                <span className="text-indigo-500 text-base font-bold font-['Fira Code']">
                  Project {item.id}{" "}
                </span>
                <span className="text-slate-500 text-base font-['Fira Code']">
                  //
                </span>
                <span className="text-indigo-500 text-base font-bold font-['Fira Code']">
                  {" "}
                </span>
                <span className="text-slate-500 text-base font-['Fira Code']">
                  {item.content}
                </span>
              </div>
              <div className="w-[370.35px] h-[314.82px] max-[510px]:w-[290px] left-0 top-16 absolute bg-slate-950 rounded-[15px] border border-slate-800" />
              <img
                className="w-[370.35px] h-[145.44px] max-[510px]:w-[290px] bg-cover left-0 top-16 absolute rounded-tl-[15px] rounded-tr-[15px] border border-slate-800"
                src={item.bgImage}
              />
              <div className="w-[304.69px] left-[20px] top-[230.44px]  max-[510px]:w-[290px] max-[510px]:left-0 absolute mb-1 text-slate-500 text-lg font-['Fira Code'] leading-[27px]">
                {item.headme}
              </div>
              <div className="px-3.5 py-2.5 left-[31px] top-[320.26px] max-[510px]:w-[290px] max-[510px]:left-0 absolute bg-slate-800 hover:bg-slate-500 ease-in-out duration-1000 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <a
                  href={item.deployLink}
                  target="norefer"
                  className=" mr-20 text-right text-white text-sm font-['Fira Code']"
                >
                  ver projeto
                </a>
                <a
                  href={item.repoLink}
                  target="norefer"
                  className="text-right text-white text-sm font-['Fira Code']"
                >
                  repositório
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
