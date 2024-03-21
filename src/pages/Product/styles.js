import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 22rem;
  margin: 1rem auto 4.5rem;

  > a {
    display: flex;
    align-items: center;

    font-size: 1.875rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > picture {
    margin-top: 1rem;

    > img {
      width: 18rem;
      height: 18rem;

      object-fit: cover;
    }
  }
`

export const ProductDetails = styled.div`
  margin-top: 1.3333333333rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2.25rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;

    text-align: center;

    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
export const ProductTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap: 2rem;
`

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.5rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
      background: none;
      border: none;

      svg {
        width: 2.25rem;
        height: 2.25rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > button {
    width: 13rem;
    height: 3rem;
  }
`