import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技术文档",
  description: "全栈工程师技术积累",
  lastUpdated: true,
  ignoreDeadLinks: true,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
  ],
  themeConfig: {
    logo: "/logo.png",
    logoLink: "/",
    outline: {
      level: [2, 3],
      label: "本页导航",
    },
    lightModeSwitchTitle: "切换亮色模式",
    darkModeSwitchTitle: "切换暗色模式",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "菜单",
    lastUpdated: {
      text: '最后更新时间：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示列表详情',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端基础', link: '/frontend/', activeMatch: '/frontend/' },
      { text: 'React', link: '/react/', activeMatch: '/react/' },
      { text: 'Next.js', link: '/nextjs/', activeMatch: '/nextjs/' },
      { text: 'Vue', link: '/vue/', activeMatch: '/vue/' },
      { text: 'Node.js', link: '/nodejs/', activeMatch: '/nodejs/' },
      { text: 'Typescript', link: '/typescript/', activeMatch: '/typescript/' },
      { text: 'Flutter', link: '/flutter/', activeMatch: '/flutter/' },
      { text: 'web3', link: '/web3/', activeMatch: '/web3/' },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/' },
      { text: '其他', link: '/other/', activeMatch: '/other/' },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '概览',
          link: '/frontend/',
        },
        {
          text: '基础问答',
          collapsed: false,
          items: [
            {
              text: 'Q1：从输入 URL 到页面展示',
              link: '/frontend/q1.md',
            },
            {
              text: 'Q2：浏览器渲染原理详解',
              link: '/frontend/q2.md',
            },
            {
              text: 'Q3：`async 与 defer 区别？',
              link: '/frontend/q3.md',
            },
            {
              text: 'Q4：DOCTYPE 的作用',
              link: '/frontend/q4.md',
            },
            {
              text: 'Q5：盒模型',
              link: '/frontend/q5.md',
            },
            {
              text: 'Q6：BFC是什么',
              link: '/frontend/q6.md',
            },
            {
              text: 'Q7：CSS 居中的各种方法',
              link: '/frontend/q7.md',
            },
            {
              text: 'Q8：Flex 布局常见属性',
              link: '/frontend/q8.md',
            },
            {
              text: 'Q9：Grid 与 Flex 区别',
              link: '/frontend/q9.md',
            },
            {
              text: 'Q10：移动端 1px 边框变粗？',
              link: '/frontend/q10.md',
            },
            {
              text: 'Q11：JS 数据类型、类型运算符',
              link: '/frontend/q11.md',
            },
            {
              text: 'Q12：原型与原型链是什么？',
              link: '/frontend/q12.md',
            },
            {
              text: 'Q13：作用域与闭包详解',
              link: '/frontend/q13.md',
            },
            {
              text: 'Q14：`this` 指向的确定规则',
              link: '/frontend/q14.md',
            },
            {
              text: 'Q15：事件循环（Event Loop）',
              link: '/frontend/q15.md',
            },
            {
              text: 'Q16：异步编程的演进',
              link: '/frontend/q16.md',
            },
            {
              text: 'Q17：ES6+ 重要新特性详解',
              link: '/frontend/q17.md',
            },
            {
              text: 'Q18：HTTP 协议版本、状态码',
              link: '/frontend/q18.md',
            },
            {
              text: 'Q19：HTTP 缓存策略',
              link: '/frontend/q19.md',
            },
            {
              text: 'Q20：什么是跨域？如何解决？',
              link: '/frontend/q20.md',
            },
            {
              text: 'Q21：浏览器存储 对比',
              link: '/frontend/q21.md',
            },
            {
              text: 'Q22：XSS 与 CSRF 攻击',
              link: '/frontend/q22.md',
            },
            {
              text: 'Q23：前端性能优化的整体方案',
              link: '/frontend/q23.md',
            },
          ]
        },
        {
          text: '手写代码',
          collapsed: false,
          items: [
            {
              text: 'Q24：手写防抖和节流',
              link: '/frontend/q24.md',
            },
            {
              text: 'Q25：手写深拷贝',
              link: '/frontend/q25.md',
            },
            {
              text: 'Q26：手写简易 Promise',
              link: '/frontend/q26.md',
            },
            {
              text: 'Q27：手写 `Promise.all`',
              link: '/frontend/q27.md',
            },
            {
              text: 'Q28：手写原型继承',
              link: '/frontend/q28.md',
            },
            {
              text: 'Q29：数组去重与扁平化',
              link: '/frontend/q29.md',
            },
            {
              text: 'Q30：手写 bind/call/apply',
              link: '/frontend/q30.md',
            },
            {
              text: 'Q31：手写发布订阅模式',
              link: '/frontend/q31.md',
            },
            {
              text: 'Q32：setTimeout模拟setInt..',
              link: '/frontend/q32.md',
            },
            {
              text: 'Q33：并发请求控制',
              link: '/frontend/q33.md',
            },
          ]
        },
      ],
      '/react/': [
        {
          text: '概览',
          link: '/react/',
        },
        {
          text: '基础与类组件',
          collapsed: false,
          items: [
            {
              text: 'Q1：React 的核心理念与特点',
              link: '/react/q1.md',
            },
            {
              text: 'Q2：什么是 JSX？为什么在 React 中使用它？',
              link: '/react/q2.md',
            },
            {
              text: 'Q3：虚拟 DOM 是什么？其工作原理及 Diff 算法概述',
              link: '/react/q3.md',
            },
            {
              text: 'Q4：key 属性的作用及使用注意事项',
              link: '/react/q4.md',
            },
            {
              text: 'Q5：类组件与函数组件的区别',
              link: '/react/q5.md',
            },
            {
              text: 'Q6：React 类组件生命周期详解',
              link: '/react/q6.md',
            },
          ],
        },
        {
          text: 'Hooks 与渲染',
          collapsed: false,
          items: [
            {
              text: 'Q7：React Hooks 基本原理及规则',
              link: '/react/q7.md',
            },
            {
              text: 'Q8：`useState` 使用细节及原理',
              link: '/react/q8.md',
            },
            {
              text: 'Q9：`useEffect` 完全指南',
              link: '/react/q9.md',
            },
            {
              text: 'Q10：`useRef` 的作用与用法',
              link: '/react/q10.md',
            },
            {
              text: 'Q11：`useMemo` 与 `useCallback` 详解',
              link: '/react/q11.md',
            },
            {
              text: 'Q12：`useContext` 与 Context API 如何跨组件传值',
              link: '/react/q12.md',
            },
            {
              text: 'Q13：`useReducer` 的应用场景和使用方法',
              link: '/react/q13.md',
            },
            {
              text: 'Q14：自定义 Hook 的设计原则与示例',
              link: '/react/q14.md',
            },
            {
              text: 'Q15：React 性能优化手段',
              link: '/react/q15.md',
            },
            {
              text: 'Q16：React 中的合成事件',
              link: '/react/q16.md',
            },
          ],
        },
        {
          text: '模式、并发与生态',
          collapsed: false,
          items: [
            {
              text: 'Q17：高阶组件（HOC）的概念与应用',
              link: '/react/q17.md',
            },
            {
              text: 'Q18：Render Props 模式',
              link: '/react/q18.md',
            },
            {
              text: 'Q19：Portals（传送门）',
              link: '/react/q19.md',
            },
            {
              text: 'Q20：错误边界（Error Boundary）',
              link: '/react/q20.md',
            },
            {
              text: 'Q21：`React.lazy` 与 `Suspense`',
              link: '/react/q21.md',
            },
            {
              text: 'Q22：React 18 的重要新特性',
              link: '/react/q22.md',
            },
            {
              text: 'Q23：Refs 转发（forwardRef）',
              link: '/react/q23.md',
            },
            {
              text: 'Q24：React Router v6 基础',
              link: '/react/q24.md',
            },
            {
              text: 'Q25：Redux 核心概念',
              link: '/react/q25.md',
            },
            {
              text: 'Q26：受控组件 vs 非受控组件',
              link: '/react/q26.md',
            },
            {
              text: 'Q27：服务端渲染（SSR）与 Next.js 简介',
              link: '/react/q27.md',
            },
            {
              text: 'Q28：React 中一些常见的编码陷阱',
              link: '/react/q28.md',
            },
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
