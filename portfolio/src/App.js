import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeDObj from "../src/components/ThreeDObj/ThreeDObj";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";
import Header from "../src/components/Header/Header";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Hero />
        <Suspense fallback={<p>Error while loading 3D object</p>}>
          <ThreeDObj className="artifact" url="/models/ship2.obj" />
        </Suspense>
      </div>
      <Projects />
      <Technologies />
      <Timeline />
    </div>
  );
}

export default App;
