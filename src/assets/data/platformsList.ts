import browser from "~icons/lucide/globe"
import extension from "~icons/lucide/package"
import cli from "~icons/lucide/terminal-square"
import server from "~icons/lucide/server"

export const platforms = [
  {
    icon: browser,
    title: "platforms.items.web.title",
    description: "platforms.items.web.description",
    link: { title: "Learn more", target: "https://hoppscotch.io" },
  },
  {
    icon: cli,
    title: "platforms.items.cli.title",
    description: "platforms.items.cli.description",
    link: {
      title: "Learn more",
      target: "https://github.com/hoppscotch/hopp-cli",
    },
  },
  {
    icon: extension,
    title: "platforms.items.extension.title",
    description: "platforms.items.extension.description",
    link: {
      title: "Learn more",
      target: "https://github.com/hoppscotch/hoppscotch-extension",
    },
  },
  {
    icon: server,
    title: "platforms.items.native.title",
    description: "platforms.items.native.description",
    link: {
      title: "Learn more",
      target: "https://github.com/hoppscotch/hoppscotch",
    },
  },
]
