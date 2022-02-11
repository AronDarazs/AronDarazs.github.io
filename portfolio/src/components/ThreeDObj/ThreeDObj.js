import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei/core/useGLTF";

export default function ThreeDObj() {
  const obj = useLoader(GLTFLoader, "/avatarmodel.glb");

  /* const obj = useGLTF(
  "https://drive.google.com/u/1/uc?id=15py32tVWNNHgZ046JQdYYV56iCsM_pmF&export=download"
  ); */

  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[10, 10, -10]} />
      <pointLight position={[-10, 10, 10]} />

      <OrbitControls />
      {/* <Environment
        background={true}
        files={"ocean.hdr"}
        path={"/models/"}
        preset={null}
        scene={undefined}
      /> */}
      <primitive object={obj.scene} scale={3} position={[0, -3, 0]} />
    </Canvas>
  );
}
