<template>
  <div id="app">
      222
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app',
  mounted () {
      console.log(this.$router)
  }
}
</script>

<style>
  body{
    margin: 0px;
  }

</style>