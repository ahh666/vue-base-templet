<template>
  <div class="base-mask" v-if="showMask" @click.stop="handleClickMask">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseMask',
  props: {
    showMask: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClickMask() {
      this.$emit('update:showMask', !this.showMask)
    },
  },
}
</script>

<style lang="scss" scoped>
.base-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba($color: #000000, $alpha: 0.7);
}
</style>
