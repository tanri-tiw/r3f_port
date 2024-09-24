import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh } from "three";
import gsap from "gsap";

function Me({ scale }) {
  const { scene } = useGLTF("models/girl/oscene.glb");
  const rotateCat = () => {
    const timeline = gsap.timeline();
    timeline.to(scene.rotation, {
      y: 0,
      duration: 2,
    });
    timeline.to(
      scene.position,
      {
        x: 0,
        duration: 2,
      },
      "<"
    );
  };
  useEffect(() => {
    scene.scale.set(1.7 * scale, 1.7 * scale, 1.7 * scale);
    scene.position.set(-0.5 * scale, 0 * scale, 0.75 * scale);
    scene.rotation.set(0, Math.PI / 4, 0);
    rotateCat();
    // scene.traverse((child) => {
    //   if (child instanceof Mesh) {
    //     child.castShadow = true;
    //     child.receiveShadow = true;
    //   }
    // });
  }, [scene]);
  useEffect(() => {
    scene.position.set(0 * scale, 0 * scale, 0.75 * scale);
    scene.scale.set(1.7 * scale, 1.7 * scale, 1.7 * scale);
  }, [scale]);

  return <primitive object={scene} />;
}
useGLTF.preload("models/girl/oscene.glb");
export default Me;
