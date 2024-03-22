import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/device-breakpoints";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 22.75rem;
  width: 100%;

  margin: 1rem auto 4rem;

  .ingredients {
    width: 100%;
    height: min-content;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    padding: 0.875rem 1rem;

    display: flex;
    column-gap: 1.6rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-size: 1rem;
  }

  h2 {
    margin: 2rem 0;

    font-size: 2rem;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 68rem;
    width: 100%;

    margin: 0 auto;

    .ingredients {
      align-items: center;
      flex-wrap: wrap;
      padding: 0.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 2.5rem;
  }
`;

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;

  input[type="file"] {
    display: none;
  }

  span {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.5rem;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > label {
      padding: 1rem 2rem;

      width: 14.3125rem;
      height: 3rem;

      flex-direction: row;

      font-size: 0.875rem;
    }
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    & + div {
      margin-top: 2rem;
    }
  }
`;

export const WrapperInputWithLabel = styled.div`
  width: 100%;

  > label {
    margin: 2rem 0 1rem;
    display: inline-block;

    font-size: 1.1428571429rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > label {
      margin: 0;
      margin-bottom: 1rem;
      display: inline-block;
    }
    > div {
      height: 3rem;
    }

    input[type="file"] {
      display: none;
    }

    .photo-upload {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      width: 14.3125rem;
      height: 3rem;
    }
  }
`;

export const WrapperSelect = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin: 2rem 0 1rem;
    display: inline-block;

    font-size: 1.1428571429rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  select {
    border: none;
    cursor: pointer;

    width: 100%;
    padding: 1rem 1.3333333333rem;
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > label {
      margin: 0;
      margin-bottom: 1rem;
      display: inline-block;
    }

    select {
      min-width: 20.75rem;
      padding: 0.8125rem 1rem;

      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;

export const DescriptionAndButtons = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 2rem 0 1.5rem;

    font-size: 1.1428571429rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > button {
    margin-top: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    label {
      margin: 0 0 1rem 0;
    }

    > button {
      width: 10.75rem;
      height: 3rem;
      align-self: flex-end;
    }

    margin-bottom: 6rem;
  }
`;
