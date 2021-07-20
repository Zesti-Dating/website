import styled from 'styled-components'
import { device } from '@app/shared/components/layout/layout'

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: center;
  /* justify-content: left; */
  z-index: 20;
  position: relative;

  @media ${device.mobileS} {
    width: 100%;
    height: 240px;
  }

  @media ${device.laptopM} {
    width: 100%;
    height: 120px;
  }
`

export const NavbarInner = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    width: 80%;
  }

  @media ${device.laptopM} {
    width: 100%;
    max-width: 1200px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  & a {
    color: #fefefe !important;
    font-size: 1.1em;
    text-decoration: none;
    transition: 0.2s;
  }

  & a:hover {
    color: rgba(230, 230, 230, 1) !important;
  }

  & a:visited {
    color: black;
  }
`

export const NavItem = styled.p`
  position: relative;
  color: #ffffff;
  margin-right: 5%;
  margin-left: 5%;
  transition: 0.2s;
  width: fit-content;
  text-align: center;
`

export const Image = styled.img<{
  height: string
}>`
height: ${(props) => props.height};
align-self: center;
justify-self: center;
`