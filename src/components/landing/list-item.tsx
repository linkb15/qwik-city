import { component$, Slot } from '@builder.io/qwik'

export default component$((props: { title?: string }) => {
  return (
    <li class='space-y-2'>
      <div class='flex items-center space-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 24 24'
          class='text-[#0c66ee]'>
          <path
            fill='currentColor'
            d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z'
          />
        </svg>
        <span>{props.title || ''}</span>
      </div>
      <Slot />
    </li>
  )
})
