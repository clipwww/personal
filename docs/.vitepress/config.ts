import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "簡爾廷 David Jian",
  description: "前端工程師 | 個人履歷與專案經歷",
  lang: 'zh-TW',
  base: '/personal/', // GitHub Pages 部署路徑
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/personal/favicon.svg' }],
    // Google Analytics 4
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-716HTRZPBP' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-716HTRZPBP');`
    ]
  ],
  // 預設使用 light mode，忽略系統偏好設定
  appearance: {
    // @ts-expect-error not fully supported yet
    initialValue: 'light'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '履歷', link: '/resume' },
      { text: '專案經歷', link: '/projects/' },
      { text: '個人專案', link: '/side-projects' },
      { text: '部落格', link: 'https://clipwww.github.io/blog/' }
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
  lastUpdated: true,
  // Mermaid 設定
  mermaid: {
    // https://mermaid.js.org/config/setup/modules/mermaidAPI.html
  },
})
