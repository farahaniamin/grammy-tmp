import { Composer } from 'grammy'
import { changeLanguageData } from '#root/bot/callback-data/change-language.js'
import type { Context } from '#root/bot/context.js'
import { logHandle } from '#root/bot/helpers/logging.js'
import { i18n } from '#root/bot/i18n.js'
import { createChangeLanguageKeyboard } from '#root/bot/keyboards/change-language.js'
import { mainKeyboard } from '#root/bot/keyboards/main.js'
import { dipositData } from '#root/bot/callback-data/deposit.js'

const composer = new Composer<Context>()

const feature = composer.chatType('private')

feature.callbackQuery(
  dipositData.filter(),
  logHandle('deposit-select'),
  async (ctx) => {
    const { name } = dipositData.unpack(
      ctx.callbackQuery.data,
    )

    // if (i18n.locales.includes(languageCode)) {
    //   await ctx.i18n.setLocale(languageCode)

    // return ctx.editMessageText(ctx.t('deposit'), {
    //   reply_markup: await createChangeLanguageKeyboard(ctx),
    // })
    await ctx.answerCallbackQuery('Deposit Menu')
    return ctx.reply(`You selected ${name}`, {
      reply_markup: await mainKeyboard(ctx),
    })
  },
)

export { composer as depositFeature }
