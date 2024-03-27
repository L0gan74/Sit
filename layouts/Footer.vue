<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-item">
        <NuxtImg class="footer-logo" src="/img/logo.svg" alt="logo"/>
        <div class="footer-item__social">
          <NuxtImg src="/img/fb.svg" alt="fb"/>
          <NuxtImg src="/img/vk.svg" alt="vk"/>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="footer-item">
          <h4>О нас</h4>
          <NuxtLink to="">О компании</NuxtLink>
          <NuxtLink to="">Блог</NuxtLink>
        </div>
        <div class="footer-item">
          <h4>Услуги</h4>
          <NuxtLink to="">Доставка</NuxtLink>
          <NuxtLink to="">Рассрочка и кредит</NuxtLink>
          <NuxtLink to="">Сборка и установка</NuxtLink>
        </div>
        <div class="footer-item">
          <h4>Связь с нами</h4>
          <NuxtLink to="">Обратная связь</NuxtLink>
          <NuxtLink to="">Контакты</NuxtLink>
        </div>
        <div class="footer-item">
          <h4>Сотрудничество</h4>
          <NuxtLink to="">Поставщикам</NuxtLink>
          <NuxtLink to="">Оптовикам</NuxtLink>
          <NuxtLink to="">Карьера</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
  <div class="ending">
    SDP® 2011-2024
  </div>
</template>

<style scoped lang="scss">

.footer {
  background: rgb(234, 234, 234);

  &-logo {
    width: 187px;
    display: block;
    object-fit: cover;
    margin-bottom: 31px;
  }

  &-container {
    width: 1200px;
    margin: 0 auto;
    padding: 29px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20%;
  }

  &-item {
    &__social {
      gap: 20px;
      display: flex;

      img {
        width: 30px;
        height: 30px;
      }
    }

    h4 {
      font-size: 16px;
    }

    a {
      color: rgb(153, 153, 153);
      padding-top: 10px;
      display: block;
    }
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }
}

.ending {
  display: flex;
  justify-content: center;
  padding: 5px 0;
  color: rgb(153, 153, 153);
  line-height: 19px;
}

</style>