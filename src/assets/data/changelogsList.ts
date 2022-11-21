import zap from "~icons/lucide/zap"
import folder from "~icons/lucide/folder"
import code from "~icons/lucide/code"
import layers from "~icons/lucide/layers"
import languages from "~icons/lucide/languages"
import importer from "~icons/lucide/import"
import box from "~icons/lucide/box"

export const changelogs = [
  {
    title: "changelog.items.single_collection.title",
    description: "changelog.items.single_collection.description",
    icon: folder,
    date: new Date("2-8-2022").toDateString(),
    placement: "left",
  },
  {
    title: "changelog.items.snappy_teams.title",
    description: "changelog.items.snappy_teams.description",
    icon: zap,
    date: new Date("2-4-2022").toDateString(),
    placement: "right",
  },
  {
    title: "changelog.items.improved_curl.title",
    description: "changelog.items.improved_curl.description",
    icon: code,
    date: new Date("2-3-2022").toDateString(),
    placement: "left",
  },
  {
    title: "changelog.items.improved_env.title",
    description: "changelog.items.improved_env.description",
    icon: layers,
    date: new Date("1-24-2022").toDateString(),
    placement: "left",
  },
  {
    title: "changelog.items.urlencoded.title",
    description: "changelog.items.urlencoded.description",
    icon: box,
    date: new Date("1-23-2022").toDateString(),
    placement: "right",
  },
  {
    title: "changelog.items.updated_hungarian_translations.title",
    description: "changelog.items.updated_hungarian_translations.description",
    icon: languages,
    date: new Date("1-19-2022").toDateString(),
    placement: "right",
  },
  {
    title: "changelog.items.new_importer.title",
    description: "changelog.items.new_importer.description",
    icon: importer,
    date: new Date("1-14-2022").toDateString(),
    placement: "left",
  },
  {
    title: "changelog.items.openapi_support.title",
    description: "changelog.items.openapi_support.description",
    icon: importer,
    date: new Date("1-11-2022").toDateString(),
    placement: "left",
  },
]
