import { component$, useClientEffect$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Button from '~/components/button'
import Section from '~/components/section'
import IndexCss from './index.css'
import AOS from 'aos'
import AOSCss from 'aos/dist/aos.css'

export default component$(() => {
  useStyles$(IndexCss)
  useStyles$(AOSCss)

  useClientEffect$(() => {
    AOS.init({ disable: 'phone' })
  })

  return (
    <section id='hero' class='w-full pb-24'>
      <Section>
        <div class='col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left'>
          <span data-aos='fade-right' data-aos-once='true' class='text-base text-gradient font-semibold uppercase'>
            give hope for homeless
          </span>
          <h1
            data-aos='fade-right'
            data-aos-once='true'
            class='text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10'>
            Helping each <span class='text-header-gradient'>other can make</span> world better
          </h1>
          <p data-aos='fade-down' data-aos-once='true' data-aos-delay='300' class='paragraph hidden sm:block'>
            We Seek out world changers and difference makers around the globe,and equip them to fulfill their unique purpose.
          </p>
          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='700'
            class='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2'>
            <Button class='max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white'>Donate now</Button>
            <Button class='max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center'>
              <span>Know About Us</span>
            </Button>
          </div>
        </div>
        <div class='hidden sm:block col-span-12 lg:col-span-6'>
          <div class='w-full flex justify-center items-center h-full'>
            <img data-aos='fade-up' data-aos-once='true' src='/img/hero-image.png' class='-mt-4 w-full max-w-[480px]' alt='' />
          </div>
        </div>
        <img
          data-aos='fade-up'
          data-aos-delay='300'
          src='/img/pattern/ellipse-1.png'
          class='hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6'
        />
        <img
          data-aos='fade-up'
          data-aos-delay='300'
          src='/img/pattern/ellipse-2.png'
          class='hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6'
        />
        <img data-aos='fade-up' data-aos-delay='300' src='/img/pattern/ellipse-3.png' class='hidden sm:block absolute bottom-56 right-24 w-6' />
        <img
          data-aos='fade-up'
          data-aos-delay='300'
          src='/img/pattern/star.png'
          class='hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8'
        />
      </Section>
    </section>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik - Home',
}
