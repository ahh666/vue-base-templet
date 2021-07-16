<template>
  <div class="base-switch-box">
    <div :class="['base-switch', active && 'base-switch-active']" @click="handleClick">
      <div class="base-switch-pie"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  // 通过model属性自定义 属性名和事件名
  model: {
    event: 'change',
    prop: 'active',
  },
  props: {
    // 虽然自定义了 active属性，仍然要在 props 选项里面声明
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      // 暴露change事件
      this.$emit('change', !this.active)
    },
  },
}
</script>

<style lang="scss" scoped>
$switchWidth: 60px;
$switchHeight: 30px;
$switchRadius: 15px;

.base-switch-box {
  display: inline-block;
}
.base-switch {
  width: $switchWidth;
  height: $switchHeight;
  border-radius: $switchRadius;
  background: #dbdbdb;
  display: flex;
}
.base-switch-active {
  background: #2dcef7;
  justify-content: flex-end;
}
.base-switch-pie {
  width: $switchHeight;
  height: $switchHeight;
  border-radius: $switchRadius;
  background: #fff;
}
</style>
