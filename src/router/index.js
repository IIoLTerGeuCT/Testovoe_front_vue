import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/components/Authentication";
import Images from "@/components/Images";
import Image from "@/components/Image";
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/images",
    name: "Images",
    component: Images,
  },
  {
    path: "/image/:id",
    name: "Image",
    component: Image,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.state.isAuth && to.name == "Images") {
    next({ name: "Auth" });
  } else next();
});

export default router;
