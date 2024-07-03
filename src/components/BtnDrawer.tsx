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
      <div className="">
        <div
          className={`absolute z-40 transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "translate-x-80" : "translate-x-0"
          }`}
        >
          <button
            className="absolute z-20 mt-3 px-4 py-2 bg-transparent  text-gray-600 rounded border border-gray-500 mr-4 hover:bg-indigo-600 hover:text-white"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
          </button>
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
          <div className="">
            <div className=" mt-2">
              <p>Habilidades</p>
              <div className=" flex flex-wrap mt-4">
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\c-.png"
                  alt="c#"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\css3.png"
                  alt="css"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\Design_sem_nome-removebg-preview.png"
                  alt="vite"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\html-5.png"
                  alt="html"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\js.png"
                  alt="js"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\programing.png"
                  alt="node"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\react.png"
                  alt="react"
                />
                <img
                  className=" w-8 h-8 my-3 mx-4"
                  src="src\assets\logos\sql-server.png"
                  alt="sql"
                />
                <img
                  className=" w-8 h-8my-1 mx-4"
                  src="src\assets\logos\typescript.png"
                  alt="ts"
                />
              </div>
              <div className=" my-6">
                <p>Contatos</p>
                <div className=" flex justify-around my-7">
                  <MailOutlined />
                  <h6 className=" text-sm">diogoborges9804@gmail.com</h6>
                </div>
                <div className=" flex ml-4 my-7">
                  <WhatsAppOutlined />
                  <a
                    href="https://wa.me/48991602597/"
                    target="norefer"
                    className=" ml-7 text-sm hover:text-warning-500"
                  >
                    (48) 991602597
                  </a>
                </div>
                <div className=" flex ml-4 my-7">
                  <GithubOutlined />
                  <a
                    href="https://github.com/diogoborges4"
                    target="norefer"
                    className=" ml-7 text-sm hover:text-warning-accent-300"
                  >
                    Repositórios
                  </a>
                </div>
                <div className=" flex ml-4 my-7">
                  <LinkedinOutlined />
                  <a
                    href="https://www.linkedin.com/in/diogo-borges-bernardo/"
                    target="norefer"
                    className=" ml-7 text-sm hover:text-sky-600"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className=" flex  my-7">
                  <img
                    className=" w-12 h-8"
                    src="src\assets\logos\figma-759x500-removebg-preview.png"
                    alt="figma"
                  />
                  <a
                    href="https://www.figma.com/@diogoborges"
                    target="norefer"
                    className=" ml-4 mt-1 text-sm hover:text-sky-600"
                  >
                    Figma
                  </a>
                </div>
                <div className="flex ml-4 my-7">
                  <FileTextOutlined />
                  <a
                    href="src\assets\doc\curriculo dev.pdf"
                    target="norefer"
                    className=" ml-7  text-sm hover:text-sky-600"
                  >
                    Meu Currículo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      <Navbarr />
      <div className=" absolute" onClick={toggleDrawer}>
        {isDrawerOpen && (
          <button
            className=" fixed z-30  inset-0 w-full h-full duration-500 ease-in-out bg-black opacity-50"
            onClick={toggleDrawer}
          ></button>
        )}
      </div>
    </>
  );
};

export default BtnDrawer;
