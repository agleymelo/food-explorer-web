import styled from "styled-components";

export const Container = styled.button`
  height: 4rem;
  width: 100%;

  border: 0;
  border-radius: 5px;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 500;


  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  > svg {
    height: 2rem;
    width: 2rem;
  }
`