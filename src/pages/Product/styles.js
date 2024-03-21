import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem 1fr 4.8125rem;
    grid-template-areas:
      'header'
      'content'
      'footer';
  }
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;

  width: 22rem;
  margin: 1rem auto 4.5rem;

  > a {
    display: flex;
    align-items: center;

    font-size: 1.875rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 70rem;
    height: 26rem;

    margin-top: 1.5rem;
  }
`

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > picture {
    margin-top: 1rem;

    > img {
      width: 18rem;
      height: 18rem;

      object-fit: cover;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 2.625rem;

    flex-direction: row;
    gap: 3rem;

    > picture {
      > img {
        width: 24.375rem;
        height: 24.3125rem;
        object-fit: cover;
      }
    }
  }
`

export const ProductDetails = styled.div`
  margin-top: 1.3333333333rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2.25rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;

    text-align: center;

    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: flex-start;

    h2 {
      font-size: 2.5rem;
      line-height: 140%;
      font-weight: 500;
    }

    p {
      margin-top: 1.5rem;

      font-family: 'Popins', sans-serif;
      font-size: 1.5rem;
      line-height: 140%;
      text-align: left;
    }
  }
`
export const ProductTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 1.5rem;
  }
`

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.5rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
      background: none;
      border: none;

      svg {
        width: 2.25rem;
        height: 2.25rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > button {
    width: 13rem;
    height: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 2rem;

    justify-content: flex-start;
  }
`
