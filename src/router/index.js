import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/product/TheList.vue';

const routes = [
    {
        path: '/product',
        name: 'ProductList',
        component: ProductList
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;