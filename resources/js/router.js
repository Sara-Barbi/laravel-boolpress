import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import Categories from "./pages/Categories";
import SingleCategory from "./pages/SingleCategory";

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
        {
            path: "/categories",  //per lo show
            name: "categories",
            component: Categories
        },
        {
            path: "/categories/:slug",  //per lo show
            name: "single-category",
            component: SingleCategory
        },
        /*
        {
            path: "*",  //per lo show
            name: "page-404",
            component: PageNotFound
        },
        */
    ]
});
export default router
