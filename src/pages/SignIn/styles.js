import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  max-width: 22rem;
  width: 100%;

  margin: 0 auto;
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

  > label {
    font-size: 1.33333333333rem;

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

    font-size: 1.16666666667rem;
    font-weight: 500;
    line-height: 2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
