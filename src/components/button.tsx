import { component$, Slot } from '@builder.io/qwik'

export default component$((props: { class?: string }) => {
  return (
    <button
      class={[
        props?.class || '',
        'text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300',
      ]}>
      <Slot />
    </button>
  )
})
