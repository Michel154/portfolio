import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
  background-color: #0a192f;
  color: white;

  height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;

  span {
    color: #da4ea2;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: lightgray;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: #112240;
  border-radius: 10px;
  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.9);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #da4ea2;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 15px;
  color: lightgray;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 12px;
  background-color: rgba(218, 78, 162, 0.15);
  color: #da4ea2;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: 600;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;

    &:hover {
      color: #da4ea2;
    }
  }
`;

const LogoBackLink = styled(Link)`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
  text-decoration: none;
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  span {
    color: #da4ea2;
  }
`;

const myProjects = [
  {
    id: 1,
    title: "MDT Barber",
    desc: "Examensarbete: En fullt fungerande webbsida och bokningsfunktioner för en fiktiv frisörsalong.",
    tags: ["React", "Next.js"],
    image: "./img/mdt-barber.jpg",
    // github: "https://github.com/Michel154",
    live: "https://michel-mdt.netlify.app/",
  },
  {
    id: 2,
    title: "To-do list App",
    desc: "En enkel och användarvänlig to-do list app med convex backend som lagrar användarens uppgifter.",
    tags: ["React", "Convex"],
    image: "./img/todo-app.jpg",
    // github: "https://github.com/Michel154",
    live: "https://michels-todo-app.netlify.app/",
  },
  {
    id: 3,
    title: "Quiz App",
    desc: "En interaktiv quiz-app som testar användarens kunskaper inom olika ämnen.",
    tags: ["React", "API"],
    image: "./img/quiz-app.jpg", //
    // github: "https://github.com/Michel154",
    live: "https://michels-quiz-app.netlify.app/",
  },
];

function ProjectsPage() {
  return (
    <PageWrapper>
      <Header>
        <Title>
          Mina <span>Projekt</span>
        </Title>
        <Subtitle>
          Här är ett urval av webbapplikationer och gränssnitt som jag har
          byggt.
        </Subtitle>
      </Header>

      <ProjectsGrid>
        {myProjects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>

              <TechTags>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TechTags>

              <LinksContainer>
                {/* <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> Code
                </a>*/}
                <a href={project.live} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                  Live Demo
                </a>
              </LinksContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <LogoBackLink to="/">
        MICHEL<span>.DEV</span>
      </LogoBackLink>
    </PageWrapper>
  );
}

export default ProjectsPage;
