<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 输入框

文本输入框

## 基础用法

<demo-preview comp-name="Input" demo-name="demo">
  <demo />
</demo-preview>

## textarea 文本框

<demo-preview comp-name="Input" demo-name="demo2">
  <demo2 />
</demo-preview>

## 禁用状态

<demo-preview comp-name="Input" demo-name="demo3">
  <demo3 />
</demo-preview>

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外选项： `large`, `small`, `mini`。

<demo-preview comp-name="Input" demo-name="demo4">
  <demo4 />
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
