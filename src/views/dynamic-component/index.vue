<template>
  <div>
    <button v-for="type in types" :key="type" @click="currentType = type">
      {{ type }}
    </button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
const context = require.context('./', false, /\.vue$/)
let components = {}
context.keys().forEach((key) => {
  if (key.includes('index')) return
  const component = context(key).default
  components[component.name] = component
})
// 组件不多的情况，手动引入即可
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'
// import ComponentC from './ComponentC'
// import ComponentD from './ComponentD'

// const components = {
//   ComponentA,
//   ComponentB,
//   ComponentC,
//   ComponentD,
// }
export default {
  components,
  data() {
    return {
      typeComponents: components,
      types: {},
      currentType: '',
    }
  },
  computed: {
    currentComponent() {
      return this.typeComponents[this.currentType]
    },
  },
  created() {
    this.types = Object.keys(this.typeComponents)
    this.currentType = this.types[0] // 默认第一个选项
  },
}
</script>

<style></style>
