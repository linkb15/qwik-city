import { component$, useStore } from '@builder.io/qwik'

export default component$(
  ({
    accordion,
  }: {
    accordion: {
      title: string
      description: string
    }
  }) => {
    const state = useStore({
      selected: false,
    })
    return (
      <li class='relative border-b-2 border-gray-200'>
        <button
          type='button'
          class='w-full py-4 text-left'
          onClick$={() => (state.selected = !state.selected)}>
          <div class='flex items-center justify-between'>
            <span class='font-medium'>{accordion.title}</span>
            {state.selected ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z'
                />
              </svg>
            )}
          </div>
        </button>

        <transition name='slide'>
          {state.selected && (
            <div
              class='relative overflow-hidden transition-all duration-700'
              style=''>
              <div class='py-2'>
                <p class='text-sm text-gray-700 tracking-wide leading-relaxed'>
                  {accordion.description}
                </p>
              </div>
            </div>
          )}
        </transition>
      </li>
    )
  }
)
