<template>
    <!-- 상품페이지 리스트 - y -->
    <ul class="sort-ranking">
        <li class="srot-low-price">낮은가격순</li>
        <li class="srot-high-price">높은가격순</li>
        <li class="srot-newest">최신순</li>
    </ul>

    <div class="itemWrapper">
        <div class="item">
            <div class="itemCell" v-for="(item, idx) in items" :key="idx">
                <div class="imgArea"><img :src="`@/assets/images/${item.src}`" alt=""></div>
                <div class="name">{{ item.name }}</div>
                <!-- toLocalString() - 브라우저의 로케일 설정을 기반으로 숫자를 포맷합니다. 천 단위 구분자를 자동으로 추가해줍니다. -->
                <div class="price">{{ item.price.toLocaleString() }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = [
    { src: 'product_1.png', name: '다이슨 청소기', price: 1000000 },
    { src: 'product_2.png', name: '냉장고', price: 10000 },
    { src: 'product_3.png', name: '대용량 디퓨저', price: 12000 },
    { src: 'product_4.png', name: '이동식 선반', price: 32000 },
    { src: 'product_5.png', name: '철 수세미', price: 1000 },
    { src: 'product_6.png', name: '냉장고', price: 10000 },
    { src: 'product_7.png', name: '공기정화식물', price: 8000 },
    { src: 'product_8.png', name: '화장실 슬리퍼', price: 31000 },
]

</script>

<style>
.sort-ranking { display: flex; align-items: center; gap: 50px; background-color: #f8f8f8; padding: 20px; box-sizing: border-box; }
.sort-ranking li { font-family: "PretendardM"; cursor: pointer; }

.itemWrapper {overflow:hidden;}
.item {display:flex; flex-wrap:wrap; padding:10px 0 0 10px; margin:-10px}
.item .itemCell {
	box-sizing:border-box;
	width:calc(100% / 4);
	border:0 solid transparent;
	border-width:0 10px 10px 0;
}
</style>