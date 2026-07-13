import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  padding-top: 80px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 100px 40px 40px 40px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 100px 20px 40px 20px;
    justify-content: center;
    gap: 40px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
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

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 22px;
  white-space: nowrap;
  margin: 0;
`;

const TechIcons = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  i {
    font-size: 28px;
    color: lightgray;
    transition:
      color 0.3s ease,
      transform 0.2s ease;
    cursor: pointer;

    &:hover {
      color: #4e5cdaff;
      transform: scale(1.2);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 25px;
  margin: 10px 0;

  a {
    color: white;
    font-size: 30px;
    transition:
      color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      color: #da4ea2;
      transform: translateY(-3px);
    }
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b83b85;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: none;
  }
`;

const ProfileImg = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

function Hero() {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("who");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <Title>Front-End React Developer</Title>
          <Desc>
            Hi, I'm Michel Gorjizadeh. A passionate Front-End Developer based in
            Stockholm, Sweden
          </Desc>

          <WhatWeDo>
            <Subtitle>Tech Stack |</Subtitle>
            <TechIcons>
              <i className="fa-brands fa-react" title="React"></i>
              <i className="fa-brands fa-js" title="JavaScript"></i>
              <i className="fa-brands fa-html5" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt" title="CSS3"></i>
              <i className="fa-solid fa-n" title="Next.js"></i>
              <i className="fa-solid fa-t" title="TypeScript"></i>
              <i className="fa-brands fa-angular" title="Angular"></i>
              <i className="fa-brands fa-figma" title="Figma"></i>
            </TechIcons>
          </WhatWeDo>

          <Socials>
            <a
              href="https://www.linkedin.com/in/michelgorjizadeh/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Michel154"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Socials>

          <Button onClick={handleLearnMore}>Learn More</Button>
        </Left>

        <Right>
          <ProfileImg src="./img/profile2.jpg" alt="Michel" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
