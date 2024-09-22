import { OrbitControls, PerspectiveCamera, Box } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Home from "./display/Home";
import Me from "./display/Me";
import gsap from "gsap";
import Light from "./Light";
import MainPopup from "./MainPopup";
import Modal from "./Modal";
import Texts from "./text/Texts";

function Port() {
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [openModal, setOpenModal] = useState(false);
  const [camTar, setCamTar] = useState([0, 0, 0]);
  const camRef = useRef();
  const [p, setP] = useState(0);
  const [scale, setScale] = useState(1);

  const updateScale = () => {
    const scaleFactor = Math.min(window.innerHeight, window.innerWidth) / 1000; // Adjust divisor for desired scale
    setScale(scaleFactor);
  };
  const updateViewport = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const handleCam = (x, y, z, x1, y1, z1, p) => {
    setP(p);
    setCamTar([x1, y1, z1]);
    if (camRef.current) {
      const timeline = gsap.timeline();
      timeline.to(camRef.current.position, {
        x: x,
        duration: 2,
      });
      timeline.to(
        camRef.current.position,
        {
          y: y,
          duration: 2,
        },
        "<"
      );
      timeline.to(
        camRef.current.position,
        {
          z: z,
          duration: 2,
        },
        "<"
      );
    }
  };
  useEffect(() => {
    handleCam(0, 1, 6, 0, 0, 0, 0);
    updateScale();
    setShowPopup(true);

    // Add resize event listener
    window.addEventListener("resize", updateScale);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <>
      <MainPopup handleCam={handleCam} vp={viewport} />
      <Suspense fallback={null}>
        <Canvas id="three-canvas-container" shadows>
          <OrbitControls
            target={camTar}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            maxAzimuthAngle={Math.PI / 2.5}
            minAzimuthAngle={-Math.PI / 2.5}
          />
          <PerspectiveCamera
            makeDefault
            ref={camRef}
            position={[0, 1, 6]}
            fov={50}
          />

          <Light scale={scale} />

          {/* <Box position={[-0.6, 0.8, -0.2]} args={[0.1, 0.1, 0.1]} /> */}

          <mesh
            onClick={() => {
              if (p == 4) {
                setOpenModal(true);
              }
            }}
          >
            <Texts
              text={"Certificates"}
              scale={scale}
              position={[
                viewport.width > 600 ? 2 : 1,
                viewport.width > 600 ? 0.5 : 0.5,
                viewport.width > 600 ? -0.2 : 0,
              ]}
              rotation={[0, Math.PI / 4, 0]}
            />
          </mesh>
          <mesh
            onClick={() => {
              if (p == 1) {
                setOpenModal(true);
              }
            }}
          >
            <Texts
              text={"Skills"}
              scale={scale}
              position={[
                viewport.width > 600 ? 1.3 : 0.6,
                viewport.width > 600 ? 2.1 : 1.1,
                viewport.width > 600 ? -1.5 : -0.5,
              ]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </mesh>
          <mesh
            onClick={() => {
              if (p == 2) {
                setOpenModal(true);
              }
            }}
          >
            <Texts
              text={"Projects"}
              scale={scale}
              position={[
                viewport.width > 600 ? -2.8 : -1.3,
                viewport.width > 600 ? 0.9 : 0.5,
                viewport.width > 600 ? -0.1 : 0.5,
              ]}
              rotation={[0, Math.PI / 4, 0]}
            />
          </mesh>
          <mesh
            onClick={() => {
              if (p == 3) {
                setOpenModal(true);
              }
            }}
          >
            <Texts
              text={"About Me"}
              scale={scale}
              position={[
                viewport.width > 600 ? -1.2 : -0.6,
                viewport.width > 600 ? 2.1 : 1.1,
                viewport.width > 600 ? -1 : -0.5,
              ]}
            />
          </mesh>
          <mesh
            onClick={() => {
              if (p == 5) {
                setOpenModal(true);
              }
            }}
          >
            <Texts
              text={"Connect"}
              scale={scale}
              position={[
                viewport.width > 600 ? 1.2 : 0.6,
                viewport.width > 600 ? -0.5 : -0.3,
                viewport.width > 600 ? 1.5 : 0.7,
              ]}
            />
          </mesh>
          <Home scale={scale} />

          <Me scale={scale} />
          <ambientLight intensity={0.7} />
        </Canvas>
      </Suspense>
      <Modal openModal={openModal} setOpenModal={setOpenModal} p={p} />
    </>
  );
}

export default Port;
