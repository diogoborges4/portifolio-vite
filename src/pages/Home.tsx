import TypingEffect from "../components/TypingEffect";
import GameComponent from "../components/FlappyBird";
import BtnDrawer from "../components/BtnDrawer";

const Home: React.FC = () => {
  return (
    <>
      <BtnDrawer />
      <div className=" mt-36 absolute max-[1022px]:mt-16  w-10/12 ">
        <div className=" ml-32 max-[1022px]:ml-2 w-1/2 h-2/5 max-[776px]:w-72 ">
          <h1 className=" flex flex-col items-start  text-slate-200 text-2xl max-[776px]:text-lg font-nomal font-['Fira Code']">
            <TypingEffect text="Olá, eu sou o" disableCursor />
            <span className=" text-5xl max-[776px]:text-3xl mt-3">
              <TypingEffect text="Diogo Borges" delay={1400} disableCursor />
            </span>
            <span className="text-indigo-600">
              <TypingEffect text="> Front-end Developer" delay={2900} />
            </span>
          </h1>
          <div className="fade-in mt-32 max-[1022px]:mt-8 max-[1022px]:">
            <p className="text-slate-500 text-base font-thin ">
              //Veja esse e outros repositórios no meu perfil do Github
            </p>
            <div>
              <span className="text-indigo-600 text-base font-medium font-['Fira Code']">
                const
              </span>
              <span className="text-white text-base font-medium font-['Fira Code']">
                {" "}
              </span>
              <span className="text-emerald-400 text-base font-medium font-['Fira Code']">
                githubLink
              </span>
              <span className="text-white text-base font-medium font-['Fira Code']">
                {" "}
                ={" "}
              </span>
              <span className="text-rose-400 text-base font-medium font-['Fira Code']">
                “
              </span>
              <a
                href="https://github.com/diogoborges4"
                target="noreffer"
                className="text-rose-400 text-base font-medium font-['Fira Code'] underline"
              >
                http://localhost:5173/
              </a>
              <span className="text-rose-400 text-base font-medium font-['Fira Code']">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex mr-24 pr-4 mt-28 max-[970px]:mt-96 min-[971px]:justify-end ">
        <div className="fade-in z-10 box-border max-[400px]:pr-0  ">
          <GameComponent />
        </div>
      </div>
      <div className=" z-0 absolute skew-x-12 top-1 right-2  m-48">
        <div className=" relative blur-3xl w-56 h-56 opacity-55 bg-indigo-500"></div>
        <div className=" relative blur-3xl w-56 h-56 opacity-55 bg-emerald-400"></div>
      </div>
    </>
  );
};

export default Home;
