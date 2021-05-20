import { DictItem } from '@/app-config/dicts'

export type UrbanConfig = DictItem<{
  resultnum: number
}>

export default (): UrbanConfig => ({
  lang: '010000000',
  selectionLang: {
    english: true,
    chinese: true,
    italian: false,
    japanese: false,
    korean: false,
    french: false,
    spanish: false,
    deutsch: false,
    others: true,
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
  preferredHeight: 380,
  selectionWC: {
    min: 1,
    max: 5
  },
  options: {
    resultnum: 4
  }
})
