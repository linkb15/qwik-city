import { component$ } from '@builder.io/qwik'
import { DocumentHead, QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'

import './global.css'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet='utf-8' />
        <RouterHead />
      </head>
      <body lang='en'>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
  ],
}
