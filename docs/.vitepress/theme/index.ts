// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ImageCarousel from './components/ImageCarousel.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 註冊全域組件
    app.component('ImageCarousel', ImageCarousel)
  },
  setup() {
    // 預設使用 light mode，忽略系統偏好設定
    onMounted(() => {
      const savedTheme = localStorage.getItem('vitepress-theme-appearance')
      if (!savedTheme) {
        // 如果沒有儲存的偏好，預設設為 light
        document.documentElement.classList.remove('dark')
        localStorage.setItem('vitepress-theme-appearance', 'light')
      }
    })
  }
} satisfies Theme
