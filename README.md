# tal-katex
一个基于katex的latex格式的渲染，由于katex只支持纯公式渲染，而插件auto-render只支持dom节点渲染，此处对auto-render简单的修改，支持dom标签、实体标签、以及混合文本的渲染方式输出dom节点。
此处使用vue作为实例，封装成v-katex使用
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
