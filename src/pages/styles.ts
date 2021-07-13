import styled, { keyframes } from 'styled-components'
import { device } from '@app/shared/components/layout/layout'
import { colors, fonts } from '@app/styles/styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media ${device.laptop} {
    min-width: 400px;
  }

  background-color: ${colors.TERNARY};
  position: relative;
`

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media ${device.laptop} {
    min-width: 400px;
  }

  background: linear-gradient(
    180deg,
    #fd8440 18.75%,
    #f2a000 50.52%,
    #ffba6d 100%
  ),
  #c4c4c4;
  position: relative;
`

export const ContainerInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 65vh;
  position: relative;
  @media ${device.mobileS} {
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
  }

  @media ${device.laptopM} {
    padding: 0px 0px;

    width: 100%;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    align-content: center;
  }
`

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
export const Banner = styled.div`
  background-size: 400% 400%;

  background: linear-gradient(
      180deg,
      #fd8440 18.75%,
      #f2a000 50.52%,
      #ffba6d 100%
    ),
    #c4c4c4;
  @media ${device.mobileS} {
    transform: skewY(-15deg) translateY(-30vh);
  }
  @media ${device.tabletL} {
    transform: skewY(-12deg) translateY(-20vh);
  }
  width: 100vw;
  height: 70vh;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${gradient} 15s ease infinite;

  border-radius: 0 0 30% 0 / 100px;
`

export const Heading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #1e3d59;
`

export const LogoImage = styled.img`
  width: 250%;
  max-width: 1000px;
  height: auto;
  align-self: center;
  justify-self: center;
  @media ${device.mobileS} {
    margin-top: 2em;
  }

  @media ${device.laptopM} {
    margin-top: 0;
  }
`

export const HeaderImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  align-self: center;
  justify-self: center;
  @media ${device.mobileS} {
    margin-top: 2em;
  }

  @media ${device.laptopM} {
    margin-top: 0;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SECONDARY};
  font-size: 18px;
  margin: 0px 0px 2em 0px;
  color: #1e3d59;
`

export const Inputs = styled.div`
  display: flex;
  width: 100%;
`
