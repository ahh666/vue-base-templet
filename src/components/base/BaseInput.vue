<template>
  <div class="base-input">
    <input type="text" :value="value" @change="handleChange" />
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    // 名为value 的属性
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange(e) {
      // 暴露一个input时间
      this.$emit('input', e.target.value)
    }
  }
}
</script>
