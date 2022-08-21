export default{
	install(Vue){
		Vue.directive('customDirective',{
      // 指令的定义
      bind: function (el, bind, vnode) {
        console.log('el', el)
        console.log('bind', bind)
        console.log('vnode', vnode)
      },
      inserted: function (el) {
        //绑定到节点
        console.log('绑定到节点','2 - inserted')
      },
      update: function () {
        //组件更新
        console.log('组件更新','3 - update')
      },
      componentUpdated: function () {
        //组件更新完成
        console.log('组件更新完成','4 - componentUpdated')
      },
      unbind: function () {
        //解绑
        console.log('解绑','5 - unbind')
      }
		})
	}
}
