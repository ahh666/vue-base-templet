<template>
  <div class="base-button-box">
    <button v-on="$listeners">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '确认',
    },
  },
}
</script>

<style lang="scss">
.base-button-box {
  display: inline-block;
}
</style>
