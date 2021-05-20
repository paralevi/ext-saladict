import { DictItem } from '@/app-config/dicts'

export type GoogledictConfig = DictItem<{
  enresult: boolean
}>

export default (): GoogledictConfig => ({
  lang: '111100000',
  selectionLang: {
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
  preferredHeight: 240,
  selectionWC: {
    min: 1,
    max: 5
  },
  options: {
    enresult: true
  }
})
