import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

function Cube() {
  const textRef = useRef();
  const cubeRef = useRef();
  const navigate = useNavigate();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
    }
  });

  const handleCubeClick = () => {
    navigate("/projects");
  };

  return (
    <mesh ref={cubeRef} onClick={handleCubeClick}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />{" "}
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          ></PerspectiveCamera>

          <color attach="background" args={["#2f082c"]} />

          <Text ref={textRef} fontSize={0.7} color="#da4ea2" font={undefined}>
            PROJECTS
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
