import React from "react";
import { Link } from 'react-router-dom';
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
      <div style={{ paddingRight: "1em" }}>
          <form
            name="waitlist"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <Input 
              name="first-name"
              placeholder="First Name (required)" 
              borderRadius="40px" 
            />
            <Input 
              name="last-name"
              placeholder="Last Name (required)" 
              borderRadius="40px" 
            />
            <Input 
              name="email"
              placeholder="Harvard Email (required)" 
              borderRadius="40px" 
            />
            <InputArea
              name="comments"
              placeholder="Any comments, suggestions, or other inquiries (optional)" 
              borderRadius="40px" 
            />
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
          </form>
        </div>
    </>
  );
};

export default Contact;
