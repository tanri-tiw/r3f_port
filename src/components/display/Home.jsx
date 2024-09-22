import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { Mesh } from "three";
import gsap from "gsap";

function Home({ scale }) {
  const { scene } = useGLTF("models/home/help.glb");

  const rotateHome = () => {
    const timeline = gsap.timeline();
    timeline.to(scene.rotation, {
      y: Math.PI / 4,
      duration: 2,
    });
  };

  useEffect(() => {
    scene.scale.set(scale * 0.66, scale * 0.66, scale * 0.66);
    // scene.position.set(0, 0, -0.5);
    rotateHome();

    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, scale]);

  return <primitive object={scene} />;
}
useGLTF.preload("models/home/help.glb");
export default Home;
