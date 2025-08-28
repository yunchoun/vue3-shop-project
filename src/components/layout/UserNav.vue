<template>
    <div class="userWrap">
        <ul class="user">
            <template v-if="!isLoggedIn">
                <li class="login"><router-link to="/login">로그인</router-link></li>
                <li class="join"><router-link to="/join">회원가입</router-link></li>
            </template>
            <template v-else>
                <li class="logout" @click="onLogout">로그아웃</li>
                <li class="mypage"><router-link to="/mypage">마이페이지</router-link></li>
            </template>
        </ul>
    </div>
</template>

<script setup>
    // import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '@/stores/authStore';

    const auth = useAuthStore();
    const { isLoggedIn, user } = storeToRefs(auth);
    // const router = useRouter(); 
    console.log(user);
    

    function onLogout() {
        auth.logout();
        // router.push({ name: 'MainView' });
    }
</script>

<style scoped>
.userWrap {
    background-color: #e5e7eb;
}

.user {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
}
</style>