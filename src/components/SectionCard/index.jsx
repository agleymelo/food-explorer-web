import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { Card } from '../Card'

import * as S from './styles'

export function SectionCard({ title, data, ...rest }) {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 320px)': {
        loop: true,
        slidesPerView: 1,
        spacing: 10,
        slides: {
          perView: 1,
        },
      },
      '(min-width: 425px)': {
        loop: true,
        slidesPerView: 1,
        spacing: 20,
      },
      '(min-width: 768px)': {
        loop: true,
        slidesPerView: 3,
        spacing: 40,
        slides: {
          perView: 2,
        },
      },
      '(min-width: 1024px)': {
        loop: true,
        slidesPerView: 4,
        // spacing: 40,
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  })

  return (
    <S.Container>
      <h2>{title}</h2>

      <S.Carousel ref={sliderRef} className="keen-slider">
        <Card className="keen-slider__slide" />
        <Card className="keen-slider__slide" />
        <Card className="keen-slider__slide" />
        <Card className="keen-slider__slide" />
        <Card className="keen-slider__slide" />
      </S.Carousel>
    </S.Container>
  )
}
