import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import About from "./pages/About";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about-us",
            name: "about",
            component: About
        },
        {
            path: "/posts/:slug",  //per lo show
            name: "single-post",
            component: SinglePost
        },
    ]
});

export default router
