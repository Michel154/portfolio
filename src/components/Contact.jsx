import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 40px 20px 40px;
  box-sizing: border-box;

  @media (min-width: 1025px) {
    scroll-snap-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 100px 20px 20px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 40px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 20px 40px 20px;
    height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  margin: 0;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 15px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  font-family: inherit;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  font-family: inherit;

  @media (max-width: 768px) {
    rows: 6;
  }
`;

const Button = styled.button`
  background-color: #4e5cdaff;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3b46a8;
  }
`;

const SuccessMessage = styled.p`
  color: #2ec4b6;
  margin: 0;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #8892b0;
  margin: 0;
  letter-spacing: 0.5px;
`;

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dxm9dg7", "template_lhrw37i", ref.current, {
        publicKey: "TmTCMQ10o8CvHHWpQ",
      })
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        },
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message here..."
              name="message"
              rows={8}
              required
            />
            <Button type="submit">Send</Button>
            {success && (
              <SuccessMessage>Your message has been sent.</SuccessMessage>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>

      <Footer>
        <FooterText>
          &copy; {new Date().getFullYear()} MICHEL.DEV. All rights reserved.
        </FooterText>
      </Footer>
    </Section>
  );
}

export default Contact;
