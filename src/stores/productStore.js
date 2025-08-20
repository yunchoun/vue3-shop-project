import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('products', () => {
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

    const getById = (id) => items.value.find(item => item.id === id);

    return { items, getById };
})