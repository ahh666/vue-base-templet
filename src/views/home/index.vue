<template>
  <div class="home">
    <BaseButton />
    <BaseSwitch v-model="isActive" />
    <BaseMask :show-mask.sync="isActive">
      <p style="color: #fff;">
        这里可以加一些东西
      </p>
    </BaseMask>
    <BaseLoading />
    <DynamicComponent />
  </div>
</template>

<script>
import DynamicComponent from '../dynamic-component'

export default {
  name: 'Home',
  components: { DynamicComponent },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>
