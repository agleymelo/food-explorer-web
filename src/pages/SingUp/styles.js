import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  max-width: 22rem;
  width: 100%;

  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-around;

    max-width: 100vw;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Form = styled.form`
  margin-top: 4.375rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    display: none;
  }

  > label {
    font-size: 1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    margin-top: 0.6rem;
    width: 100%;

    margin-bottom: 2rem;
  }

  > a {
    align-self: center;
    margin-top: 2.66rem;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 0;

    max-width: 29.75rem;
    width: 100%;
    padding: 4rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
      margin-bottom: 2rem;

      display: block;
      align-self: center;

      font-size: 2rem;
      line-height: 140%;
      font-family: 'Poppins', sans-serif;
    }
  }
`
