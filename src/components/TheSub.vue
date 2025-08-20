<template>
    <UserNav></UserNav>
    <TheHeader></TheHeader>
    <TheNav></TheNav>
    <TheBreadcrumb></TheBreadcrumb>
    <router-view></router-view>
</template>

<script setup>
import UserNav from '@/components/layout/UserNav.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheNav from '@/components/layout/TheNav.vue';
import TheBreadcrumb from '@/components/layout/TheBreadcrumb.vue';
</script>

<style lang="scss" scoped></style>