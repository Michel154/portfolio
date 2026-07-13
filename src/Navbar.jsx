import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const LogoText = styled.div`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;

  span {
    color: #da4ea2;
  }
`;

const List = styled.ul`
  display: ${(props) => (props.scrolled ? "none" : "flex")};
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
  &:hover {
    color: #da4ea2;
  }
`;

const StyledProjectLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #da4ea2;
  }
`;

const Icons = styled.div`
  display: ${(props) => (props.scrolled ? "none" : "flex")};
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #375582ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 50 || window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (location.pathname === "/projects") {
    return null;
  }

  return (
    <Section>
      <Container>
        <Links>
          <LogoText onClick={() => scrollToSection("home")}>
            MICHEL<span>.DEV</span>
          </LogoText>

          <List scrolled={scrolled}>
            <ListItem onClick={() => scrollToSection("who")}>Studio</ListItem>
            <ListItem onClick={() => scrollToSection("works")}>Works</ListItem>
            <ListItem onClick={() => scrollToSection("contact")}>
              Contact
            </ListItem>

            <li>
              <StyledProjectLink to="/projects">Projects</StyledProjectLink>
            </li>
          </List>
        </Links>

        <Icons scrolled={scrolled}>
          <Button onClick={() => scrollToSection("contact")}>
            Contact now
          </Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
