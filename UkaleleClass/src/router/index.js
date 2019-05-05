import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home/home.vue";
import center from "../components/center/center.vue";
import study from "../components/study/study.vue";
import hot from "../components/home/hot.vue";
import ne from "../components/home/new.vue";

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      redirect:"/home",
      component: home
    },{
      path:"/home",
      name:"home",
      component: home,
      children:[
        { path:"/",redirect:"/home/hot",component:ne},
        { path:"/home/hot", component:hot},
        { path:"/home/new",component:ne}
      ]
    },{
      path:"/study",
      name:"study",
      component:study
    },{
      path:"/center",
      name:"personal center",
      component:center
    }
  ]
})
