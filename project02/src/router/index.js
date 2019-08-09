import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vherder from "@/components/Vheader"
import one from "@/components/Link1"
import two from "@/components/Link2"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
    },

    {
      path: '/two',
      name: 'two',
      component: two
    },
  ]
})
