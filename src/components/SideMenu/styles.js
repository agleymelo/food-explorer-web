import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/device-breakpoints"

export const MenuAsideMobile = styled.aside`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  transform: translateX(-100%);

  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open='true'] {
    transform: translateX(0);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
    visibility: hidden;
  }
`
export const MenuMobileHeader = styled.header`
  height: 7.125rem;
  margin-bottom: 2.25rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 3.5rem 1.75rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;

    > svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > strong {
    font-size: 1.375rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const MenuMobileContent = styled.div`
  max-width: 23.25rem;
  width: 100%;

  margin: 0 auto;

  > div {
    margin-bottom: 2.25rem;
  }
`

export const MenuMobileButtonAction = styled.div`
  height: 3.375rem;
  width: 100%;

  padding: 0.625rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};

  button {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    line-height: 140%;
  }
`
