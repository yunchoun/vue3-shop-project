<template>
    <UserNav></UserNav>
    <TheHeader></TheHeader>
    <TheNav></TheNav>
    <div class="banner"><img src="@/assets/images/bannerImg.jpg" alt=""></div>
    <router-view></router-view>
    <TheFooter></TheFooter>
</template>

<script setup>
import UserNav from '@/components/layout/UserNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheNav from '@/components/layout/TheNav.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<style>
.banner {
    width: 100%;
    font-size: 0;
}

.banner img {
    width: 100%;
}
</style>
