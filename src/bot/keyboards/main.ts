import { InlineKeyboard } from 'grammy'
import ISO6391 from 'iso-639-1'
import { changeLanguageData } from '#root/bot/callback-data/change-language.js'
import type { Context } from '#root/bot/context.js'
import { i18n } from '#root/bot/i18n.js'
import { chunk } from '#root/bot/helpers/keyboard.js'
import { dipositData } from '#root/bot/callback-data/deposit.js'
import { backData } from '#root/bot/callback-data/back.js'

export async function mainKeyboard(ctx: Context) {
  // const currentLocaleCode = await ctx.i18n.getLocale()

  // const getLabel = (code: string) => {
  //   const isActive = code === currentLocaleCode

  //   return `${isActive ? '✅ ' : ''}${ISO6391.getNativeName(code)}`
  // }
  const mainKeyboard = new InlineKeyboard()
    .text(ctx.t('💰 Balance'), 'balance')
    .row()
    .text(ctx.t('🔺 Withdraw'), 'withdraw')
    .text(ctx.t('🟢 Deposit'), dipositData.pack({ name: 'deposit' }))
    .row()
    .text(ctx.t('🎁 Referral '), 'referral')
    .text(ctx.t('📞 Support'), 'support')
    .row()
    .text(ctx.t('⚙️ Set Wallet '), 'setwallet')
    .text(ctx.t('🏴󠁧󠁢󠁥󠁮󠁧󠁿 Change Language'), 'language')
    .row()
    .text(ctx.t('🔙 Back'), 'language')

  return mainKeyboard
  // return InlineKeyboard.from(chunk(),2)
}
