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
})()
