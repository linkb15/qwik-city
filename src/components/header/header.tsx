import { component$, useStore } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import Button from '../button'
import NavLink from '../nav-link'
import clsx from 'clsx'

export default component$(() => {
  const state = useStore({
    open: false,
    dropdownNavbar: false,
  })

  return (
    <nav id='navbar' class='relative z-10 w-full text-neutral-800'>
      <div class='flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4'>
        <div class='flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8'>
          <div class='w-full flex flex-row items-center justify-between py-6'>
            <Link href='/'>
              <img src='/img/logo/nefa.svg' class='w-24 xl:w-28' alt='Nefa Logo' />
            </Link>
            <button class='rounded-lg lg:hidden focus:outline-none focus:shadow-outline' onClick$={() => (state.open = !state.open)}>
              <iconify-icon icon={state.open ? 'mdi:close' : 'mdi:segment'} width={24} height={24} />
            </button>
          </div>
          <ul
            class={clsx(
              state.open ? 'flex' : 'hidden lg:flex',
              'w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0'
            )}>
            <NavLink name='Introduction' url='#intro' />
            <NavLink name='Blog' url='/blog' />
            <NavLink name='Villages' url='#' />
            <NavLink name='Testimony' url='#testimony' />
            <li class='relative group'>
              <button
                class='md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center'
                onClick$={() => (state.dropdownNavbar = !state.dropdownNavbar)}>
                <span>Products</span>

                <iconify-icon icon={state.dropdownNavbar ? 'mdi:chevron-up' : 'mdi:chevron-down'} width={24} height={24} />
              </button>
              <transition name='transform-fade-down'>
                {state.dropdownNavbar && (
                  <ul class='flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0'>
                    <li>
                      <a href='#' class='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                        Exchange
                      </a>
                    </li>
                    <li>
                      <a href='#' class='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                        Wallet
                      </a>
                    </li>
                    <li>
                      <a href='#' class='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                        Explorer
                      </a>
                    </li>
                    <li>
                      <a href='#' class='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                        Charts
                      </a>
                    </li>
                  </ul>
                )}
              </transition>
            </li>
          </ul>
        </div>
        <div
          // :class="[open ? 'flex' : 'hidden lg:flex']"
          class={clsx(state.open ? 'flex' : 'hidden lg:flex', 'space-x-3')}>
          <Button class='px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]'> Login </Button>
          <Button class='px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white'> Sign Up </Button>
        </div>
      </div>
    </nav>
  )
})
