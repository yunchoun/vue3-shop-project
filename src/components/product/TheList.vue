<template>
    <!-- 상품페이지 리스트 - y -->
    <div class="contentWrap">
        <div class="banner"></div>
        <ul class="sort-ranking">
            <li class="srot-low-price" @click="lowPrice">낮은가격순</li>
            <li class="srot-high-price" @click="highPrice">높은가격순</li>
            <li class="srot-newest">최신순</li>
        </ul>

        <div class="itemWrapper">
            <div class="item">
                <router-link class="itemCell" v-for="(item, idx) in pageItems" :key="idx"
                    :to="{ name: 'ProductView', params: { id: item.id } }">
                    <!-- require() 함수를 사용하여 동적으로 이미지를 로드합니다. -->
                    <div class="imgArea"><img :src="require(`@/assets/images/${item.src}`)" alt=""></div>
                    <div class="name">{{ item.name }}</div>
                    <!-- toLocalString() - 브라우저의 로케일 설정을 기반으로 숫자를 포맷합니다. 천 단위 구분자를 자동으로 추가해줍니다. -->
                    <div class="price">{{ item.price.toLocaleString() }}원</div>
                </router-link>
            </div>
        </div>

        <ul class="pagination flexWrap g-10">
            <li @click="goPrev" :class="{dis: currentPage === 1}">&#60;</li>
            <li v-for="n in totalPages" :key="n" @click="goTo(n)" :class="{on: currentPage === n}">{{ n }}</li>
            <li @click="goNext" :class="{dis: currentPage === totalPages}">&#62;</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const items = ref(
    [
    { id: 1, src: 'item_1.jpg', name: '다있음 청소기', price: 1000000 },
    { id: 2, src: 'item_2.jpg', name: '냉장고', price: 2000000 },
    { id: 3, src: 'item_3.jpg', name: '대용량 디퓨저', price: 12000 },
    { id: 4, src: 'item_4.jpg', name: '이동식 선반', price: 32000 },
    { id: 5, src: 'item_5.jpg', name: '철 수세미', price: 1000 },
    { id: 6, src: 'item_6.jpg', name: '도시락통', price: 10000 },
    { id: 7, src: 'item_7.jpg', name: '공기정화식물', price: 8000 },
    { id: 8, src: 'item_8.jpg', name: '화장실 슬리퍼', price: 31000 },
    { id: 9, src: 'item_9.jpg', name: '두루마리 휴지', price: 20000 },
    { id: 10, src: 'item_10.jpg', name: '미용가위', price: 2200 },
    { id: 11, src: 'item_11.jpg', name: '수건', price: 3190 },
    { id: 12, src: 'item_12.jpg', name: '전기주전가', price: 12200 },
    { id: 13, src: 'item_13.jpg', name: '후라이팬', price: 24500 },
    { id: 14, src: 'item_14.jpg', name: '접시세트', price: 49900 },
    { id: 15, src: 'item_15.jpg', name: '대용략 텀블러', price: 38000 },
    { id: 16, src: 'item_16.jpg', name: '컵세트', price: 11000 },
]
)

const currentPage = ref(1);
const pageCount = 8; // 한페이지에 보이는 갯수
const totalPages = Math.ceil(items.value.length / pageCount);

// (currentPage.value - 1) * pageCount - 자르기 시작하는 인덱스, 총 잘릴 인덱스
const pageItems = computed(() => {
  return items.value.slice((currentPage.value - 1) * pageCount, currentPage.value * pageCount);
});

const goTo = (n) => {
    if (n >= 1 && n <= totalPages) {
        currentPage.value = n;
    }
};

const goPrev = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const goNext = () => {
    if (currentPage.value < totalPages) {
        currentPage.value++;
    }
};

// 낮은가격순으로 정렬하는 함수
// items 배열을 직접 수정하고, currentPage를 1로 초기화하여 첫 페이지로 이동.
const lowPrice = () => {
    items.value.sort((a, b) => a.price - b.price);
    currentPage.value = 1; // 정렬 후 첫 페이지로 이동
    console.log(items.value.sort((a, b) => a.price - b.price))
};

const highPrice = () => {
    items.value.sort((a, b) => b.price - a.price);
    currentPage.value = 1; // 정렬 후 첫 페이지로 이동
};

</script>

<style scoped>
.banner {
    height: 400px;
    margin-bottom: 50px;
}

.sort-ranking {
    display: flex;
    align-items: center;
    gap: 50px;
    background-color: #f8f8f8;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 40px;
}

.sort-ranking li {
    font-family: "PretendardM";
    cursor: pointer;
}

.itemWrapper {
    width: 100%; 
    max-width: 1300px;
    margin: 0 auto;
    overflow: hidden;
}

.item {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0 0 20px;
    margin: -20px
}

.item .itemCell {
    box-sizing: border-box;
    width: calc(100% / 4);
    border: 0 solid transparent;
    border-width: 0 20px 6dvb 0;
}

.item .imgArea {
    width: 100%;
    height: 320px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4e4e4;
}

.item .imgArea img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}
.item .name { margin-top: 20px; }
.item .price { margin-top: 5px; }

.pagination {
    position: sticky;
    bottom: 0;
    margin: 30px 0;
    background-color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    padding: 10px 0;
}

.pagination li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #fff;
}
.pagination li.dis {  
    color: #ccc;
    cursor: inherit;
}
.pagination li.on { color: #3470cc; border-color: #3470cc; }
</style>