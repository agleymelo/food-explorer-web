import styled from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.8125rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 1.8125rem 1.6875rem;

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
