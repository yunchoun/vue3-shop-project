<template>
    <div class="contentWrap">
        <nav class="breadcrumb">
            <ul class="flexWrap start p-10">
                <li><router-link to="/">Home</router-link></li>
                <li v-for="(crumb, index) in breadcrumbs" :key="index"
                    :class="{ current: index === breadcrumbs.length - 1 }">
                    <router-link v-if="crumb.to && index !== breadcrumbs.length - 1" :to="crumb.to">
                        {{ crumb.label }}
                    </router-link>
                    <span v-else>{{ crumb.label }}</span>
                </li>
                <!-- <li v-if="product">{{ product.name }}</li> -->
            </ul>
        </nav>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/productStore';
const route = useRoute();
const store = useProductStore();


const product = computed(() => {
    const id = Number(route.params.id);
    return id ? store.items.find(p => p.id === id) : null
});

const breadcrumbs = computed(() => {
    const metaCrumbs = Array.isArray(route.meta?.breadcrumb) ? route.meta.breadcrumb : []

    return metaCrumbs.map(crumb => {
        // 상세 페이지 placeholder 처리
        if (crumb.label === '__PRODUCT__') {
            return { label: product.value?.name || '', to: undefined }
            // ?. - 옵션체이닝. value가 없으면 에러안나고 undefined 반환
        }
        return crumb
    }).filter(crumb => crumb.label) // label 비어있는 건 제거
})
</script>

<style scoped>
.breadcrumb {
    border-top: 1px solid #ccc;
    box-sizing: border-box;
}

li {
    padding-right: 40px;
    position: relative;
}

li:after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    content: '>';
    color: #333;
    width: 20px;
    height: 20px;
    line-height: 20px;
}
li:nth-last-child(1):after { display: none; }

ul li a:hover { color: #3470cc; border-bottom: 1px solid #3470cc; }
</style>