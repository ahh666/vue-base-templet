<template>
  <div class="home">
    <img src="@assets/img/1000046.jpg" width="300px" />
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
