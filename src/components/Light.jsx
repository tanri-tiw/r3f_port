function Light({ scale }) {
  return (
    <>
      <directionalLight
        intensity={0.5}
        color={"white"}
        position={[-11 * scale, 0 * scale, 0 * scale]}
        castShadow
        shadow-bias={-0.005}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0 * scale, 4.5 * scale, 0 * scale]}>
        <spotLight
          intensity={10}
          castShadow
          shadow-bias={-0.005}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      </group>
      <group
        position={[0 * scale, 4 * scale, 3 * scale]}
        rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
      >
        <spotLight
          intensity={10}
          castShadow
          shadow-bias={-0.005}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </group>
    </>
  );
}

export default Light;
