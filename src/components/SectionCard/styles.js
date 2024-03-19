import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 4rem;

  > h2 {
    font-size: 1.125rem;
    line-height: 140%;
    font-weight: 500;
  }

  .swiper {
    margin-bottom: 6rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 51.2rem;
    margin: -25.6rem -1rem;

    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-weight: bolder;
    mask-image: none;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-button-prev {
    background: linear-gradient(
      to left,
      transparent 0%,
      ${({ theme }) => theme.COLORS.DARK_900} 100% 0%,
      transparent 100%
    );
  }

  .swiper-button-next {
    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.COLORS.DARK_900} 100% 0%,
      transparent 100%
    );
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export const Cards = styled.section`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
`

export const Card = styled.div`
  max-width: 13.125rem;
  width: 100%;
  height: 18.25rem;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  > picture > img {
    height: 5.5rem;
    width: 5.5rem;
  }

  > h3 {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;
  }

  > span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    svg {
      font-size: 2rem;
    }
  }

  button {
    height: 2rem;
  }
`
