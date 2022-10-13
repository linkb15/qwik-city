import { component$ } from '@builder.io/qwik'

export default component$((props: { class?: string }) => {
  return (
    <div class={['col-span-12 lg:col-span-6', props.class || '']}>
      <div class='w-full sm:mt-20 xl:mt-0'>
        <img src='/img/advanced-trading-tools.webp' class='w-full' alt='' />
      </div>
    </div>
  )
})
