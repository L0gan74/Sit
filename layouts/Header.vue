<script setup lang="ts">

</script>

<template>
  <div class="topbar">
    <div class="topbar-container">
      <div class="topbar-dropdown">
        <p>Ваш регион:</p>
        <select>
          <option>Москва</option>
          <option>Питер</option>
          <option>Город</option>
          <option>Ещё город</option>
        </select>
      </div>
      <NuxtLink to="tel:+7(495)8854547" class="topbar-phone">
        <NuxtImg src="/img/phone.svg" alt="phone"/>
        +7 (495) 885-45-47
      </NuxtLink>
      <div class="topbar-nav">
        <NuxtLink to="">О компании</NuxtLink>
        <NuxtLink to="">Гарантия и возврат</NuxtLink>
        <NuxtLink to="">Корпоративным клиентам</NuxtLink>
        <NuxtLink to="">Дизайн-решение</NuxtLink>
      </div>
    </div>
  </div>
  <header class="header">
    <NuxtImg class="header-logo" src="/img/logo.svg" alt="logo"/>
    <nav class="header-nav">
      <NuxtLink active-class="_active" to="/">Каталог</NuxtLink>
      <NuxtLink active-class="_active" to="">Магазины</NuxtLink>
      <NuxtLink active-class="_active" to="">Шоу-рум</NuxtLink>
      <NuxtLink active-class="_active" to="">Доставка и оплата</NuxtLink>
      <NuxtLink active-class="_active" to="">Дисконт</NuxtLink>
      <NuxtLink active-class="_active" to="">Контакты</NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.topbar {
  background: rgb(247, 247, 247);

  &-container {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-dropdown{
    display: flex;
    align-items: center;
    gap: 4px;
    p{
      font-size: 16px;
      line-height: 120%;
    }
    select{
      color: rgb(112, 51, 172);
      font-size: 16px;
      line-height: 120%;
      -webkit-appearance: none; /* Safari and Chrome */
      -moz-appearance: none; /* Firefox */
      appearance: none;
      background: none;
      border: 0;
      cursor: pointer;
      background-image: url("/img/select.svg");
      background-position: right center;
      background-repeat: no-repeat;
      background-size:12px;
      width: 110px;
      transition: background-position 0.3s ease-in-out;
      &:focus {
        outline: none;
      }
    }
  }

  &-phone{
    color: rgb(255, 134, 47);
    display: flex;
    align-items: center;
    gap: 4px;
    img{
      width: 22px;
      height: 22px;
    }
  }
  &-nav{
    display: flex;
    gap: 54px;
    a{
      color: rgb(153, 153, 153);
    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 37px 0;

  &-logo {
    width: 187px;
    display: block;
    object-fit: cover;
  }
  &-nav{
    display: flex;
    gap: 80px;
    a{
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>