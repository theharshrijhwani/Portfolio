import "./App.css";
import About from "./components/About/About";
import Connect from "./components/Connect/Connect";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Tech />
      <Projects />
      <Connect />
    </>
  );
}

export default App;
