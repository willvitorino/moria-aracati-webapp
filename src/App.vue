<template>
  <div id="app">
    <web-app-template />
  </div>
</template>

<script>
export default {
  components: {
    'web-app-template': () => import('./templates/WebApp')
  }
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  #app {
    height: 100vh;
    background-color: whitesmoke;
  }
</style>
