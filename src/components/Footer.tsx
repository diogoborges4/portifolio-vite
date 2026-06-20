import { GithubOutlined, LinkedinOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 glass bg-[#050b14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white font-['Fira Code'] tracking-tighter mb-2 hover:text-indigo-400 transition-colors">
              <span className="text-indigo-500">&lt;</span>
              DB
              <span className="text-indigo-500">/&gt;</span>
            </a>
            <p className="text-slate-400 text-sm font-['Inter']">
              &copy; {currentYear} Diogo Borges. All rights reserved.
            </p>
          </div>

          {/* Center Message */}
          <div className="flex flex-col items-center text-center">
            <p className="text-slate-300 font-['Fira Code'] text-sm">
              <span className="text-slate-500">{"//"}</span> Built with <span className="text-cyan-400">React</span> & <span className="text-sky-400">Tailwind</span>
            </p>
            <p className="text-slate-500 text-xs mt-1 font-['Inter']">
              Designed for performance & aesthetics.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/diogoborges4"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <GithubOutlined className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/diogoborges4/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5]/80 hover:border-[#0077b5] transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined className="text-xl" />
            </a>
            <a
              href="https://wa.me/5548991602597"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366]/80 hover:border-[#25D366] transition-all duration-300 transform hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <WhatsAppOutlined className="text-xl" />
            </a>
          </div>

        </div>
      </div>
      
      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
