import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/device-breakpoints";

export const Container = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem auto 4.8125rem;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`;

export const Content = styled.div`
  grid-area: content;

  width: 22rem;
  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 31rem;
    margin: 0 auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 42rem;
    margin: 0 auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-width: 70rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export const Banner = styled.section`
  min-width: 11rem;
  height: 7.5rem;

  background: ${({ theme }) => theme.COLORS.GRADIENTE_200};
  border-radius: 8px;

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
`;

export const BannerText = styled.div`
  font-family: "Poppins", sans-serif;
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
`;
