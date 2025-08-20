import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore("count", () => {
    const count = ref(1);
    const increment = () =>{
        count.value++;
    }

    const decrement = () => {
        if(count.value > 1){
            count.value--;
        }
    }

    return { count, increment, decrement };
});