<template>
    <div class="contentWrap">
        <!-- 상품 상세페이지 -->
        <div class="flexWrap start g-50 productWrap">
            <div class="imgArea" v-if="product"><img :src="require(`@/assets/images/${product.src}`)" alt=""></div>
            <div class="rightArea">
                <div class="name">{{ product.name }}</div>
                <div class="price">{{ product.price }}</div>

                <div class="flexWrap start countWrap">
                    <button class="btn minus" @click="countStore.decrement">-</button>
                    <div class="count">{{ countStore.count }}</div>
                    <button class="btn plus" @click="countStore.increment">+</button>
                    <div class="price">{{ (product.price * countStore.count).toLocaleString() }}원</div>
                </div>
                <div class="totalPrice">{{ (product.price * countStore.count).toLocaleString() }}원</div>
                <div class="buttonWrap">
                    <button class="btn purchase">바로 구매하기</button>
                    <div class="btn zzim"><i class="bi bi-heart"></i>
                    <i class="bi bi-heart-fill"></i></div>
                    <button class="btn cart">장바구니 담기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
// import { storeToRefs } from 'pinia';    
import { useProductStore } from '@/stores/productStore';
import { useCountStore } from '@/stores/countStore';
const productStore = useProductStore();
const countStore = useCountStore();
// const { items } = storeToRefs(store);
const props = defineProps({ id: Number });

const product = computed(() => {
    return productStore.items.find(item => item.id === props.id);
});


</script>

<style scoped>
.productWrap {
    position: relative;
    align-items: flex-start;
}

.imgArea {
    width: 40%;
}

.imgArea img {
    width: 100%;
}

.rightArea {
    flex: 1;
}

.countWrap {
    gap: 20px;
}

.countWrap .btn {
    width: 30px;
    height: 30px;
    font-size: 20px;
    background-color: #eeeeee;
    border: 1px solid #ccc;
}
</style>