<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 标签

用于标记和选择

## 基础用法

<demo-preview comp-name="Tag" demo-name="demo">
  <demo />
</demo-preview>

## 可移除标签

<demo-preview comp-name="Tag" demo-name="demo2">
  <demo2 />
</demo-preview>

## 动态编辑标签

<demo-preview comp-name="Tag" demo-name="demo3">
  <demo3 />
</demo-preview>

## 不同尺寸

<demo-preview comp-name="Tag" demo-name="demo4">
  <demo4 />
</demo-preview>

## 主题

<demo-preview comp-name="Tag" demo-name="demo5">
  <demo5 />
</demo-preview>

## 属性

|  参数  |    说明    |  类型  | 可选值 |  默认值   | 是否必填 |
| :----: | :--------: | :----: | :----: | :-------: | :------: |
| `arg1` | 第一个参数 | string |   -    | `default` |    否    |
| `arg2` | 第二个参数 | string |   -    | `default` |    否    |

## 事件

|    事件名     |    说明    | 参数列表  |            参数说明             |
| :-----------: | :--------: | :-------: | :-----------------------------: |
|    `click`    |  点击事件  |  $event   |        原生的 dom event         |
| `customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三 |

## 方法

|  方法名  |   说明   | 参数列表 | 参数说明 |
| :------: | :------: | :------: | :------: |
| `update` | 手动更新 |    -     |    -     |

## 插槽

|  插槽名   |      说明      |
| :-------: | :------------: |
| `default` | 自定义默认内容 |
