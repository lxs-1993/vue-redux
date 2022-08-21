<template>
  <div id="app">
    <router-link :to="`/about/${id}`" >about</router-link>
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script >

  export default {
    data() {
      return {
        id: 1,
      }
    },
    computed:{},
    mounted() {
      console.log(this.$route)
      this.id = this.$route.params.id || 1
    },
    watch:{
      // 监听路由的变化 params只是支持name命名路由
      '$route.params'(newVal){
        console.log(newVal)
        this.id = this.$route.params.id
      }
    },
    methods: {
     
    }
  }
</script>
<style lang="less">
 a {
  text-decoration: none;
  margin-right: 10px;

 }
 .active {
  color: red;
 }
</style>
