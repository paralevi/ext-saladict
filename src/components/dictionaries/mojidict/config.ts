import { DictItem } from '@/app-config/dicts'

export type LianganConfig = DictItem

export default (): LianganConfig => ({
  lang: '100100000',
  selectionLang: {
    english: false,
    chinese: true,
    italian: false,
    japanese: true,
    korean: false,
    french: false,
    spanish: false,
    deutsch: false,
    others: false,
    matchAll: false
  },
  defaultUnfold: {
    english: true,
    chinese: true,
    italian: false,
    japanese: true,
    korean: true,
    french: true,
    spanish: true,
    deutsch: true,
    others: true,
    matchAll: false
  },
  preferredHeight: 265,
  selectionWC: {
    min: 1,
    max: 5
  }
})
