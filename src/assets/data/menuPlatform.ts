import globe from "~icons/lucide/globe"
import cli from "~icons/lucide/package"
import terminal from "~icons/lucide/terminal-square"
import server from "~icons/lucide/server"

export const platforms = [
  {
    name: "header.menu.platform.links.web.name",
    description: "header.menu.platform.links.web.description",
    icon: globe,
    link: "/platforms/web",
    disabled: false,
    tag: "",
    iconStyle: "text-teal-500"
  },
  {
    name: "header.menu.platform.links.cli.name",
    description: "header.menu.platform.links.cli.description",
    icon: cli,
    link: "/platforms/cli",
    disabled: false,
    tag: "",
    iconStyle: "text-sky-500"
  },
  {
    name: "header.menu.platform.links.embeds.name",
    description: "header.menu.platform.links.embeds.description",
    icon: terminal,
    link: "/platforms/embeds",
    disabled: true,
    tag: "action.comming_soon",
    iconStyle: "text-violet-500"
  },
  {
    name: "header.menu.platform.links.native.name",
    description: "header.menu.platform.links.native.description",
    icon: server,
    link: "/platforms/native",
    disabled: true,
    tag: "action.comming_soon",
    iconStyle: "text-fuchsia-500"
  },
]
