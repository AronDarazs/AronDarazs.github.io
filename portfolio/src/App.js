import logo from "./logo.svg";
import "./App.css";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";
import Header from "../src/components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Hero />
      </div>
      <Projects />
      <Technologies />
      <Timeline />
    </div>
  );
}

export default App;
