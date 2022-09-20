import './styles/index.scss'
import '@fortawesome/fontawesome-free/js/all'
import { initNavLogic } from './navigation'
import Zooming from 'zooming'
import { lightbox } from './lib/photoswipe'

declare global {
  interface Window {
    Alpine: any
  }
}

import './lib/alpine'

// Runs when document is ready
;(() => {
  initNavLogic()
  new Zooming({
    bgColor: '#262626c9',
  }).listen('.zooming')

  lightbox.init()

  const onTabClick = (e: Event) => {
    window.location.hash = (e.currentTarget as HTMLInputElement).getAttribute(
      'id'
    )!
  }

  document
    .querySelectorAll<HTMLInputElement>('.tabs > input')
    .forEach((elMatch) => {
      elMatch.addEventListener('change', onTabClick)
    })

  if (window.location.hash.startsWith('#tabs-tab--')) {
    document.querySelectorAll<HTMLDivElement>('.tabs').forEach((elMatch) => {
      elMatch
        .querySelectorAll<HTMLInputElement>(':scope > input')
        .forEach((inputEl) => {
          inputEl.checked = false

          if (
            inputEl.getAttribute('id') === window.location.hash.replace('#', '')
          ) {
            inputEl.checked = true
          }
        })
    })
  }
})()
