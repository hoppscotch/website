import type { UserModule } from "~/types"

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const animate = (star: HTMLElement) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`)
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`)

  star.style.animation = "none"
  // eslint-disable-next-line no-unused-expressions
  star.offsetHeight
  star.style.animation = ""
}

export const install: UserModule = ({ app }) => {
  app.directive("magic-hover-animation", (el) => {
    el.classList.add("magic-text")

    let timeouts: NodeJS.Timeout[] = []
    let intervals: NodeJS.Timeout[] = []

    el.onmouseenter = () => {
      let index = 1

      for (const star of document.getElementsByClassName(
        "magic-star"
      ) as HTMLElement[]) {
        timeouts.push(
          setTimeout(() => {
            animate(star)

            intervals.push(setInterval(() => animate(star), 1000))
          }, index++ * 300)
        )
      }
    }

    el.onmouseleave = () => {
      for (const t of timeouts) clearTimeout(t)
      for (const i of intervals) clearInterval(i)

      timeouts = []
      intervals = []
    }

    // for(const star of document.getElementsByClassName("magic-star")) {
    //   setTimeout(() => {
    //     animate(star)

    //     setInterval(() => animate(star), 1000)
    //   }, index++ * (interval / 3))
    // }
  })
}
