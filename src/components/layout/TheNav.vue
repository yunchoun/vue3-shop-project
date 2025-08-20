<template>
    <div class="contentWrap">
        <nav class="flexWrap start g-50 p-10 category">
        <ul>
            <li><router-link to="/product" active-class="on">상품</router-link></li>
        </ul>
    </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
ul li a:hover, ul li a.on { color: #3470cc; }
</style>