import { component$, useClientEffect$, useStyles$ } from '@builder.io/qwik'
import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCSS from './swiper.css'

export default component$(() => {
  useStyles$(SwiperCSS)
  const items = [
    { name: 'Danielle', title: 'Frontend Developer' },
    { name: 'Evelyn', title: 'Project Manager' },
    { name: 'Marrianne', title: "Founder of Mary's Marrianne" },
  ]
  useClientEffect$(() => {
    new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      loop: true,
      loopFillGroupWithBlank: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: { clickable: true, el: '.swiper-pagination' },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  })

  return (
    <div class='swiper'>
      <div class='swiper-wrapper'>
        {items.map((item) => (
          <div class='swiper-slide'>
            <div class='px-4 pb-10 w-80 flex justify-center items-center gap-2 flex-col'>
              <img
                src=''
                class='h-16 w-16 rounded-full border max-w-max'
                alt=''
              />
              <h2 class='font-bold text-lg'>{item.name}</h2>
              <caption class='font-medium text-sm'>{item.title}</caption>
              <p class='text-xs'>
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican
                eel. Minnow snoek icefish velvet-belly shark, California halibut
                round stingray northern sea robin. Southern grayling
                trout-perchSharksucker sea toad candiru rocket danio tilefish
                stingray deepwater stingray Sacramento splittail, Canthigaster
                rostrata.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div class='swiper-pagination'></div>

      <div class='swiper-button-prev'></div>
      <div class='swiper-button-next'></div>
    </div>
  )
})
