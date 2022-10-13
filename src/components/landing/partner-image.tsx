import { component$ } from '@builder.io/qwik'

export default component$((props: { img: string }) => {
  return (
    <div>
      <img
        src={`/img/partner/${props.img}`}
        class='sm:w-1/2 lg:w-72 mx-auto'
        alt=''
      />
    </div>
  )
})
