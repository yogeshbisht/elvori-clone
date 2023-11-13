"use client";

import Navbar from "./components/navbar";
import styled from "styled-components";

const StyledHome = styled.div`
  background-image: url("/images/home.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 24px;
`;

const Gradient = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  pointer-events: none;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.84));
`;

const HomeContent = styled.div`
  position: relative;
  line-height: 1.4;
`;

const TextContainer = styled.div`
  margin-bottom: 24px;
`;

const TextSlogan = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
`;

const TextContent = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

const CreateAccountButton = styled.button`
  height: 50px;
  padding: 0 16px;
  margin-bottom: 12px;
  border-radius: 20px;
  background: #89071f;
  color: #fff;
  display: block;
  width: 100%;
  font-weight: 700;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: inherit;
`;

const LinksContainer = styled.div`
  font-size: 12px;
  margin-top: 24px;
  text-align: center;
`;

const PolicyLink = styled.a`
  color: #fff;
`;

export default function Home() {
  return (
    <StyledHome>
      <Navbar />
      <Gradient />
      <HomeContent>
        <TextContainer>
          <TextSlogan>Long-term connections with like-minded people</TextSlogan>
          <TextContent>Join our 100 million community!</TextContent>
        </TextContainer>
        <CreateAccountButton>Create account</CreateAccountButton>
        <LinksContainer>
          You must be at least 18 years old to register. By registering, you
          agree to the{" "}
          <PolicyLink href="/info/terms">User Agreement</PolicyLink> and{" "}
          <PolicyLink href="/info/privacy">Privacy Policy</PolicyLink>
        </LinksContainer>
      </HomeContent>
    </StyledHome>
  );
}
