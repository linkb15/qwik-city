import { component$ } from '@builder.io/qwik'
import NavLink from './nav-link'

export default component$(() => {
  return (
    <footer class='max-w-screen-xl px-8 mx-auto'>
      <div class='w-full border-y border-[#DDDDDD]'>
        <div class='w-full flex flex-wrap space-y-6'>
          <div class='w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-16 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]'>
            <div class='mb-6 sm:mb-0 gap-6 flex flex-col'>
              <a href='#'>
                <img
                  src='/img/logo/nefa.svg'
                  class='w-24 -mt-2'
                  alt='Nefa Logo'
                />
              </a>
              <ul class='space-y-2 font-normal text-xs text-gray-400'>
                <li>City of Industry, Ca 91715</li>
                <li>P.O. Box 92397</li>
                <li>Tax-approved 501(c)3 Charity</li>
                <li>EIN #82-1958776</li>
              </ul>
              <ul class='space-x-2 flex font-normal text-xs text-gray-400'>
                <li>
                  <a
                    href='https://www.facebook.com/marysmissionariesinc'
                    class='hover:text-gray-600'
                    target='_blank'
                    rel='noreferrer noopener'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      preserveAspectRatio='xMidYMid meet'
                      viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/marysmissionaries/'
                    class='hover:text-gray-600'
                    target='_blank'
                    rel='noreferrer noopener'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      preserveAspectRatio='xMidYMid meet'
                      viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class='w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 xl:border-r border-[#DDDDDD]'>
            <ul class='space-y-4'>
              <NavLink name='Our Projects' url='#' />
              <NavLink name='Our Strategy' url='#' />
              <NavLink name='Our History' url='#' />
              <NavLink name='Our Patron' url='#' />
              <NavLink name='Annual Report' url='#' />
              <NavLink name='About Us' url='#' />
              <NavLink name='Blog' url='/blog' />
            </ul>
          </div>
          <div class='w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r border-[#DDDDDD]'>
            <ul class='space-y-4'>
              <NavLink name='Help Center' url='#' />
              <NavLink name='Contact Us' url='#' />
              <NavLink name='System Status' url='#' />
              <NavLink name='Area of Availability' url='#' />
              <NavLink name='Privacy Policy' url='#' />
            </ul>
          </div>
          <div class='sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 border-t sm:border-t-0 border-[#DDDDDD]'>
            <h5 class='text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline'>
              Newsletter
            </h5>
            <p class='text-sm text-[#666666] focus:outline-none focus:shadow-outline'>
              Never miss anything crypto when <br class='sm:hidden' />
              you're on the go
            </p>
            <div class='flex items-center space-x-2'>
              <input
                type='text'
                class='w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]'
                placeholder='Enter your email'
              />
              <button class='bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class='py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900'>
        &copy; Copyright {new Date().getFullYear()} Mary’s Missionaries Inc. All
        rights reserved
      </div>
    </footer>
  )
})
