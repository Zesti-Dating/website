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
            <input 
              name="first-name"
              placeholder="First Name (required)" 
            />
            <input 
              name="last-name"
              placeholder="Last Name (required)"  
            />
            <input 
              name="email"
              placeholder="Harvard Email (required)" 
            />
            <textarea
              name="comments"
              placeholder="Any comments, suggestions, or other inquiries (optional)" 
            />
            <button
              type="submit"
              color="#ffffff"
              style={{
                width: "200px",
              }}
            >
              Join Waitlist
            </button>
          </form>
        </div>
    </>
  );
};

export default Contact;
