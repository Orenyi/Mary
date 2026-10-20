import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import SelectedWork from "./sections/SelectedWork";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <About />
        <Expertise />
        <SelectedWork />
        <Process />
        <Contact />
      </main>
    </>
  );
}
