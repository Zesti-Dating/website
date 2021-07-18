import React from "react";
import { Link } from 'react-router-dom';
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
  LinkItem,
  Inputs,
} from "./styles";
import routes from '@app/shared/constants/routes';
import Send from "@app/assets/send.svg";
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
              <HeaderImage src={Send} />
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Have questions, suggestions, or other inquiries?</Heading>
                  <LinkItem>
                    <Link to={routes.GFORM}>LET US KNOW!</Link>
                  </LinkItem>
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

export default Contact;
