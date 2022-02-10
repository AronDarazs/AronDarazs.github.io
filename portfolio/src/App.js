import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeDObj from "../src/components/ThreeDObj/ThreeDObj";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";

function App() {
  return (
    <div className="App">
      <div>
        <Hero />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ThreeDObj position={[-1.2, 0, 0]} />
          <ThreeDObj position={[1.2, 0, 0]} />
        </Canvas>
      </div>
      <Projects />
      <Technologies />
      <Timeline />
    </div>
  );
}

export default App;
