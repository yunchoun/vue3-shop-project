<template>
  <router-view></router-view>
</template>

<script setup>


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

</style>
