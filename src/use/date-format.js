import { dateF } from '@/utils/date'

export default {
  install (App) {
    App.config.globalProperties.$dateF = dateF
  }
}
