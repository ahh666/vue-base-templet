<template>
  <div id="app">
    <div id="nav" class="nav">
      <RouterLink to="/">
        Home
      </RouterLink>
      |
      <RouterLink to="/about">
        About
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
<script>
export default {
  mounted() {
    window.document.body.setAttribute('data-theme', 'light')
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  @include fontColor('themeColor');
  @include bgColor('themeBgColor');
  min-height: 100vh;
  padding: 50px;
}

#nav {
  text-align: center;
  margin-bottom: 50px;
}

.nav a {
  font-weight: bold;
  @include fontColor('themeColor');
}

#nav a.router-link-exact-active {
  color: $red;
}
</style>
