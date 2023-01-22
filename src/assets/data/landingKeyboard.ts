import download from "~icons/lucide/download"
import copy from "~icons/lucide/copy"
import search from "~icons/lucide/search"
import minimize from "~icons/lucide/minimize-2"
import help from "~icons/lucide/help-circle"
import save from "~icons/lucide/save"
import send from "~icons/lucide/send"
import zap from "~icons/lucide/zap"

export const shortcuts = [
  {
    keys: ["commandKeyRight", "kKey"],
    description: "Open shortcuts",
    active: false,
    icon: zap,
  },
  {
    keys: ["commandKeyLeft", "returnKey"],
    description: "Send request",
    active: false,
    icon: send,
  },
  {
    keys: ["commandKeyRight", "sKey"],
    description: "Save request",
    active: false,
    icon: save,
  },
  {
    keys: ["commandKeyLeft", "jKey"],
    description: "Download response",
    active: false,
    icon: download,
  },
  {
    keys: ["commandKeyLeft", "dotKey"],
    description: "Copy response to clipboard",
    active: false,
    icon: copy,
  },
  {
    keys: ["slashKey"],
    description: "Command or search",
    active: false,
    icon: search,
  },
  {
    keys: ["shiftRightKey", "questionmarkKey"],
    description: "Help menu",
    active: false,
    icon: help,
  },
  {
    keys: ["escKey"],
    description: "Close current window",
    active: false,
    icon: minimize,
  },
]
