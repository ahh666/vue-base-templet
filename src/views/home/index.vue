<template>
  <div class="home">
    <img src="@assets/img/1000046.jpg" width="300px" />
    <div>
      遮罩开关：
      <BaseSwitch v-model="isActive" />
    </div>
    <br />
    <div>
      换肤演示：
      <BaseButton text="默认主题" @click="changeTheme('light')" />
      <BaseButton text="暗黑主题" @click="changeTheme('dark')" />
    </div>
    <br />
    <BaseMask :show-mask.sync="isActive">
      <p style="color: #fff;">
        这里可以加一些东西
      </p>
    </BaseMask>
    <div>
      Loading动画：
      <BaseLoading />
    </div>
    <br />

    <div>
      动态组件：
      <DynamicComponent />
    </div>
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
      themeType: 'light',
    }
  },
  created() {
    console.log('I am Archer')
  },
  methods: {
    changeTheme(theme) {
      console.log(66)
      window.document.body.setAttribute('data-theme', theme)
    },
  },
}
</script>
