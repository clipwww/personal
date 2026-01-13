import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "簡爾廷 David Jian",
  description: "前端工程師 | 個人履歷與專案經歷",
  lang: 'zh-TW',
  base: '/personal/', // GitHub Pages 部署路徑
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '履歷', link: '/resume' },
      { text: '專案經歷', link: '/projects/' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: '專案經歷',
          items: [
            { text: '總覽', link: '/projects/' },
            { text: 'RE 紅包 / RE·X', link: '/projects/rex' },
            { text: 'FunNow', link: '/projects/funnow' },
            { text: '蝦米智慧媒體', link: '/projects/whatsmedia' },
            { text: 'SOHO 接案', link: '/projects/soho' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clipwww' }
    ],

    outline: {
      label: '頁面導覽',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    }
  },
  // Mermaid 設定
  mermaid: {
    // https://mermaid.js.org/config/setup/modules/mermaidAPI.html
  },
})
