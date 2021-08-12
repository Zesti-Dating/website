import React from "react";
import { Link } from 'react-router-dom'
import {
  Button,
  ZestiFadeIn,
} from "@app/shared/components/index";
import { colors } from "@app/styles/styles";
import {
  ContainerLogo,
  Banner,
  LogoImage,
  LogoAnimation,
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
            <LogoAnimation>
              <LogoImage src={Zesti} />
            </LogoAnimation>
            <Link to="/waitlist">
              <Button
                type="button"
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
