<template>
  <div class="userWrap">
    <ul class="user">
      <li class="login"><router-link to="/login">로그인</router-link></li>
      <li class="join"><router-link to="/join">회원가입</router-link></li>
    </ul>
  </div>
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
    <nav class="flexWrap start g-50 p-10 category">
      <ul>
        <li><router-link to="/product">상품</router-link></li>
      </ul>
    </nav>
  </header>

  <div class="viewContent">
    <router-view></router-view>
  </div>

  <footer>
    <div class="copy">© Copyright 2025</div>
  </footer>
</template>

<script>

</script>
<style>
/* 공통 */
.contentWrap {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.fullContentWrap {
  width: 100%;
}

.flexWrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flexWrap.start {
  justify-content: flex-start;
}

.g-50 {
  gap: 50px;
}
.g-10 {
  gap: 10px;
}

.p-10 {
  padding: 10px;
  box-sizing: border-box;
}

/* */

.userWrap { background-color: #e5e7eb; }
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

.category {
  border-top: 1px solid #d1d1d1;
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart i {
  font-size: 24px;
}

.cart .text {
  font-size: 14px;
}

footer {
  background-color: rgb(77, 77, 77);
  height: 100px;
}

footer .copy {
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
