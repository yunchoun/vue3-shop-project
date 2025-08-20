<template>
    <nav class="flexWrap start g-50 p-10 category">
        <ul>
            <li><router-link to="/product" active-class="on">상품</router-link></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.category {
    /* border-top: 1px solid #d1d1d1; */
}
ul li a:hover, ul li a.on { color: #3470cc; }
</style>