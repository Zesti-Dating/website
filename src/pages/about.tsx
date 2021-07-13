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
import Eating from "@app/assets/eating.svg";
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const About = () => {
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
              <HeaderImage src={Eating} />
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>This is the About Section of the website.</Heading>
                  <Description>
                    This is a description of what Zesti is, and what we aim to do.
                  </Description>
                </div>
              </ZestiSlideIn>
            </ContainerInner>
          </div>
        </ZestiFadeIn>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default About;
