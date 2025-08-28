import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 로그인 상태 관리 스토어
export const useAuthStore = defineStore("auth", () => {
    // 전역상태.
    const token = ref(localStorage.getItem("token"));
    const userStr = localStorage.getItem('user') // 저장된 문자열을 그대로 넣어줌.
    const user = ref(userStr && userStr !== 'undefined' && userStr !== 'null' ? JSON.parse(userStr) : null)

    // 파생상태(로그인 여부)
    const isLoggedIn = computed(() => !!token.value);

    console.log(token.value);


    // 상태 업데이트(로그인 성공 시 호출)
    function setAuth({ token: newToken, user: newUser }) {
        token.value = newToken;
        user.value = newUser;
        isLoggedIn.value = true;

        if (token.value) localStorage.setItem('token', token.value)
        else localStorage.removeItem('token')

        if (user.value) localStorage.setItem('user', JSON.stringify(user.value))
        else localStorage.removeItem('user')
    }

    // 상태 업데이트(로그아웃 시 호출)
    function logout() {
        setAuth({ token: null, user: null })
    }

    return { token, user, isLoggedIn, setAuth, logout };
});