<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BaseButton />
    <BaseSwitch v-model="isActive" />
    <BaseMask :show-mask.sync="isActive">
      <p style="color: #fff">这里可以加一些东西</p>
    </BaseMask>
    <DynamicComponent />
  </div>
</template>

<script>
import DynamicComponent from './dynamic-component'
export default {
  components: { DynamicComponent },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>
