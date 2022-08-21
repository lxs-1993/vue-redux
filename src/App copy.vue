<template>
  <div id="app">
    <h1 v-if="flag">我是h1元素</h1>
    <button @click="handleFlag">修改元素</button>
    <button @click="handleIsShow('show')">显示元素</button>
    <button @click="handleIsShow('hide')">显示元素</button>
  </div>
</template>

<script >
import { get } from 'http'

  export default {
    data() {
      return {
        isShow: 'show'
      }
    },
    computed:{
      // 修改computed中的属性，需要设置set和get方法
      flag: {
        get(val) {
          console.log('get-val',val);
          if(this.isShow == 'show') {
            return true
          }
          return false
        },
        set(val) {
          console.log('set-val',val);
          this.isShow = val ? 'show' : 'hide'
        }
      }
    },
    methods: {
      handleFlag() {
        this.isShow = this.isShow == 'show' ? 'hide' : 'show'
      },
      handleIsShow(val) {
       this.flag = val == 'show' ? true : false
      }
    }
  }
</script>
<style lang="less">

</style>
