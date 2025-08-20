<template>
    <div class="userWrap">
        <ul class="user">
            <li class="login"><router-link to="/login">로그인</router-link></li>
            <li class="join"><router-link to="/join">회원가입</router-link></li>
        </ul>
    </div>
</template>

<script setup>

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