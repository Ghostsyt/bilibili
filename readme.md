## 制作首页 App 组件

##

1. 完成 Header 区域 使用的是 Mint-ui 中的 Header 组件
2. 制作底部的 Tabbar 区域 使用的是 MUI 中的 tabbar.html +在制作 购物车小图标的时候，操作会相对多一些： +先把扩展图标的 css 样式 拷贝到项目中 +拷贝 扩展字体库的 ttf 文件 到项目中 +为购物车小图标添加 样式
3. 要在中间区域放置一个 router-View 来展示路由匹配到的组件

##改造 tabbar 为 router-link

##设置路由高亮

##点击 tabbar 中的路由链接 展示相对应的路由组件

##制作首页轮播图布局

##加载首页轮播图数据

1. 如何获取数据 使用 vue-resource

##改造 新闻资讯路由链接

##新闻资讯 页面制作 1.绘制界面 使用 mui 中的 media-list.html 2.获取数据 3.将数据渲染到页面

## 实现新闻资讯列表点击跳转到新闻详情

1. 把列表中的每一项改造成 router-link 同时 在跳转的时候 应该提供一个唯一的 id 标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中 将新闻详情的 路由地址和组件页面对应起来

##实现新闻详情的页面布局和数据渲染

## 单独封装 comment.vue 评论子组件

1.  创建一个单独的 comment.vue 组件模板
2.  在需要使用 comment 组建的页面中 先手动导入 comment 组件

- 'import comment from ''

3.  在父组件中使用 components 属性 将刚才导入的 comment 组件 注册为你自己的 子组件
4.  将注册子组件时候的 注册名称 以标签形式 在页面中引用

##改造图片分析 按钮为路由链接并显示对应组件页面

##绘制图片列表组件的页面结构 并美化样式

1.  顶部的滑动条制作
2.  底部的图片列表

### 制作顶部滑动条的坑们：

1.  需要借助 mui 中的 tab-top-webview-main.html
2.  需要把 slider 区域的 mui-fullscreen 类去掉
3.  滑动条无法正常使用 通过检查发现 这是一个 js 组件 需要被初始化

- 1.  导入 mui.js
- 调用官方提供的方式去 初始化

```
mui('.mui-scroll-wrapper').scroll({
    deceleration:0.0005 //flick 减速系数 系数越大 滚动速度越慢 滚动距离越小 默认值 0.0006
})
```

4.  我们在初始化 滑动条的时候导入了 mui.js 但是控制台报错了 caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.d.extend
    - 经过我们合理的推测 可能是 mui.js 中用到了 caller', 'callee', and 'arguments' 里的东西
      但是在 webpack 打包好的 bundle.js 中 默认是启用了严格模式的，所以 这两者发生了冲突
    - 解决方案: 1 把 mui.js 中的非严格模式的代码改掉 但是很不现实
      2 把 webpack 打包时候的严格模式禁用掉
    - 最终我们选择 plan B 移除严格模式 使用这个插件
      cnpm install babel-plugin-transform-remove-strict-mode -D
    -
5.  刚进入图片分享页面的时候 滑动条无法正常工作 经过分析 发现 如果要初始化滑动条 必须要等 dom 元素加载完毕 所以 我们把初始化滑动条的代码放到了 mounted 声明周期函数中
6.  当滑动条 调试 ok 后 发现 tabbar 无法正常工作了 我们需要把每个 tabbar 按钮的 mui-tab-item 类 重新改一下名字

7.  获取所有分类 并渲染分类列表

### 制作图片列表区域

1. 图片列表需要使用懒加载技术 可以使用 mint-ui 现成的组件 'lazy-load'
2. 根据 lazy-load 的使用文档 尝试使用
3. 渲染我们的图片列表数据

###图片列表的懒加载改造

##实现 点击图片进入 图片详情界面

1.  在改造 router-link 成 li 时 用 tag 标签 指定将 router-link 渲染成哪种标签

## 实现 详情页面的布局和美化 同时获取数据渲染页面

## 实现 图片详情中 略缩图功能

##绘制 商品列表 页面基本结构并美化

## 尝试在手机上进行项目的测试和预览
1. 要保证自己的手机可以正常运行
2. 要保证手机和开发项目的电脑处于同一个wifi环境中 手机可以访问到电脑的ip
3. 打开自己的项目中 packag.json文件 在dev脚本中 添加一个 --host指令 把当前电脑的ip地址 设置为--host 的指令值
 + 如何查看自己电脑所处WiFi的ip呢 需要在cmd 终端中 运行 'ipconfig' 查看无线网的ip地址
 


