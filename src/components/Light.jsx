function Light({ scale }) {
  return (
    <>
      <directionalLight
        intensity={0.5}
        color={"white"}
        position={[-11 * scale, 0 * scale, 0 * scale]}
      />

      <group
        position={[0 * scale, 4 * scale, 3 * scale]}
        rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
      >
        <spotLight intensity={10} />
      </group>
    </>
  );
}

export default Light;
