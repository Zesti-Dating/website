import React from "react";
import {
  Navbar,
  Input,
  Button,
  ZestiFadeIn,
  ZestiSlideIn,
} from "@app/shared/components/index";
import { colors } from "@app/styles/styles";
import {
  Container,
  ContainerInner,
  Banner,
  Heading,
  HeaderImage,
  Description,
  Inputs,
} from "./styles";
import Phone from "@app/assets/message.svg";
const Home = () => {
  /**
   * TODO: Create inputs, rows with content
   */
  return (
    <>
      <Container>
        <Banner />
        <Navbar />
        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>The Only Dating App Designed to etc. etc.</Heading>
                  <Description>
                    We put the "Date" in "Dating." Zesti is the app where blah
                    blah blah blah etc. etc. etc. something goes here.
                  </Description>
                  <Inputs>
                    <Input placeholder="Email" borderRadius="40px 0 0 40px" />
                    <Button
                      backgroundColor={colors.PRIMARY}
                      padding="0px 10px 0px 10px"
                      borderRadius="0px 40px 40px 0px"
                      color="#ffffff"
                      style={{
                        width: "200px",
                      }}
                    >
                      {" "}
                      Join Waitlist{" "}
                    </Button>
                  </Inputs>
                </div>
              </ZestiSlideIn>
              <HeaderImage src={Phone} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>
      </Container>
      <Container></Container>
    </>
  );
};

export default Home;
