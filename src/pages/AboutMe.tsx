import BtnDrawer from "../components/BtnDrawer";
import VerticalSlider from "../components/VerticalSlider";

const AboutMe: React.FC = () => {
  const linhas: number[] = [];

  for (let i = 1; i <= 16; i++) {
    linhas.push(i);
  }

  return (
    <>
      <div>
        <div>
          <BtnDrawer />
        </div>
        <div className="fade-in  ">
          <div className=" mt-36 ml-14 max-[1224px]:mt-16 max-[540px]:ml-0 max-[540px]:mt-10 flex flex-col text-slate-500 max-[1224px]:text-xs  items-start justify-end gap-1">
            {linhas.map((item) => (
              <div className=" " key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="absolute mt-24 max-[1224px]:mt-3 flex flex-col items-start gap-1 top-40 ml-40 max-[1224px]:ml-20 max-[420px]:ml-8 max-[1240px]:-top-80 max-[1240px]:mr-20 max-[1240px]:relative max-[420px]:items-center">
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">/**</h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * Sobre mim
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">*</h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * Olá, sou um entusiasta de tecnologia com
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * uma paixão especial pelo desenvolvimento frontend.
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * Nos últimos dois anos, tenho mergulhado de cabeça
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * no estudo e na prática desta área fascinante.
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * Desde então, tenho adquirido experiência valiosa
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * trabalhando em projetos pessoais e acadêmicos,
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * onde pude explorar diversas tecnologias e frameworks,
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * como HTML, CSS, JavaScript, React e React native.
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * Estou buscando uma oportunidade que me permita crescer
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * como desenvolvedor frontend, onde possa
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">
              * trabalhar em equipe, e aprender ainda mais.
            </h2>
            <h2 className="text-slate-500 text-lg max-[1224px]:text-xs">/*</h2>
          </div>
        </div>
      </div>
      <div className="fade-in mt-24 max-[1224px]:-mt-52 ">
        <VerticalSlider />
      </div>
    </>
  );
};

export default AboutMe;
