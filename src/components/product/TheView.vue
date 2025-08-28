<template>
    <div class="contentWrap">
        <!-- 상품 상세페이지 -->
        <div class="flexWrap start g-50 productWrap">
            <div class="imgArea" v-if="product"><img :src="require(`@/assets/images/${product.src}`)" alt=""></div>
            <div class="rightArea">
                <div class="mainName">{{ product.name }}</div>
                <div class="mainPrice">{{ (product.price).toLocaleString() }}원</div>

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
                        <i class="bi bi-heart-fill"></i>
                    </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 400px; background-color: #f5f5f5;
}

.imgArea img {
    height: 100%;
}

.rightArea {
    flex: 1;
}

.rightArea .mainName {
    font-size: 20px;
    font-family: "PretendardM";
    margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 10px; box-sizing: border-box;
}
.rightArea .mainPrice {
    font-size: 24px;
    font-family: "PretendardB";
    margin-bottom: 20px; color: #5f5f5f;
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