import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/device-breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme, $isNew }) => ($isNew ? "transparent" : theme.COLORS.LIGHT_600)};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  padding: 0.5rem;

  border-radius: 8px;

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;

    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_100};

    font-size: 1rem;

    cursor: pointer;
  }

  > input {
    height: 2rem;

    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_00};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 2rem;
  }
`