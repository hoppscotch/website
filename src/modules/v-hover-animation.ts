import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.directive('hover-animation', (el) => {
    el.pointermove = (ev: MouseEvent) => {
      if (el.classList.contains('card-hover-animation')) {
        const rect = el.getBoundingClientRect()

        el.style.setProperty('--x', `${ev.clientX - rect.left}`)
        el.style.setProperty('--y', `${ev.clientY - rect.top}`)
      }
    }
    document.body.addEventListener('pointermove', el.pointermove)
    // document.body.removeEventListener('pointermove', el.pointermove)
  })
}
