import "./App.css";
import BtnDrawer from "./components/BtnDrawer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <BtnDrawer />
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
