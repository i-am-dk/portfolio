import { React, Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import { OrbitControls } from '@react-three/drei';
const Background = () => {
  const adjustSceneForAllScreenSize = () => {
    let screenScale = null;
    let screenPosition =  [0, -6.5, -43];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition]
  }
  const [spaceScale, spacePosition] = adjustSceneForAllScreenSize();
  const [isRotating] = useState(true);
  
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-black ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, position: [1,1,9] }}
      >
        <Suspense fallback={<Loader />}>
         <Sky isRotating={isRotating} />
          <OrbitControls
             minPolarAngle={Math.PI / 18}
             maxPolarAngle={Math.PI / 3} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Background;
