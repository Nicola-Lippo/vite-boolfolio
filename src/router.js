import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppList from './pages/AppList.vue';
import ListSlug from './pages/ListSlug.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/list',
            name: 'list',
            component: AppList
        },
        {
            path: '/list:slug',
            name: 'detagli',
            component: ListSlug
        },

    ]
});

export { router };
