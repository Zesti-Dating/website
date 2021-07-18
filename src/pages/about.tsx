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
import Breakfast from "@app/assets/breakfast.svg";
import Swiping from "@app/assets/swiping.svg";
import Friends from "@app/assets/friends.svg";
import Love from "@app/assets/love.svg";
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
              <HeaderImage src={Swiping} />
              <ZestiSlideIn left={false}>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Tired of constant swiping?</Heading>
                  <Description>
                    We are too! And we wanted to do what dating apps couldn't - get you on a meaningful date!
                  </Description>
                </div>
              </ZestiSlideIn>
            </ContainerInner>
          </div>
        </ZestiFadeIn>

        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Zesti is a social app made by - and for - Harvard students</Heading>
                  <Description>
                    with the goal of providing a rewarding way for students to connect with eachother, romantically or platonically.
                  </Description>
                </div>
              </ZestiSlideIn>
              <HeaderImage src={Eating} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>

        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <HeaderImage src={Breakfast} />
              <ZestiSlideIn left={false}>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Access exclusive deals and discounts!</Heading>
                  <Description>
                    By simply using the Zesti App and showing up to your "dates," you can save money through our partnered businesses around the Square!
                  </Description>
                </div>
              </ZestiSlideIn>
            </ContainerInner>
          </div>
        </ZestiFadeIn>

        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Connect with multiple new friends at a time!</Heading>
                  <Description>
                    Build your network and match with other friend groups - we can be your new reason to get up and go out there!
                  </Description>
                </div>
              </ZestiSlideIn>
              <HeaderImage src={Friends} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>

        <ZestiFadeIn>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContainerInner>
              <HeaderImage src={Love} />
              <ZestiSlideIn left={false}>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Just looking for love?</Heading>
                  <Description>
                    Great! We'll do you even better - save money and explore the campus while we find you your Harvard spouse.
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
