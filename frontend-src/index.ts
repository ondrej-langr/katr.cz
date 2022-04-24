import './styles/index.scss'
import '@fortawesome/fontawesome-free/js/all'
import { initNavLogic } from './navigation'
import Zooming from 'zooming'

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
})()
