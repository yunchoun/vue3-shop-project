<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/product">상품</router-link></li>
      </ul>
    </nav>
  </header>

  <div class="viewContent">
    <router-view></router-view>
  </div>

  <footer></footer>
</template>

<script>

</script>

<style>
header { display: flex; align-items: center; height: 50px; }
header nav { width: 100%; max-width: 1400px; margin: 0 auto; }
.viewContent { width: 100%; max-width: 1400px; margin: 0 auto; }
</style>
