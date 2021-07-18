import React, { useState } from "react";
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
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const Waitlist = () => {
  /**
   * TODO: Create inputs, rows with content
   */
  const [email, setEmail] = useState('');
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
                  <Inputs>
                    <Input 
                      placeholder="Email" 
                      value={ email }
                      onChange={(e) => setEmail(e.target.value)}
                      borderRadius="40px 0 0 40px" 
                    />
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
                  <p>{ email }</p>
                </div>
              </ZestiSlideIn>
              <HeaderImage src={Phone} />
            </ContainerInner>
          </div>
        </ZestiFadeIn>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Waitlist;
