import { getCurrentScrollPos } from '../utils'

export const initNavLogic = () => {
    let prevScrollTop = 0
    const shrinkHeaderAfter = 30
    const navBar = document.querySelector('html>body>header>nav')

    function navOnScroll() {
        let scrollTop = window.pageYOffset

        if (!navBar) return

        scrollTop > prevScrollTop
            ? navBar.classList.add('hideNav')
            : navBar.classList.remove('hideNav')

        prevScrollTop = scrollTop
    }

    const pageOnScrollHeaderShrink = () => {
        const scroll = getCurrentScrollPos()
        if (scroll >= shrinkHeaderAfter) {
            navBar?.classList.add('shrink')
        } else {
            navBar?.classList.remove('shrink')
        }
    }

    window.addEventListener('scroll', navOnScroll)
    window.addEventListener('scroll', pageOnScrollHeaderShrink)
}
