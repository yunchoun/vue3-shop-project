<template>
    <div class="contentWrap">
        <!-- 상품 상세페이지 -->
        <div class="flexWrap start g-50">
            <div class="imgArea" v-if="product"><img :src="require(`@/assets/images/${product.src}`)" alt=""></div>
            <div class="infoArea">
                <div class="name">{{ product.name }}</div>
                <div class="price">{{ product.price }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps,computed } from 'vue';
// import { storeToRefs } from 'pinia';    
import { useProductStore } from '@/stores/productStore';
const store = useProductStore();
// const { items } = storeToRefs(store);
const props = defineProps({ id: Number });

const product = computed(() => {
    return store.items.find(item => item.id === props.id);
});

console.log(product.value);

</script>

<style scoped>
.imgArea { width: 40%; }
.imgArea img { width: 100%; }
.flexWrap { align-items: flex-start; }
</style>