import React from 'react'
import { NavbarContainer, NavbarInner, Links, NavItem, Brand, Insta } from './styles'
import { Link } from 'react-router-dom'
import { Button } from '@app/shared/components/button'
import { colors } from '@app/styles/styles'
import routes from '@app/shared/constants/routes'
import Zesti from "@app/assets/zesti.svg"
import Instagram from "@app/assets/instagram.svg";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInner>
        <Brand src={Zesti} />
        <Links>
          <NavItem>
            <Link to={routes.INSTALINK}>
            <Insta src={Instagram} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to={routes.ABOUT}>About</Link>
          </NavItem>
          <NavItem>
            <Link to={routes.CONTACT}>Contact</Link>
          </NavItem>
          <Link to="/waitlist">
            <Button
              padding="9px 37px 9px 37px"
              backgroundColor={colors.PRIMARY}
              borderRadius="30px"
              color="#fefefe"
              margin="0px 0px 0px 20px"
              fontSize="1.1rem !important"
            >
              Join
            </Button>
          </Link>
        </Links>
      </NavbarInner>
    </NavbarContainer>
  )
}

export default Navbar
