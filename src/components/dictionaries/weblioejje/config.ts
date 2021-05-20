import { DictItem } from '@/app-config/dicts'

export type VocabularyConfig = DictItem

export default (): VocabularyConfig => ({
  lang: '100100000',
  selectionLang: {
    english: true,
    chinese: false,
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
  preferredHeight: 400,
  selectionWC: {
    min: 1,
    max: 999
  }
})
