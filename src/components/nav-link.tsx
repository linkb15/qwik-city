import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export default component$((props: { url: string; name: string }) => {
  return (
    <li class='w-full'>
      <Link
        class='md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'
        href={props.url}>
        {props.name}
      </Link>
    </li>
  )
})
