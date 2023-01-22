import type { I18nOptions } from "vue-i18n"
import { createI18n } from "vue-i18n"
import type { UserModule } from "~/types"

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(import.meta.glob("../../locales/*.json", { eager: true })).map(
    ([key, value]) => {
      const json = key.endsWith(".json")
      return [key.slice(14, json ? -5 : -4), value.default]
    }
  )
)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n(<I18nOptions>{
    legacy: false,
    locale: "en",
    messages,
  })

  app.use(i18n)
}
