import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.8125rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 0 1.625rem;

  p {
    font-family: 'Popins', sans-serif;
    font-size: 0.75rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 auto;
    padding: 0 7rem;
  }
`
