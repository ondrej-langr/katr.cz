import './styles/index.scss'
import '@fortawesome/fontawesome-free/js/all'
import { initNavLogic } from './navigation'

declare global {
    interface Window {
        Alpine: any
    }
}

import './lib/alpine'

// Runs when document is ready
;(() => {
    initNavLogic()
})()
