import { Text } from "@react-three/drei";

export default function Texts({ text, scale, position, rotation }) {
  return (
    <Text
      color={"white"}
      fontSize={0.25 * scale}
      position={position}
      rotation={rotation}
      fontWeight={"bold"}
      font={"fonts/PixelifySans-VariableFont_wght.ttf"}
    >
      {text}
    </Text>
  );
}
