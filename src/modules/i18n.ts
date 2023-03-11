import type { I18nOptions } from "vue-i18n"
import { createI18n } from "vue-i18n"
import messages from "@intlify/unplugin-vue-i18n/messages"
import type { UserModule } from "~/types"

export const install: UserModule = ({ app }) => {
  const i18n = createI18n(<I18nOptions>{
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages,
  })

  app.use(i18n)
}
