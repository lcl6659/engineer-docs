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
      { text: '构建工具', link: '/vite/', activeMatch: '/vite/' },
      { text: '其他', link: '/others/', activeMatch: '/others/' },
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
          text: 'React 参考',
          collapsed: false,
          items: [
            {
              text: 'Hook： useActionState',
              link: '/react/useActionState.md',
            },
          ],
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
      '/nextjs/': [
        {
          text: '概览',
          link: '/nextjs/',
        },
        {
          text: 'Next.js 问答',
          collapsed: false,
          items: [
            {
              text: 'Q1：Next.js 是什么？它解决了什么问题？',
              link: '/nextjs/q1.md',
            },
            {
              text: 'Q2：Next.js 的文件系统路由是如何工作的？',
              link: '/nextjs/q2.md',
            },
            {
              text: 'Q3：Pages Router 与 App Router 的主要区别',
              link: '/nextjs/q3.md',
            },
            {
              text: 'Q4：Next.js 支持哪些渲染方式？分别是什么？',
              link: '/nextjs/q4.md',
            },
            {
              text: 'Q5：详细解释 ISR（增量静态再生成）及其工作原理',
              link: '/nextjs/q5.md',
            },
            {
              text: 'Q6：在 App Router 中，如何获取数据？什么是 React Server Components？',
              link: '/nextjs/q6.md',
            },
            {
              text: 'Q7：\'use client\' 和 \'use server\' 分别代表什么？',
              link: '/nextjs/q7.md',
            },
            {
              text: 'Q8：Next.js 的 Layout、Loading、Error 文件的作用是什么？',
              link: '/nextjs/q8.md',
            },
            {
              text: 'Q9：什么是 Middleware（中间件）？它的使用场景？',
              link: '/nextjs/q9.md',
            },
            {
              text: 'Q10：如何在 Next.js 中创建 API 路由？',
              link: '/nextjs/q10.md',
            },
            {
              text: 'Q11：Next.js 的图片优化（next/image）有哪些优势？',
              link: '/nextjs/q11.md',
            },
            {
              text: 'Q12：Next.js 中如何处理环境变量？',
              link: '/nextjs/q12.md',
            },
            {
              text: 'Q13：如何优化 Next.js 应用的性能？',
              link: '/nextjs/q13.md',
            },
            {
              text: 'Q14：next/dynamic 有什么用？',
              link: '/nextjs/q14.md',
            },
            {
              text: 'Q15：如何自定义错误页面，如 404、500？',
              link: '/nextjs/q15.md',
            },
            {
              text: 'Q16：Server Actions 是什么？如何使用？',
              link: '/nextjs/q16.md',
            },
            {
              text: 'Q17：Next.js 国际化（i18n）如何实现？',
              link: '/nextjs/q17.md',
            },
            {
              text: 'Q18：Next.js 的部署方式有哪些？',
              link: '/nextjs/q18.md',
            },
            {
              text: 'Q19：怎样在 Next.js 中实现身份验证？',
              link: '/nextjs/q19.md',
            },
            {
              text: 'Q20：如何处理 CSS 样式？Next.js 支持哪些样式方案？',
              link: '/nextjs/q20.md',
            },
          ],
        },
      ],
      '/vue/': [
        {
          text: '概览',
          link: '/vue/',
        },
        {
          text: '基础问答',
          collapsed: false,
          items: [
            { text: 'Q1：Vue 的核心特性有哪些？', link: '/vue/q1.md' },
            { text: 'Q2：Vue 的响应式原理（Vue 2 与 Vue 3 的区别）', link: '/vue/q2.md' },
            { text: 'Q3：Vue 组件的生命周期钩子有哪些？各阶段用途是什么？', link: '/vue/q3.md' },
            { text: 'Q4：Vue 组件间通信的方式有哪些？', link: '/vue/q4.md' },
            { text: 'Q5：v-if 与 v-show 的区别', link: '/vue/q5.md' },
            { text: 'Q6：v-for 中的 key 有什么作用？', link: '/vue/q6.md' },
            { text: 'Q7：Vue 中的 computed 与 watch 的区别', link: '/vue/q7.md' },
            { text: 'Q8：Vue Router 的路由模式和原理', link: '/vue/q8.md' },
            { text: 'Q9：Vue Router 的导航守卫有哪些？', link: '/vue/q9.md' },
            { text: 'Q10：Vuex 的核心概念与工作流程', link: '/vue/q10.md' },
            { text: 'Q11：Pinia 与 Vuex 的区别，为何 Vue 3 推荐 Pinia？', link: '/vue/q11.md' },
            { text: 'Q12：Vue 3 组合式 API 与选项式 API 的对比', link: '/vue/q12.md' },
            { text: 'Q13：ref 与 reactive 的区别与使用场景', link: '/vue/q13.md' },
            { text: 'Q14：watch 与 watchEffect 的区别', link: '/vue/q14.md' },
            { text: 'Q15：nextTick 的作用与原理', link: '/vue/q15.md' },
            { text: 'Q16：插槽（slot）的种类及使用场景', link: '/vue/q16.md' },
            { text: 'Q17：keep-alive 的原理及使用场景', link: '/vue/q17.md' },
            { text: 'Q18：Vue 中的性能优化方法', link: '/vue/q18.md' },
            { text: 'Q19：Vue 如何实现强制刷新组件？', link: '/vue/q19.md' },
            { text: 'Q20：Vue 与 React 的简要对比', link: '/vue/q20.md' },
          ],
        },
        {
          text: 'Vue 源码与深入',
          collapsed: false,
          items: [
            { text: 'Q21：Vue 的模板编译过程是怎样的？', link: '/vue/q21.md' },
            { text: 'Q22：Vue 虚拟 DOM 的 Diff 算法是如何工作的？', link: '/vue/q22.md' },
            { text: 'Q23：Vue 3 的静态提升（hoistStatic）和补丁标记（Patch Flags）分别是什么？', link: '/vue/q23.md' },
            { text: 'Q24：什么是块树（Block Tree）和动态节点收集？', link: '/vue/q24.md' },
            { text: 'Q25：Vue 3 响应式系统深入解析：reactive、ref、effect 的原理', link: '/vue/q25.md' },
            { text: 'Q26：计算属性 computed 的缓存机制是如何实现的？', link: '/vue/q26.md' },
            { text: 'Q27：watch 和 watchEffect 的实现差异', link: '/vue/q27.md' },
            { text: 'Q28：nextTick 的实现原理', link: '/vue/q28.md' },
          ],
        },
        {
          text: '前端工程化',
          collapsed: false,
          items: [
            { text: 'Q29：CommonJS、AMD、ESM 模块化规范的区别', link: '/vue/q29.md' },
            { text: 'Q30：Webpack 的核心概念和工作原理', link: '/vue/q30.md' },
            { text: 'Q31：Loader 和 Plugin 的区别', link: '/vue/q31.md' },
            { text: 'Q32：Webpack 性能优化有哪些？', link: '/vue/q32.md' },
            { text: 'Q33：Vite 为什么比 Webpack 快？原理是什么？', link: '/vue/q33.md' },
            { text: 'Q34：Tree Shaking 的原理和实现条件', link: '/vue/q34.md' },
            { text: 'Q35：Source Map 的作用和常见类型', link: '/vue/q35.md' },
            { text: 'Q36：Babel 的原理', link: '/vue/q36.md' },
            { text: 'Q37：HMR（热模块替换）的原理', link: '/vue/q37.md' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: 'Q38：TypeScript 中 interface 和 type 的主要区别', link: '/vue/q38.md' },
            { text: 'Q39：泛型（Generics）的常见用法', link: '/vue/q39.md' },
            { text: 'Q40：类型守卫（Type Guards）有哪些方式？', link: '/vue/q40.md' },
            { text: 'Q41：常见工具类型（Utility Types）的使用', link: '/vue/q41.md' },
            { text: 'Q42：tsconfig.json 中重要的编译选项', link: '/vue/q42.md' },
          ],
        },
      ],
      '/nodejs/': [
        {
          text: '概览',
          link: '/nodejs/',
        },
        {
          text: '基础与实践',
          collapsed: false,
          items: [
            { text: 'Q1：Node.js 是什么？有哪些特点？', link: '/nodejs/q1.md' },
            { text: 'Q2：Node.js 的事件循环（Event Loop）是怎样工作的？', link: '/nodejs/q2.md' },
            { text: 'Q3：process.nextTick 与 setImmediate 的区别', link: '/nodejs/q3.md' },
            { text: 'Q4：CommonJS 与 ESM 在 Node.js 中的区别', link: '/nodejs/q4.md' },
            { text: 'Q5：Node.js 的模块加载机制是怎样的？', link: '/nodejs/q5.md' },
            { text: 'Q6：Express 和 Koa 的区别', link: '/nodejs/q6.md' },
            { text: 'Q7：Koa 洋葱圈模型是什么？如何实现？', link: '/nodejs/q7.md' },
            { text: 'Q8：简述 Node.js 的 Stream（流）及其类型', link: '/nodejs/q8.md' },
            { text: 'Q9：如何解决 Node.js 中的回调地狱（Callback Hell）？', link: '/nodejs/q9.md' },
            { text: 'Q10：Node.js 中 Buffer 是什么？什么时候用？', link: '/nodejs/q10.md' },
            { text: 'Q11：请描述 Node.js 中进程（Process）与集群（Cluster）', link: '/nodejs/q11.md' },
            { text: 'Q12：Node.js 的错误处理机制', link: '/nodejs/q12.md' },
            { text: 'Q13：Express 中间件原理和分类', link: '/nodejs/q13.md' },
            { text: 'Q14：如何实现一个简单的 RESTful API 服务器？（Express 示例）', link: '/nodejs/q14.md' },
            { text: 'Q15：require 和 import 有什么区别？Node.js 中如何混用？', link: '/nodejs/q15.md' },
            { text: 'Q16：Node.js 如何调用系统命令？exec 和 spawn 的区别', link: '/nodejs/q16.md' },
            { text: 'Q17：Node.js 中什么是中间件（middleware）的“next”函数？如果忘记调用会怎样？', link: '/nodejs/q17.md' },
            { text: 'Q18：Node.js 性能调优有哪些方法？', link: '/nodejs/q18.md' },
            { text: 'Q19：如何调试 Node.js 应用程序？', link: '/nodejs/q19.md' },
            { text: 'Q20：Node.js 和浏览器端 JavaScript 的主要差异', link: '/nodejs/q20.md' },
          ],
        },
        {
          text: 'net 与 TCP',
          collapsed: false,
          items: [
            { text: 'Q21：Node.js 的 net 模块是什么？它提供了哪些能力？', link: '/nodejs/q21.md' },
            { text: 'Q22：如何使用 net 模块创建一个简单的 TCP 回显服务器和客户端？', link: '/nodejs/q22.md' },
            { text: 'Q23：TCP 粘包和半包问题在 Node.js 的 net 模块中如何处理？', link: '/nodejs/q23.md' },
          ],
        },
        {
          text: 'http 模块',
          collapsed: false,
          items: [
            { text: 'Q24：Node.js 的 http 模块架构和核心类', link: '/nodejs/q24.md' },
            { text: 'Q25：如何使用 http 模块创建一个简单的 HTTP 服务器，并解析请求？', link: '/nodejs/q25.md' },
            { text: 'Q26：HTTP 客户端请求：http.request 与 http.get 的区别', link: '/nodejs/q26.md' },
            { text: 'Q27：http 模块中如何处理上传文件？', link: '/nodejs/q27.md' },
            { text: 'Q28：HTTP 模块如何实现 Keep-Alive 和连接池？', link: '/nodejs/q28.md' },
            { text: 'Q29：在 Node.js 中如何实现一个 HTTP 代理服务器？', link: '/nodejs/q29.md' },
            { text: 'Q30：http.Server 的 upgrade 事件是什么？如何升级为 WebSocket？', link: '/nodejs/q30.md' },
          ],
        },
      ],
      '/typescript/': [
        {
          text: '概览',
          link: '/typescript/',
        },
        {
          text: 'TypeScript 问答',
          collapsed: false,
          items: [
            { text: 'Q1：什么是 TypeScript？它和 JavaScript 的关系是什么？带来了哪些好处？', link: '/typescript/q1.md' },
            { text: 'Q2：TypeScript 的基本类型有哪些？', link: '/typescript/q2.md' },
            { text: 'Q3：interface 和 type 的主要区别', link: '/typescript/q3.md' },
            { text: 'Q4：any、unknown、never 和 void 的区别', link: '/typescript/q4.md' },
            { text: 'Q5：类型推断（Type Inference）是什么？举例说明', link: '/typescript/q5.md' },
            { text: 'Q6：联合类型和交叉类型是什么？如何使用？', link: '/typescript/q6.md' },
            { text: 'Q7：泛型（Generics）是什么？有哪些用法？', link: '/typescript/q7.md' },
            { text: 'Q8：类型守卫（Type Guards）有哪些方式？', link: '/typescript/q8.md' },
            { text: 'Q9：映射类型（Mapped Types）和条件类型（Conditional Types）', link: '/typescript/q9.md' },
            { text: 'Q10：keyof 和 typeof 在类型层面的使用', link: '/typescript/q10.md' },
            { text: 'Q11：TypeScript 中类的使用以及访问修饰符', link: '/typescript/q11.md' },
            { text: 'Q12：枚举（enum）的种类和注意事项', link: '/typescript/q12.md' },
            { text: 'Q13：命名空间（Namespace）与模块的区别', link: '/typescript/q13.md' },
            { text: 'Q14：tsconfig.json 中的核心配置项有哪些？', link: '/typescript/q14.md' },
            { text: 'Q15：声明文件（.d.ts）的作用及如何编写', link: '/typescript/q15.md' },
            { text: 'Q16：TypeScript 中的“严格模式”包含了哪些检查？', link: '/typescript/q16.md' },
            { text: 'Q17：类型断言 vs 类型声明', link: '/typescript/q17.md' },
            { text: 'Q18：装饰器是什么？有哪些类型？', link: '/typescript/q18.md' },
            { text: 'Q19：as const 断言的作用', link: '/typescript/q19.md' },
            { text: 'Q20：模板字面量类型（Template Literal Types）', link: '/typescript/q20.md' },
            { text: 'Q21：类型兼容性 —— 结构化类型（鸭子类型）', link: '/typescript/q21.md' },
            { text: 'Q22：import type 和 export type 的作用', link: '/typescript/q22.md' },
            { text: 'Q23：项目中如何渐进式迁移到 TypeScript？', link: '/typescript/q23.md' },
          ],
        },
      ],
      '/flutter/': [
        {
          text: '概览',
          link: '/flutter/',
        },
        {
          text: 'Flutter 基础',
          collapsed: false,
          items: [
            { text: 'Q1：Flutter 是什么？它的核心特点有哪些？', link: '/flutter/q1.md' },
            { text: 'Q2：Flutter 的架构分层是怎样的？', link: '/flutter/q2.md' },
            { text: 'Q3：什么是 Widget？Flutter 中的一切皆为 Widget 的含义是什么？', link: '/flutter/q3.md' },
            { text: 'Q4：StatefulWidget 与 StatelessWidget 的区别', link: '/flutter/q4.md' },
            { text: 'Q5：StatefulWidget 的生命周期方法有哪些？', link: '/flutter/q5.md' },
            { text: 'Q6：BuildContext 是什么？有什么作用？', link: '/flutter/q6.md' },
            { text: 'Q7：什么是 InheritedWidget？它的作用和使用场景', link: '/flutter/q7.md' },
            { text: 'Q8：Key 在 Flutter 中的作用与类型', link: '/flutter/q8.md' },
            { text: 'Q9：Flutter 布局模型是怎么样？常用的布局 Widget 有哪些？', link: '/flutter/q9.md' },
            { text: 'Q10：Flutter 中如何处理手势和事件？', link: '/flutter/q10.md' },
            { text: 'Q11：Flutter 中的路由和导航是如何工作的？', link: '/flutter/q11.md' },
            { text: 'Q12：状态管理方案有哪些？你为什么选择其中之一？', link: '/flutter/q12.md' },
            { text: 'Q13：Provider 的工作原理是什么？如何优化性能？', link: '/flutter/q13.md' },
            { text: 'Q14：Flutter 动画系统简介', link: '/flutter/q14.md' },
            { text: 'Q15：Flutter 中如何与原生平台（iOS/Android）通信？', link: '/flutter/q15.md' },
            { text: 'Q16：Flutter 如何实现国际化和本地化？', link: '/flutter/q16.md' },
            { text: 'Q17：Flutter 性能优化有哪些方法？', link: '/flutter/q17.md' },
            { text: 'Q18：Future 和 Stream 在 Flutter 中的使用', link: '/flutter/q18.md' },
            { text: 'Q19：Dart 的 async/await 和事件循环模型', link: '/flutter/q19.md' },
            { text: 'Q20：如何自定义绘制（CustomPainter）？', link: '/flutter/q20.md' },
          ],
        },
        {
          text: '渲染、混合与工程',
          collapsed: false,
          items: [
            { text: 'Q21：Flutter 的渲染流水线（Rendering Pipeline）是怎样的？', link: '/flutter/q21.md' },
            { text: 'Q22：Flutter 的 Build、Layout、Paint 阶段分别做了什么？有什么优化策略？', link: '/flutter/q22.md' },
            { text: 'Q23：什么是 Element 树？它与 Widget 树和 RenderObject 树的关系？', link: '/flutter/q23.md' },
            { text: 'Q24：Flutter 的“三个树”重建机制详解（增量更新）', link: '/flutter/q24.md' },
            { text: 'Q25：为什么不建议在 build 方法中执行复杂计算？', link: '/flutter/q25.md' },
            { text: 'Q26：Flutter 如何实现混合开发？Add-to-App 是怎样的？', link: '/flutter/q26.md' },
            { text: 'Q27：Platform Channel 的编解码过程及自定义类型', link: '/flutter/q27.md' },
            { text: 'Q28：原生页面和 Flutter 页面间如何共享状态？', link: '/flutter/q28.md' },
            { text: 'Q29：一个中大型 Flutter 项目的架构如何设计？', link: '/flutter/q29.md' },
            { text: 'Q30：如何构建适配移动端、桌面端和 Web 的自适应 UI？', link: '/flutter/q30.md' },
            { text: 'Q31：Flutter 中如何处理安全性问题？', link: '/flutter/q31.md' },
            { text: 'Q32：Flutter Web 的渲染模式有哪些？各有什么优劣？', link: '/flutter/q32.md' },
            { text: 'Q33：如何测试 Flutter 应用？测试类型有哪些？', link: '/flutter/q33.md' },
            { text: 'Q34：Flutter 中的依赖注入有哪些方式？', link: '/flutter/q34.md' },
          ],
        },
      ],
      '/web3/': [
        {
          text: '概览',
          link: '/web3/',
        },
        {
          text: '基础与链上',
          collapsed: false,
          items: [
            { text: 'Q1：什么是 Web3？与 Web1、Web2 的主要区别是什么？', link: '/web3/q1.md' },
            { text: 'Q2：什么是区块链？它的核心特征有哪些？', link: '/web3/q2.md' },
            { text: 'Q3：加密货币（Cryptocurrency）与代币（Token）有什么区别？', link: '/web3/q3.md' },
            { text: 'Q4：什么是共识机制？PoW 和 PoS 有什么区别？', link: '/web3/q4.md' },
            { text: 'Q5：什么是以太坊？它和比特币的主要区别是什么？', link: '/web3/q5.md' },
            { text: 'Q6：什么是智能合约？它有什么特点和潜在风险？', link: '/web3/q6.md' },
            { text: 'Q7：Solidity 中 private、internal、public 和 external 函数的区别？', link: '/web3/q7.md' },
            { text: 'Q8：什么是 Gas？Gas Price、Gas Limit 分别是什么？', link: '/web3/q8.md' },
            { text: 'Q9：ERC-20、ERC-721、ERC-1155 分别是什么？有什么区别？', link: '/web3/q9.md' },
            { text: 'Q10：什么是 DeFi（去中心化金融）？它与传统金融（CeFi）有什么区别？', link: '/web3/q10.md' },
            { text: 'Q11：什么是 NFT？它的核心价值和常见应用场景有哪些？', link: '/web3/q11.md' },
            { text: 'Q12：什么是 DAO？它有什么特征？', link: '/web3/q12.md' },
            { text: 'Q13：什么是 Layer 1 和 Layer 2？为什么需要 Layer 2？', link: '/web3/q13.md' },
            { text: 'Q14：以太坊交易从发送到上链的完整流程？', link: '/web3/q14.md' },
            { text: 'Q15：以太坊账户类型有哪些？', link: '/web3/q15.md' },
          ],
        },
        {
          text: '安全、身份与开发',
          collapsed: false,
          items: [
            { text: 'Q16：什么是重入攻击（Reentrancy Attack）？如何防范？', link: '/web3/q16.md' },
            { text: 'Q17：什么是闪电贷攻击？原理是什么？', link: '/web3/q17.md' },
            { text: 'Q18：什么是预言机（Oracle）？为什么智能合约需要它？', link: '/web3/q18.md' },
            { text: 'Q19：什么是去中心化存储？IPFS 和 Arweave 有什么区别？', link: '/web3/q19.md' },
            { text: 'Q20：什么是零知识证明（ZKP）？在区块链中有什么应用？', link: '/web3/q20.md' },
            { text: 'Q21：什么是账户抽象（Account Abstraction，ERC-4337）？', link: '/web3/q21.md' },
            { text: 'Q22：什么是跨链桥（Bridge）？有哪几种类型？', link: '/web3/q22.md' },
            { text: 'Q23：什么是去中心化身份（DID）？它如何实现自主身份（SSI）？', link: '/web3/q23.md' },
            { text: 'Q24：DApp 常见的技术栈是什么？常用的开发工具和框架有哪些？', link: '/web3/q24.md' },
            { text: 'Q25：如何使用 Ethers.js 连接钱包并读取合约数据？', link: '/web3/q25.md' },
            { text: 'Q26：什么是 The Graph？在 DApp 开发中的作用是什么？', link: '/web3/q26.md' },
            { text: 'Q27：什么是 EIP 和 ERC？有什么区别？', link: '/web3/q27.md' },
            { text: 'Q28：什么是抢跑（Front-Running）？如何防范？', link: '/web3/q28.md' },
            { text: 'Q29：Web3 前端与传统 Web2 前端开发有哪些不同？', link: '/web3/q29.md' },
            { text: 'Q30：什么是 MetaMask？EIP-1193 标准是什么？', link: '/web3/q30.md' },
          ],
        },
        {
          text: 'Solidity 与 EVM 进阶',
          collapsed: false,
          items: [
            { text: 'Q31：`storage`、`memory` 与 `calldata` 的区别和使用场景', link: '/web3/q31.md' },
            { text: 'Q32：`delegatecall` 是什么？它的用途和风险？', link: '/web3/q32.md' },
            { text: 'Q33：Solidity 中的 `fallback` 和 `receive` 函数分别是什么？', link: '/web3/q33.md' },
            { text: 'Q34：Solidity 库（Library）的两种使用方式及其 Gas 差异', link: '/web3/q34.md' },
            { text: 'Q35：如何实现可升级合约？透明代理和 UUPS 模式有何区别？', link: '/web3/q35.md' },
            { text: 'Q36：Solidity 中的事件（Event）和日志（Log）的原理与索引', link: '/web3/q36.md' },
            { text: 'Q37：`assembly` 和内联汇编在 Solidity 中如何使用？有什么风险？', link: '/web3/q37.md' },
            { text: 'Q38：Solidity 中的继承和多继承的线性化是如何解决的？', link: '/web3/q38.md' },
            { text: 'Q39：`create`、`create2` 操作码的区别', link: '/web3/q39.md' },
            { text: 'Q40：Solidity 中的常见 gas 优化技巧', link: '/web3/q40.md' },
          ],
        },
        {
          text: 'ZK-Rollup 与零知识',
          collapsed: false,
          items: [
            { text: 'Q41：什么是 Rollup？Optimistic Rollup 和 ZK-Rollup 有什么区别？', link: '/web3/q41.md' },
            { text: 'Q42：零知识证明（ZKP）的基本概念和特性', link: '/web3/q42.md' },
            { text: 'Q43：什么是 zkEVM？它有哪些类型？', link: '/web3/q43.md' },
            { text: 'Q44：ZK-Rollup 的交易流程是怎样的？', link: '/web3/q44.md' },
            { text: 'Q45：什么是非交互式证明？为什么它在区块链中重要？', link: '/web3/q45.md' },
            { text: 'Q46：可信设置（Trusted Setup）是什么？为什么需要它？', link: '/web3/q46.md' },
            { text: 'Q47：简述 StarkNet 的 Cairo 语言与 Solidity 的主要区别', link: '/web3/q47.md' },
          ],
        },
        {
          text: '跨链互操作',
          collapsed: false,
          items: [
            { text: 'Q48：跨链互操作性的主要挑战是什么？', link: '/web3/q48.md' },
            { text: 'Q49：Cosmos IBC（Inter-Blockchain Communication）协议是如何工作的？', link: '/web3/q49.md' },
            { text: 'Q50：Polkadot 的跨链消息传递（XCMP）与共享安全模型', link: '/web3/q50.md' },
            { text: 'Q51：LayerZero 是如何实现全链互操作性的？其安全假设是什么？', link: '/web3/q51.md' },
            { text: 'Q52：Chainlink CCIP 与其他跨链方案相比有何特点？', link: '/web3/q52.md' },
            { text: 'Q53：跨链桥（Bridge）常见的三种验证模式', link: '/web3/q53.md' },
          ],
        },
        {
          text: 'ERC / EIP 扩展',
          collapsed: false,
          items: [
            { text: 'Q54：ERC-4626 是什么？解决什么问题？', link: '/web3/q54.md' },
            { text: 'Q55：ERC-6551（Token Bound Accounts）是什么？如何使用？', link: '/web3/q55.md' },
            { text: 'Q56：ERC-4337（账户抽象）的核心原理（已在 Web3 部分提及，此处补充技术细节）', link: '/web3/q56.md' },
            { text: 'Q57：ERC-3525（半同质化代币 / SFT）是什么？', link: '/web3/q57.md' },
            { text: 'Q58：ERC-4907（可租用 NFT）是什么？', link: '/web3/q58.md' },
            { text: 'Q59：ERC-998（可组合 NFT / CNFT）是什么？', link: '/web3/q59.md' },
            { text: 'Q60：ERC-721A 与 ERC-721 有何不同？解决了什么痛点？', link: '/web3/q60.md' },
            { text: 'Q61：ERC-2981（NFT 版税标准）如何工作？', link: '/web3/q61.md' },
            { text: 'Q62：ERC-6900（模块化账户抽象）是什么？', link: '/web3/q62.md' },
            { text: 'Q63：ERC-3643（合规资产代币 / T-REX）是什么？', link: '/web3/q63.md' },
            { text: 'Q64：什么是 EIP-7702？从背景到定位：为什么以太坊需要它？', link: '/web3/q64.md' },
            { text: 'Q65：EIP-7702 的核心原理：EOA 如何"临时变成"智能合约？', link: '/web3/q65.md' },
            { text: 'Q66：EIP-7702 vs ERC-4337 vs EIP-3074：它处于什么生态位？', link: '/web3/q66.md' },
            { text: 'Q67：EIP-7702 的价值传递：它带来了什么杀手级应用？', link: '/web3/q67.md' },
            { text: 'Q68：光鲜背后的 B 面：EIP-7702 带来了哪些新风险和挑战？', link: '/web3/q68.md' },
            { text: 'Q69：目前 EIP-7702 的应用和市场采纳情况如何？', link: '/web3/q69.md' },
          ],
        },
      ],
      '/ai/': [
        {
          text: '概览',
          link: '/ai/',
        },
        {
          text: '机器学习与经典架构',
          collapsed: false,
          items: [
            { text: 'Q1：什么是人工智能、机器学习、深度学习？它们之间的关系是什么？', link: '/ai/q1.md' },
            { text: 'Q2：什么是监督学习、无监督学习、半监督学习和强化学习？', link: '/ai/q2.md' },
            { text: 'Q3：什么是过拟合和欠拟合？如何解决？', link: '/ai/q3.md' },
            { text: 'Q4：偏差（Bias）和方差（Variance）的权衡', link: '/ai/q4.md' },
            { text: 'Q5：常见的损失函数有哪些？', link: '/ai/q5.md' },
            { text: 'Q6：什么是梯度下降？有哪些变体？', link: '/ai/q6.md' },
            { text: 'Q7：什么是激活函数？常见的激活函数有哪些？', link: '/ai/q7.md' },
            { text: 'Q8：什么是反向传播算法？它如何工作？', link: '/ai/q8.md' },
            { text: 'Q9：什么是卷积神经网络（CNN）？它的核心组件有哪些？', link: '/ai/q9.md' },
            { text: 'Q10：什么是循环神经网络（RNN）？它有什么局限性？LSTM 和 GRU 如何改善？', link: '/ai/q10.md' },
            { text: 'Q11：什么是注意力机制？它解决了什么问题？', link: '/ai/q11.md' },
            { text: 'Q12：Transformer 架构的核心原理是什么？自注意力和多头注意力机制如何工作？', link: '/ai/q12.md' },
            { text: 'Q13：Transformer 的编码器和解码器有什么区别？', link: '/ai/q13.md' },
            { text: 'Q14：什么是 BERT？它的预训练任务是什么？', link: '/ai/q14.md' },
            { text: 'Q15：GPT 系列模型的演进和核心区别', link: '/ai/q15.md' },
          ],
        },
        {
          text: '大模型技术与工程',
          collapsed: false,
          items: [
            { text: 'Q16：什么是大语言模型？它为什么能遵循指令？', link: '/ai/q16.md' },
            { text: 'Q17：RLHF（人类反馈强化学习）是怎样一个流程？', link: '/ai/q17.md' },
            { text: 'Q18：什么是低秩适应（LoRA）和量化 LoRA（QLoRA）？它们如何实现高效微调？', link: '/ai/q18.md' },
            { text: 'Q19：RAG（检索增强生成）是什么？它的架构和优势是什么？', link: '/ai/q19.md' },
            { text: 'Q20：什么是向量数据库？在 AI 中有什么作用？', link: '/ai/q20.md' },
            { text: 'Q21：什么是提示工程？有哪些常用技巧？', link: '/ai/q21.md' },
            { text: 'Q22：什么是 AI Agent？它由哪些核心模块构成？', link: '/ai/q22.md' },
            { text: 'Q23：常见的开源大模型有哪些？如何选择？', link: '/ai/q23.md' },
            { text: 'Q24：模型评估指标有哪些？如何评价大模型的性能？', link: '/ai/q24.md' },
            { text: 'Q25：如何处理大模型的幻觉问题？', link: '/ai/q25.md' },
            { text: 'Q26：Transformer 中的层归一化（Layer Normalization）和批归一化（Batch Normalization）有何不同？', link: '/ai/q26.md' },
            { text: 'Q27：什么是嵌入（Embedding）？词嵌入和位置嵌入的作用是什么？', link: '/ai/q27.md' },
            { text: 'Q28：怎样部署和推理优化大语言模型？', link: '/ai/q28.md' },
          ],
        },
        {
          text: '产业格局与选型（2026）',
          collapsed: false,
          items: [
            { text: 'Q29：2026 年全球大模型竞争格局概览（截至 2026 年 5 月）', link: '/ai/q29.md' },
            { text: 'Q30：GPT-5 系列各版本有什么区别？（GPT-5.2 / 5.4 / 5.5）', link: '/ai/q30.md' },
            { text: 'Q31：Claude 4 系列有哪些版本？Opus 4.6 和 Opus 4.7 有什么区别？', link: '/ai/q31.md' },
            { text: 'Q32：Gemini 3 系列有哪些版本？各版本定位如何？', link: '/ai/q32.md' },
            { text: 'Q33：开源三剑客：DeepSeek-V4、Qwen 3.6、Kimi K2.6 分别有什么特点？', link: '/ai/q33.md' },
            { text: 'Q34：Meta Llama 4 系列是怎样的？', link: '/ai/q34.md' },
            { text: 'Q35：各家大模型的价格对比如何？', link: '/ai/q35.md' },
            { text: 'Q36：编程能力（Coding）谁更强？', link: '/ai/q36.md' },
            { text: 'Q37：各家大模型的核心优势与弱点分别是什么？', link: '/ai/q37.md' },
            { text: 'Q38：如何根据场景选择合适的大模型？', link: '/ai/q38.md' },
            { text: 'Q39：2026 年大模型的几个关键趋势', link: '/ai/q39.md' },
          ],
        },
        {
          text: '其他整理',
          collapsed: false,
          items: [
            { text: '把 Agent 面试从底层到实战全部讲透', link: '/ai/q40.md' },
          ],
        },
      ],
      '/vite/': [
        {
          text: '概览',
          link: '/vite/',
        },
        {
          text: 'Webpack',
          collapsed: false,
          items: [
            { text: 'Q1：Webpack 是什么？它的核心概念有哪些？', link: '/vite/q1.md' },
            { text: 'Q2：Webpack 的构建流程是怎样的？', link: '/vite/q2.md' },
            { text: 'Q3：Loader 和 Plugin 的区别是什么？请各自举一个常用的例子', link: '/vite/q3.md' },
            { text: 'Q4：Webpack 中如何配置代码分割（Code Splitting）？有哪几种方式？', link: '/vite/q4.md' },
            { text: 'Q5：什么是 Tree Shaking？Webpack 中如何开启并使用？', link: '/vite/q5.md' },
            { text: 'Q6：如何提升 Webpack 的构建速度？', link: '/vite/q6.md' },
            { text: 'Q7：Webpack 的 HMR（热模块替换）原理是什么？', link: '/vite/q7.md' },
            { text: 'Q8：Webpack 中 Source Map 的常用类型及适用场景', link: '/vite/q8.md' },
            { text: 'Q9：Webpack Module Federation（模块联邦）是什么？解决了什么问题？', link: '/vite/q9.md' },
          ],
        },
        {
          text: 'Vite 与对比',
          collapsed: false,
          items: [
            { text: 'Q10：Vite 是什么？它解决了什么问题？', link: '/vite/q10.md' },
            { text: 'Q11：Vite 的开发服务器为什么这么快？', link: '/vite/q11.md' },
            { text: 'Q12：Vite 的预构建（Pre-bundling）做了什么？为什么需要它？', link: '/vite/q12.md' },
            { text: 'Q13：Vite 的生产构建为什么选择 Rollup？', link: '/vite/q13.md' },
            { text: 'Q14：Vite 的 HMR 原理与 Webpack 有何不同？', link: '/vite/q14.md' },
            { text: 'Q15：Vite 是如何处理 CSS 的？CSS Modules 和样式注入', link: '/vite/q15.md' },
            { text: 'Q16：Vite 中怎样配置路径别名和环境变量？', link: '/vite/q16.md' },
            { text: 'Q17：Vite 的插件机制是怎样的？与 Rollup 插件的关系', link: '/vite/q17.md' },
            { text: 'Q18：用什么方法优化 Vite 生产构建的体积和速度？', link: '/vite/q18.md' },
            { text: 'Q19：Webpack 与 Vite 的全面对比', link: '/vite/q19.md' },
          ],
        },
        {
          text: 'Webpack：Loader 与 Plugin',
          collapsed: false,
          items: [
            { text: 'Q20：如何编写一个自定义的 Webpack Loader？有哪些核心要素？', link: '/vite/q20.md' },
            { text: 'Q21：如何编写一个自定义的 Webpack Plugin？', link: '/vite/q21.md' },
            { text: 'Q22：编写 Loader 和 Plugin 分别需要注意哪些调试技巧？', link: '/vite/q22.md' },
          ],
        },
        {
          text: 'Vite SSR',
          collapsed: false,
          items: [
            { text: 'Q23：Vite 如何支持 SSR（服务端渲染）？整体流程是怎样的？', link: '/vite/q23.md' },
            { text: 'Q24：Vite SSR 与传统 SSR（如 Next.js、Nuxt.js）有何不同？', link: '/vite/q24.md' },
            { text: 'Q25：Vite SSR 中如何处理 CSS 和静态资源？', link: '/vite/q25.md' },
          ],
        },
        {
          text: '构建性能',
          collapsed: false,
          items: [
            { text: 'Q26：如何分析 Webpack 构建性能？有哪些常用工具和指标？', link: '/vite/q26.md' },
            { text: 'Q27：如何定位并解决 Vite 开发环境下的性能瓶颈？', link: '/vite/q27.md' },
            { text: 'Q28：大型项目的构建速度优化策略总结（Webpack/Vite 通用思路）', link: '/vite/q28.md' },
          ],
        },
        {
          text: 'Rollup 与 Rolldown',
          collapsed: false,
          items: [
            { text: 'Q29：Rollup 是什么？它的主要特点和适用场景是什么？', link: '/vite/q29.md' },
            { text: 'Q30：Rollup 与 Webpack、Vite 的核心区别是什么？', link: '/vite/q30.md' },
            { text: 'Q31：Rollup 的配置中，`input`、`output` 各有哪些关键选项？', link: '/vite/q31.md' },
            { text: 'Q32：Rollup 的插件机制是怎样的？有哪些常用插件？', link: '/vite/q32.md' },
            { text: 'Q33：Rollup 的 Tree Shaking 为什么比 Webpack 更彻底？原理是什么？', link: '/vite/q33.md' },
            { text: 'Q34：Rollup 如何处理 CommonJS 模块？`@rollup/plugin-commonjs` 做了什么？', link: '/vite/q34.md' },
            { text: 'Q35：Rollup 如何进行代码分割（Code Splitting）？', link: '/vite/q35.md' },
            { text: 'Q36：Rollup 的 `external` 选项的作用是什么？为什么打包库时必须设置？', link: '/vite/q36.md' },
            { text: 'Q37：Rollup 的 `watch` 模式是如何工作的？与 Vite/Webpack 的 Dev Server 有何不同？', link: '/vite/q37.md' },
            { text: 'Q38：如何用 Rollup 打包一个现代化的 JavaScript 库？最佳实践有哪些？', link: '/vite/q38.md' },
            { text: 'Q39：Rolldown 是什么？它与 Rollup 有什么关系？', link: '/vite/q39.md' },
          ],
        },
      ],
      '/others/': [
        {
          text: '概览',
          link: '/others/',
        },
        {
          text: '其他整理',
          collapsed: false,
          items: [
            { text: '1、Agent从底层到实战全部讲透', link: '/others/q1.md' },
            { text: '2、早期前端面试总结', link: '/others/q2.md' },
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
