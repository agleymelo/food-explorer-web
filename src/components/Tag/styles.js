import styled from "styled-components";

export const Container = styled.span`
  padding: 4px 8px;
  border-radius: 5px;
  
  font-size: 1rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`