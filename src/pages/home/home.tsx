import React from "react";
import Navbar from "@app/shared/components/navbar/navbar";
import {
  Container,
  ContainerInner,
  Banner,
  Heading,
  HeaderImage,
  Description,
} from "./styles";
import Phone from "@app/assets/message.svg";
const Home = () => {
  return (
    <>
      <Container>
        <Banner />
        <Navbar />
        <ContainerInner>
          <div style={{ paddingRight: "1em" }}>
            <Heading>The Only Dating App Designed to etc. etc.</Heading>
            <Description>
              We put the "Date" in "Dating." Zesti is the app where blah blah
              blah blah etc. etc. etc. something goes here.
            </Description>
          </div>
          <HeaderImage src={Phone} />
        </ContainerInner>
      </Container>
    </>
  );
};

export default Home;
