<script setup lang="ts">

import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header/>
    <div class="container">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container{
  width: 1200px;
  margin: 0 auto;
  flex: 1;
}
</style>