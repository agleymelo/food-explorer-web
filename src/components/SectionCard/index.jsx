import { Minus, Plus, Heart, Pencil } from '@phosphor-icons/react'

import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'

import maskProduct from '../../assets/products/mask-group-1.png'

import { Button } from '../Button'

import * as S from './styles'

export function SectionCard({ title, data, ...rest }) {
  const isAdmin = true

  return (
    <S.Container>
      <h2>{title}</h2>

      <S.Cards>
        <Swiper
          options
          grabCursor={true}
          loop={true}
          modules={[Navigation, A11y, Pagination]}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.20': {
              slidesPerView: 4,
              spaceBetween: 160,
            },
          }}
        >
          <SwiperSlide>
            <S.Card>
              <picture>
                <img src={maskProduct} alt="" />
                {isAdmin ? <Pencil /> : <Heart />}
              </picture>
              <h3>Salada Ravanello &gt;</h3>
              <span>R$ 49,97</span>

              <div>
                <Minus />
                <span>01</span>
                <Plus />
              </div>

              <Button title="incluir" />
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <picture>
                <img src={maskProduct} alt="" />
                {isAdmin ? <Pencil /> : <Heart />}
              </picture>
              <h3>Salada Ravanello sdasd &gt;</h3>
              <span>R$ 49,97</span>

              <div>
                <Minus />
                <span>01</span>
                <Plus />
              </div>

              <Button title="incluir" />
            </S.Card>
          </SwiperSlide>
        </Swiper>
      </S.Cards>
    </S.Container>
  )
}
