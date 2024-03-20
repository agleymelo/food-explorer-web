import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 10.75rem;

  border: 0;

  padding: 1rem;
  resize: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  font-size: 1rem;
  

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;