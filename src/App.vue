<template>
  <header>
    <ul class="user">
      <li class="login"><router-link to="/login">로그인</router-link></li>
      <li class="join"><router-link to="/join">회원가입</router-link></li>
    </ul>
    <div class="category">
      <div class="logo"><router-link to='/'><img src="@/assets/images/logo.png" alt="로고" /></router-link></div>
      <nav>
        <ul>
          <li><router-link to="/product">상품</router-link></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="viewContent">
    <router-view></router-view>
  </div>

  <footer></footer>
</template>

<script>

</script>

<style>
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
.user { width: 100%; display: flex; align-items: center; justify-content: flex-end; gap: 30px; padding: 5px 10px; box-sizing: border-box; background-color: #e5e7eb; }
.category { display: flex; align-items: center; gap: 50px; padding: 10px; box-sizing: border-box; }

.viewContent {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
