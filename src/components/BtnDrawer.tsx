import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FileTextOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Drawer from "./Drawer";
import Navbarr from "./Navbarr";

const BtnDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbarr />
      <div>
        <div
          className={`fixed top-24 z-40 transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "translate-x-[22rem]" : "translate-x-0"
          }`}
        >
          <button
            className="absolute left-0 mt-3 px-3 py-2 glass text-slate-300 rounded-r-lg border-y border-r border-white/10 shadow-lg hover:bg-indigo-600/80 hover:text-white hover:border-indigo-500 transition-all duration-300"
            onClick={toggleDrawer}
            aria-label="Toggle Skills Drawer"
          >
            {isDrawerOpen ? <DoubleLeftOutlined className="text-xl" /> : <DoubleRightOutlined className="text-xl" />}
          </button>
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
          <div className="h-full flex flex-col font-['Inter'] text-slate-300">
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Habilidades</h3>
              <div className="grid grid-cols-4 gap-4 p-2 bg-black/20 rounded-xl border border-white/5">
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/c-.png" alt="C#" title="C#" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/css3.png" alt="CSS3" title="CSS3" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/Design_sem_nome-removebg-preview.png" alt="Vite" title="Vite" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/html-5.png" alt="HTML5" title="HTML5" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/js.png" alt="JavaScript" title="JavaScript" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/programing.png" alt="Node.js" title="Node.js" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/react.png" alt="React" title="React" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/sql-server.png" alt="SQL Server" title="SQL Server" />
                <img className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-help" src="/typescript.png" alt="TypeScript" title="TypeScript" />
              </div>
            </div>
            
            <div className="mt-8 flex-1">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Contatos</h3>
              <div className="flex flex-col gap-5 p-2">
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <MailOutlined className="text-xl" />
                  </div>
                  <a href="mailto:diogoborges9804@gmail.com" className="ml-4 text-sm hover:text-indigo-400 transition-colors">diogoborges9804@gmail.com</a>
                </div>
                
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <WhatsAppOutlined className="text-xl" />
                  </div>
                  <a href="https://wa.me/5548991602597" target="_blank" rel="noreferrer" className="ml-4 text-sm hover:text-emerald-400 transition-colors">(48) 991602597</a>
                </div>
                
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-300 group-hover:bg-slate-500 group-hover:text-white transition-colors">
                    <GithubOutlined className="text-xl" />
                  </div>
                  <a href="https://github.com/diogoborges4" target="_blank" rel="noreferrer" className="ml-4 text-sm hover:text-slate-300 transition-colors">GitHub Profile</a>
                </div>
                
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <LinkedinOutlined className="text-xl" />
                  </div>
                  <a href="https://www.linkedin.com/in/diogo-borges-bernardo/" target="_blank" rel="noreferrer" className="ml-4 text-sm hover:text-sky-400 transition-colors">LinkedIn Profile</a>
                </div>
                
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors p-2">
                    <img className="w-full h-full object-contain filter brightness-0 invert" src="/figma-759x500-removebg-preview.png" alt="Figma" />
                  </div>
                  <a href="https://www.figma.com/@diogoborges" target="_blank" rel="noreferrer" className="ml-4 text-sm hover:text-purple-400 transition-colors">Figma Designs</a>
                </div>
                
                <div className="flex items-center text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <FileTextOutlined className="text-xl" />
                  </div>
                  <a href="/curriculo dev.pdf" target="_blank" rel="noreferrer" className="ml-4 text-sm hover:text-rose-400 transition-colors">Meu Currículo</a>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default BtnDrawer;
