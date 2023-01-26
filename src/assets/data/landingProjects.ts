import palette from "~icons/lucide/palette"
import browser from "~icons/lucide/globe"
import extension from "~icons/lucide/package"
import cli from "~icons/lucide/terminal-square"
import server from "~icons/lucide/server"

export const projects = [
  {
    title: "web",
    description: "Open source API development ecosystem",
    styles: "lg:row-span-10",
    icon: browser,
    language: "Vue",
    color: "bg-green-500",
    link: "https://github.com/hoppscotch/hoppscotch",
    stars: "49.5k",
  },
  {
    title: "cli",
    description: "Hoppscotch CLI, for your terminal",
    styles: "lg:row-span-5",
    icon: extension,
    language: "TypeScript",
    color: "bg-blue-500",
    link: "https://github.com/hoppscotch/hoppscotch/tree/main/packages/hoppscotch-cli",
    stars: "1.5k",
  },
  {
    title: "embeds",
    description: "Embeddable instances, for your website",
    styles: "lg:row-span-5",
    icon: cli,
    language: "Go",
    color: "bg-sky-500",
    link: "https://github.com/hoppscotch/hoppscotch/tree/main/packages/hoppscotch-cli",
    stars: "1.5k",
  },
  {
    title: "native",
    description: "Download our native apps for Windows, macOS, and Linux",
    styles: "lg:row-span-5",
    icon: server,
    language: "Rust",
    color: "bg-red-500",
    link: "https://github.com/hoppscotch/hoppscotch/tree/main/packages/hoppscotch-cli",
    stars: "1.5k",
  },
  {
    title: "ui",
    description: "UI components for built by Hoppscotch team for everyone.",
    styles: "lg:row-span-5",
    icon: palette,
    language: "CSS",
    color: "bg-purple-500",
    link: "https://github.com/hoppscotch/hoppscotch/tree/main/packages/hoppscotch-common",
    stars: "1.5k",
  },
]
