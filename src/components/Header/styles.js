import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div``

export const MenuButton = styled.button`
  background: none;
  border: none;

  > svg {
    height: 2rem;
    width: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const MenuReceipt = styled.div`
  position: relative;

  > svg {
    height: 2rem;
    width: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    position: absolute;
    top: -2px;
    right: -5px;

    height: 1.25rem;
    width: 1.25rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Menu = styled.div`
  #desktop {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 70rem;
      height: 6rem;

      margin: 0 auto;
      padding: 0 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        position: relative;

        > img {
          width: 9.125rem;
          height: 3rem;
        }

        p {
          position: absolute;
          top: 40px;
          right: 0;

          font-size: 0.75rem;
          font-family: 'Roboto', sans-serif;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }

      > div {
        width: 100%;
        height: 3rem;

        > input {
          width: 100%;
          height: 3rem;
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 2rem;

        width: 17.5rem;

        button:first-child {
          width: 13.5rem;
          height: 3rem;
        }

        > svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }

  #mobile {
    display: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      height: 7.125rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 3.5rem 1.75rem 1.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      img {
        width: 10rem;
      }

      > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        p {
          font-size: 0.75rem;
          font-family: 'Roboto', sans-serif;
          line-height: 160;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }
    }
  }
`
