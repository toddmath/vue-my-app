import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue";
import Hello from "./components/Hello.vue";
import Nav from "./components/Nav.vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        n: Nav,
        h: Hello,
        hw: HelloWorld
      } 
    },
    {
      path: "/hello",
      name: "hello",
      component: Hello
    },
    {
      path: "/nav",
      name: "nav",
      component: Nav
    },
    {
      path: "/helloworld",
      name: "helloworld",
      component: HelloWorld
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
