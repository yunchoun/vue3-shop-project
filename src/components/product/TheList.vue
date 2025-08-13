<template>
    <!-- 상품페이지 리스트 - y -->
    <div class="contentWrap">
        <div class="banner"></div>
        <ul class="sort-ranking">
            <li class="srot-low-price">낮은가격순</li>
            <li class="srot-high-price">높은가격순</li>
            <li class="srot-newest">최신순</li>
        </ul>

        <div class="itemWrapper">
            <div class="item">
                <div class="itemCell" v-for="(item, idx) in items" :key="idx">
                    <!-- require() 함수를 사용하여 동적으로 이미지를 로드합니다. -->
                    <div class="imgArea"><img :src="require(`@/assets/images/${item.src}`)" alt=""></div>
                    <div class="name">{{ item.name }}</div>
                    <!-- toLocalString() - 브라우저의 로케일 설정을 기반으로 숫자를 포맷합니다. 천 단위 구분자를 자동으로 추가해줍니다. -->
                    <div class="price">{{ item.price.toLocaleString() }}원</div>
                </div>
            </div>
        </div>

        <ul class="pagination flexWrap g-50">
            <li>&#60;</li>
            <li>{{ currentPage }}</li>
            <li>&#62;</li>
        </ul>
    </div>
</template>

<script setup>
const items = [
    { src: 'item_1.jpg', name: '다이슨 청소기', price: 1000000 },
    { src: 'item_2.jpg', name: '냉장고', price: 10000 },
    { src: 'item_3.jpg', name: '대용량 디퓨저', price: 12000 },
    { src: 'item_4.jpg', name: '이동식 선반', price: 32000 },
    { src: 'item_1.jpg', name: '철 수세미', price: 1000 },
    { src: 'item_2.jpg', name: '냉장고', price: 10000 },
    { src: 'item_3.jpg', name: '공기정화식물', price: 8000 },
    { src: 'item_4.jpg', name: '화장실 슬리퍼', price: 31000 },
    { src: 'item_1.jpg', name: '다이슨 청소기', price: 1000000 },
    { src: 'item_2.jpg', name: '냉장고', price: 10000 },
    { src: 'item_3.jpg', name: '대용량 디퓨저', price: 12000 },
    { src: 'item_4.jpg', name: '이동식 선반', price: 32000 },
    { src: 'item_1.jpg', name: '철 수세미', price: 1000 },
    { src: 'item_2.jpg', name: '냉장고', price: 10000 },
    { src: 'item_3.jpg', name: '공기정화식물', price: 8000 },
    { src: 'item_4.jpg', name: '화장실 슬리퍼', price: 31000 },
]

const currentPage = 1;
const totalPages = Math.ceil(items.length / 8);
console.log(totalPages);


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
    border-width: 0 20px 20px 0;
}

.item .imgArea {
    width: 100%;
    height: 350px;
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

.pagination { position: sticky; bottom: 0; margin-top: 50px; background-color: rgba(255, 255, 255, 0.5); padding: 10px; box-sizing: border-box; }
</style>