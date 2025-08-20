import { defineStore } from "pinia";
import { ref } from "vue";
export const useWishStore = defineStore("wishStore", () => {
    const wishList = ref([]);

    function toggle(productId) {
        if (wishList.value.includes(productId)) {
            wishList.value = wishList.value.filter(id => id !== productId)
        } else {
            wishList.value.push(productId);
        }
    }


    return { wishList, toggle};
});