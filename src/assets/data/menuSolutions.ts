import layers from "~icons/lucide/layers"
import code from "~icons/lucide/code-2"
import flask from "~icons/lucide/flask-conical"
import file from "~icons/lucide/file-text"
import check from "~icons/lucide/shield-check"
import wrench from "~icons/lucide/wrench"

export const solutions = [
  {
    name: "header.menu.solutions.links.design.name",
    description: "header.menu.solutions.links.design.description",
    icon: layers,
    link: "/solutions/design",
    disabled: false,
    tag: "",
    iconStyle: "text-purple-500"
  },
  {
    name: "header.menu.solutions.links.development.name",
    description: "header.menu.solutions.links.development.description",
    icon: code,
    link: "/solutions/development",
    disabled: false,
    tag: "",
    iconStyle: "text-pink-500"
  },
  {
    name: "header.menu.solutions.links.testing.name",
    description: "header.menu.solutions.links.testing.description",
    icon: flask,
    link: "/solutions/testing",
    disabled: false,
    tag: "",
    iconStyle: "text-fuchsia-500"
  },
  {
    name: "header.menu.solutions.links.documentation.name",
    description: "header.menu.solutions.links.documentation.description",
    icon: file,
    link: "/solutions/documentation",
    disabled: false,
    tag: "",
    iconStyle: "text-blue-500"
  },
  {
    name: "header.menu.solutions.links.deployment.name",
    description: "header.menu.solutions.links.deployment.description",
    icon: check,
    link: "/solutions/deployment",
    disabled: true,
    tag: "action.comming_soon",
    iconStyle: "text-indigo-500"
  },
  {
    name: "header.menu.solutions.links.maintenance.name",
    description: "header.menu.solutions.links.maintenance.description",
    icon: wrench,
    link: "/solutions/maintenance",
    disabled: true,
    tag: "action.comming_soon",
    iconStyle: "text-cyan-500"
  },
]
