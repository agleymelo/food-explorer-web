import styled from "styled-components";

export const Container = styled.button`
  height: 4rem;
  width: 100%;

  border: 0;
  border-radius: 5px;

  padding: 1rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  font-size: 1.16666666667rem;
  font-weight: 500;
  line-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`