import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div``

export const Banner = styled.section`
  max-width: 22.9375;
  width: min(89%, 1122px);
  height: 7.5rem;

  background: ${({ theme }) => theme.COLORS.GRADIENTE_200};

  margin: 4.4rem auto 0;

  display: flex;
  justify-content: flex-end;

  position: relative;

  > picture {
    position: absolute;
    top: -3rem;
    left: -3rem;
    bottom: 0;
  }

  /* @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > picture > img {
      display: none;
    }
  } */

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 41.25rem;

    > picture {
      width: 100%;
      top: -20%;
      left: 0;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 70rem;
    height: 16.25rem;

    picture {
      position: static;
      overflow: hidden;
      margin-top: -5%;
      margin-left: -5%;
      width: 58%;
    }
  }
`

export const BannerText = styled.div`
 font-family: 'Poppins', sans-serif;
  padding-top: 3.6rem;
  width: 60%;
  z-index: 2;

  h2 {
    font-size: 1.125rem;
    line-height: 0.875rem;
    font-weight: 600;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    margin-top: 5px;

    font-size: 0.75rem;
    line-height: 0.875rem;
    font-weight: 400;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 60%;
    padding-top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 50%;

    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }

    p {
      margin-top: 1rem;

      font-size: 1rem;
      font-weight: 400;
    }
  }

  
`
