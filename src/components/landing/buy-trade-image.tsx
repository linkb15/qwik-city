import { component$ } from '@builder.io/qwik'

export default component$((props: { class?: string }) => {
  return (
    <div class={['col-span-12 lg:col-span-6', props?.class || '']}>
      <div class='w-full'>
        <img src='/img/buy-and-trade.webp' class='mt-4 sm:-mt-4' alt='' />
      </div>
    </div>
  )
})
