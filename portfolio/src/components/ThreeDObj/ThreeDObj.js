import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei/core/useGLTF";

export default function ThreeDObj() {
  const obj = useLoader(OBJLoader, "/avatarmodel.obj");

  /* const obj = useGLTF(
  "https://drive.google.com/u/1/uc?id=15py32tVWNNHgZ046JQdYYV56iCsM_pmF&export=download"
  ); */

  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* <Environment
        background={true}
        files={"ocean.hdr"}
        path={"/models/"}
        preset={null}
        scene={undefined}
      /> */}
      <primitive object={obj} scale={0.4} />
    </Canvas>
  );
}
