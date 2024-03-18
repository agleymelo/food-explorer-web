import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1rem 0.75rem;

  border-radius: 0.5rem;

  > svg {
    margin-right: 0.875rem;
  }

  > input {
    background: none;
    border: none;

    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`