// @ts-nocheck
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.scss";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Grid,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import UploadModel from "../UploadModel";
import { useSelector } from "react-redux";

const ModelPreview = (props) => {
  const { file, dimensions } = useContext(props.context);

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      frameloop={"always"}
      camera={{
        fov: 50,
        position: [0, 0, 10],
        zoom: 4,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="city" />
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      <PresentationControls global rotation={[Math.PI / 8, Math.PI / 4, 0]}>
        <Stage environment={"city"} intensity={0.6} castShadow={false}>
          <Suspense fallback={null}>
            {/*{file && <UploadModel model={file} settings={props.settings} />}*/}

            <UploadModel model={file} settings={props.settings} />

            <OrbitControls enableZoom={true} zoomSpeed={0.8} />
          </Suspense>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
            mirror={10}
          />
        </mesh>
      </PresentationControls>
    </Canvas>
  );
};
export default ModelPreview;
