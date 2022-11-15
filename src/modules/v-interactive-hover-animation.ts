import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.directive('interactive-hover-animation', (el) => {
    el.classList.add('interactive-hover-animation-container')
    el.onmousemove = (ev: MouseEvent) => {
      for (const card of document.getElementsByClassName('interactive-hover-animation')) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--x', `${ev.clientX - rect.left}px`)
        card.style.setProperty('--y', `${ev.clientY - rect.top}px`)
      }
    }
  })
}
