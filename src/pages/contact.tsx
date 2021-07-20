import React from "react";
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
} from "./styles";
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const Contact = () => {
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
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <p>
                    <label>Your Name: <Input type="text" name="name"/></label>
                  </p>
                  <p>
                    <label>Your Email: <Input type="email" name="email"/></label>
                  </p>
                  <p>
                    <label>Message: <InputArea name="message"></InputArea></label>
                  </p>
                  <p>
                    <Button 
                      type="submit"
                      margin="20px"
                      backgroundColor={colors.PRIMARY}
                      padding="10px 10px 10px 10px"
                      borderRadius="40px"
                      color="#ffffff"
                      style={{
                        width: "200px",
                      }}
                    >
                      Join Waitlist
                    </Button>
                  </p>
                </form>
              </ZestiSlideIn>
            </ContainerInner>
          </div>
        </ZestiFadeIn>
      </Container>
    </>
  );
};

export default Contact;
