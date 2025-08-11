import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/TheHome.vue';
import ProductList from '@/components/product/TheList.vue';
import UserLogin from '@/components/user/TheLogin.vue';
import UserJoin from '@/components/user/TheJoin.vue';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/product',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: UserLogin
    },
    {
        path: '/join',
        name: 'UserJoin',
        component: UserJoin
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;