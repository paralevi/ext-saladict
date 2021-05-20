import { DictItem } from '@/app-config/dicts'

export type NaverConfig = DictItem<{
  hanAsJa: boolean
  korAsJa: boolean
}>

export default (): NaverConfig => ({
  lang: '010110000',
  selectionLang: {
    english: false,
    chinese: true,
    italian: false,
    japanese: true,
    korean: true,
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
  preferredHeight: 465,
  selectionWC: {
    min: 1,
    max: 10
  },
  options: {
    hanAsJa: false,
    korAsJa: false
  }
})
