import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/TheHome.vue';
import ProductList from '@/components/product/TheList.vue';
import ProductView from '@/components/product/TheView.vue';
import UserLogin from '@/components/user/TheLogin.vue';
import UserJoin from '@/components/user/TheJoin.vue';
import TheCart from '@/components/cart/TheCart.vue';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        meta: { title: '홈' },
    },
    {
        path: '/product',
        name: 'ProductList',
        component: ProductList,
        meta: {
            breadcrumb: [
                { label: '상품', to: { name: 'ProductList' } },
            ]
        }
    },
    {
        path: '/product/view/:id',
        name: 'ProductView',
        component: ProductView,
        props: router => ({ id: Number(router.params.id) }),
        meta: {
            breadcrumb: [
                { label: '상품', to: { name: 'ProductList' } },
                { label: '__PRODUCT__' },
            ]
        }
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
    },
    {
        path: '/cart',
        name: 'TheCart',
        component: TheCart
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;