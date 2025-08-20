<template>
    <header>
        <div class="flexWrap g-50 p-10">
            <div class="logo"><router-link to='/'><img src="@/assets/images/logo.png" alt="로고" /></router-link></div>
            <div class="flexWrap searchForm">
                <select name="" id="">
                    <option value="">전체</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요">
            </div>
            <router-link to="/cart" class="cart">
                <i class="bi bi-bag"></i>
                <span class="text">장바구니</span>
            </router-link>

        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
header {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

header .logo {
    width: 100px;
}

header .logo img {
    width: 100%;
}


header nav {
    display: flex;
    align-items: center;
}

.searchForm {
    border: 2px solid #3470cc;
    box-sizing: border-box;
}

.searchForm select {
    height: 40px;
    border: none;
    border-right: 1px solid #dbdbdb;
    padding: 0 20px 0 5px;
    box-sizing: border-box;
}

.searchForm input {
    height: 40px;
    border: none;
    box-sizing: border-box;
    padding: 0 20px;
}


input:focus,
select:focus {
    border: none;
    border-right: 1px solid #dbdbdb;
    outline: none;
}

input:focus-visible,
select:focus-visible {
    border: none;
    border-right: 1px solid #dbdbdb;
    outline: none;
}

header .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header .cart i {
    font-size: 24px;
}

header .cart .text {
    font-size: 14px;
}
</style>