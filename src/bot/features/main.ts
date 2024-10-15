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

feature.command('main', logHandle('command-main'), async (ctx) => {
  return ctx.reply(ctx.t('welcome'), {
    reply_markup: await mainKeyboard(ctx),
  })
})

feature.callbackQuery('main', logHandle('command-main'), async (ctx) => {
  await ctx.answerCallbackQuery('Going To Main')
  return ctx.editMessageText(ctx.t('welcome'), {
    reply_markup: await mainKeyboard(ctx),
  })
})
export { composer as MenuFeature }
