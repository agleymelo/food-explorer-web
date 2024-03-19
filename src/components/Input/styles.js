import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
    margin-left: 1rem;

    height: 2rem;
    width: 2rem;
  }

  > input {
    background: none;
    border: none;

    font-size: 1rem;
    padding: 1rem 0.875rem;

    width: 100%;
    height: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }


  }
`