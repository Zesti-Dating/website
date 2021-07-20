import React from "react";
import { Link } from 'react-router-dom';
import {
  Navbar,
  ZestiFadeIn,
  ZestiSlideIn,
} from "@app/shared/components/index";
import {
  Container,
  ContainerInner,
  Banner,
  Heading,
  HeaderImage,
  Description,
  LinkItem,
} from "./styles";
import routes from '@app/shared/constants/routes';
import Instagram from "@app/assets/instagram.svg";
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const Insta = () => {
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
              <HeaderImage src={Instagram} />
              <ZestiSlideIn left>
                <div style={{ paddingRight: "1em" }}>
                  <Heading>Make sure to follow us on Instagram!</Heading>
                  <LinkItem>
                    <Link to={routes.INSTALINK}>ZESTIHARVARD</Link>
                  </LinkItem>
                  <Description>
                    Stay updated on our developments and special promotions!
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

export default Insta;
