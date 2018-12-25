<template>
    <div class="wrap_divss">
        <h2>我来啦</h2>
        <h3>来干嘛</h3>
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'card',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .wrap_divss{
       display:flex;
       justify-content:center;
       align-items:center;
       h2,h3{
            font-size:15px;
            color:red
       }
    }
    h2,h3{
       
    }
</style>