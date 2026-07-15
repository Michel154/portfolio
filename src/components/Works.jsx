import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const data = ["Web Apps", "Development", "Frontend UI", "Product Design"];

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
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px 40px 20px;
    gap: 30px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 54px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #4e5cdaff;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 680px;
    width: 100%;
  }
`;

function Works() {
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
