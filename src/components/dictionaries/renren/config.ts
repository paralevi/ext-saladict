import { DictItem } from '@/app-config/dicts'

export type RenrenConfig = DictItem

export default (): RenrenConfig => ({
  lang: '110000000',
  selectionLang: {
    english: true,
    chinese: true,
    italian: false,
    japanese: false,
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
  preferredHeight: 400,
  selectionWC: {
    min: 1,
    max: 999
  }
})
