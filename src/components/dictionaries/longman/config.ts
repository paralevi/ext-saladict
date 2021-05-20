import { DictItem } from '@/app-config/dicts'

export type LongmanConfig = DictItem<{
  wordfams: boolean
  collocations: boolean
  grammar: boolean
  thesaurus: boolean
  examples: boolean
  bussinessFirst: boolean
  related: boolean
}>

export default (): LongmanConfig => ({
  lang: '100000000',
  selectionLang: {
    english: true,
    chinese: false,
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
  preferredHeight: 265,
  selectionWC: {
    min: 1,
    max: 5
  },
  options: {
    wordfams: false,
    collocations: true,
    grammar: true,
    thesaurus: true,
    examples: true,
    bussinessFirst: true,
    related: true
  }
})
