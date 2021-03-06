import {createRouter, createWebHistory} from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Management from "./pages/management.vue";
import Login from "./pages/login.vue";
import Chat from "./pages/chat.vue";
import Secret from "./pages/data.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

const routes = [
    {
    path: "/",
    name:"Index",
    component: Index,
    },
    {
        path: "/about",
        name:"About",
        component: About,
    },
    {
        path: "/management",
        name:"Management",
        component: Management,
    },
    {
        path: "/login",
        name:"Login",
        component: Login,
    },
    {
        path: "/chat",
        name:"Chat",
        component: Chat,
    },
    {
        path: "/data",
        name:"Data",
        component: Secret,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated.value) {
                next("/login");
            }
             {
                next();
                }
            
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name:"NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;