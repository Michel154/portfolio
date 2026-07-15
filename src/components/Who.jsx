import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 40px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px 40px 20px;
    justify-content: center;
    gap: 30px;
  }
`;

const Left = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    height: 680px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 54px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 35px;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 24px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b83b85;
  }
`;

function Who() {
  const handleSeeWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="who">
      <Container>
        <Left>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.4}>
              <MeshDistortMaterial color="#da4ea2" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
        </Left>
        <Right>
          <Title>ABOUT ME</Title>

          <Subtitle>
            A dedicated Front-End Developer, based in Stockholm, Sweden
          </Subtitle>

          <Desc>
            I specialize in creating responsive and interactive web applications
            using modern technologies like React, JavaScript, HTML, and CSS. My
            passion lies in developing intuitive interfaces that enhance user
            experiences and drive engagement. With a keen eye for detail and a
            love for clean code, I deliver high-quality solutions tailored to
            exceed expectations.
          </Desc>
          <Button onClick={handleSeeWorks}>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
