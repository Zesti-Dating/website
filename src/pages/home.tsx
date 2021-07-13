import React from "react";
import { Link } from 'react-router-dom'
import {
  Navbar,
  Input,
  Button,
  ZestiFadeIn,
  ZestiSlideIn,
} from "@app/shared/components/index";
import { colors } from "@app/styles/styles";
import {
  ContainerLogo,
  ContainerInner,
  Banner,
  Heading,
  LogoImage,
  Description,
  Inputs,
} from "./styles";
import Zesti from "@app/assets/zesti.svg"
// import Eating from '@app/assets/eating.svg'
// import Plan from '@app/assets/plan.svg'
// import Swipe from '@app/assets/swipe.svg'
const Home = () => {
  /**
   * TODO: Create inputs, rows with content
   */
  return (
    <>
      <ContainerLogo>
        <Banner />
        <ZestiFadeIn>
            <ContainerInner>
                <LogoImage src={Zesti} />
            </ContainerInner>
            <Link to="/waitlist">
                      <Button
                        padding="18px 74px 18px 74px"
                        backgroundColor={colors.PRIMARY}
                        borderRadius="30px"
                        color="#fefefe"
                        margin="0px 0px 0px 0px"
                        fontSize="1.5rem !important"
                      >
                        Learn More
                      </Button>
                    </Link>
        </ZestiFadeIn>
      </ContainerLogo>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
