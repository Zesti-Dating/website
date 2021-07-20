import React, { useState } from "react";
import {
  Navbar,
  Input,
  InputArea,
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
import Send from "@app/assets/send.svg";
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const Waitlist = () => {
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
                  <Heading>Peel the love tonight, and join our waitlist!</Heading>
                  <Description>
                    Beta Test the Zesti App - we plan to launch in early Fall 2021!
                  </Description>
                </div>
              </ZestiSlideIn>
              <HeaderImage src={Phone} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>

        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <HeaderImage src={Send} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Waitlist;
