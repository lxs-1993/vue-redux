<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{count}}
    <button @click="addCount">加加</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        count1:0
      }
    },
    computed:{
      count() {
        return this.$store.state.count
      }
    },
    methods:{
      addCount() {
        this.$store.commit("setCount",this.count1++)
      }
    },
  // 当前路由发生改变的时候，就是当组件被复用的时候
    beforeRouteUpdate() {
      console.log("当前路由变化的时候触发")
    },
    beforeRouteLeave() {
      console.log("路由离开的时候触发")
    }
  }
</script>