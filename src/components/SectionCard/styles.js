import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.section`
  margin-top: 4rem;

  & + section {
    margin-top: 1.5rem;
  }

  & + section:last-child {
    margin-bottom: 3rem;
  }

  > h2 {
    font-size: 1.125rem;
    line-height: 140%;
    font-weight: 500;
  }
`

export const Carousel = styled.section`
  margin-top: 1.5rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  justify-self: center;
  justify-items: center;

  align-items: center;
  justify-self: center;
  align-self: center;

  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 0.75rem;

    max-width: 13.125rem;
    width: 100%;
    height: 18.25rem;

    border: 1px solid red;

    padding: 1.5rem;

    > picture {
      width: 5.5rem;
      height: 5.5rem;

      img {
        height: 100%;
        width: 100%;
      }

      svg {
        position: absolute;
        top: 1rem;
        right: 1rem;

        height: 1.5rem;
        width: 1.5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 19rem;
    height: 28.875rem;

    > picture {
      width: 11rem;
      height: 11rem;
    }
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    display: none;
    visibility: hidden;
  }

  > h3 {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;
  }

  > span {
    margin: 0.75rem 0;

    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`

export const CardOptionsButton = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.875rem;

      svg {
        font-size: 2rem;
      }
    }

    button {
      height: 2rem;
    }
  }
`
