import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div`
  /* max-width: 17.5rem;
  height: 24.3333333333rem; */

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 70rem;
  }
`

export const Content = styled.div`
  max-width: 17.5rem;
  height: 24.3333333333rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  margin: 0 auto;
  padding: 1.5rem;

  img {
    width: 7.3333333333rem;
    height: 7.3333333333rem;
    border-radius: 50%;
    object-fit: cover;

    &:hover {
      transform: scale(1.09);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0;

    min-width: 17rem;
    min-height: 28.875rem;

    img {
      width: 10rem;
      height: 10rem;

      border-radius: 50%;
      object-fit: cover;
    }
  }
`

export const IconWrapper = styled(Link)`
  position: absolute;

  right: 10px;
  top: 10px;
  cursor: pointer;

  > svg {
    height: 1.5rem;
    width: 1.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .edit {
    transition: 0.5s ease;

    &:hover {
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
`

export const CardInformation = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  h3 {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  p {
    display: none;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 1rem;

    h3 {
      font-size: 1.125rem;
      line-height: 140%;
      font-weight: 700;
    }

    p {
      display: block;

      font-size: 0.875rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    span {
      font-size: 2rem;
      line-height: 160%;
      font-weight: 400;
    }
  }
`

export const CardActions = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > button {
      background: none;
      border: none;

      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 2rem;
      width: 2rem;

      > svg {
        height: 2rem;
        width: 2rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > button {
    margin-top: 1.3333333333rem;

    height: 2rem;
    width: 100%;
  }

  @media only screen and (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > button {
      margin-top: 0;
    }
  }
`
