<script setup lang="ts" generic="T extends  ItemsCard">

import type {ItemsCard} from "~/interface/items";

defineProps<{
  items: T[]
}>()

</script>

<template>
  <div class="card" v-for="item in items" :key="item.id">
    <div class="card-star">
      <NuxtImg class="card-star__img" src="/img/star.png" alt="star"/>
      <p class="card-star__text">{{ item.review }}</p>
    </div>
    <div class="card-description">
      <NuxtImg class="card-img" v-for="image in item.images" :src="image" :key="image" alt="img"/>
      <h3 class="card-name">{{ item.name }}</h3>
      <p class="card-price">{{ item.price }} руб</p>
      <NuxtLink :to="`/cart/${item.id}`" class="card-link" type="button">Купить</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

.card {
  border-radius: 10px;
  background: rgb(247, 247, 247);
  position: relative;
  padding: 15px;
  min-height: 420px;

  &-star {
    position: absolute;
    z-index: 4;
    top: 33px;
    left: 30px;
    display: flex;
    align-items: center;
    gap: 5px;

    &__img {
      width: 22px;
      object-fit: cover;
    }

    &__text {
      color: rgb(255, 134, 47);
      font-size: 16px;
      line-height: 130%;
    }
  }

  &-img {
    width: 100%;

    &:not(:first-child) {
      display: none;
    }
  }

  &-description {
    position: absolute;
    bottom: 30px;
    right: 15px;
    left: 15px;
  }

  &-name {
    font-size: 24px;
    line-height: 130%;
    padding: 16px 0 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 83px;
  }

  &-price {
    color: rgb(102, 102, 102);
    font-size: 16px;
    line-height: 130%;
    padding-bottom: 24px;
  }

  &-link {
    border: 2px solid rgb(166, 92, 240);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 54px;
    color: rgb(166, 92, 240);
    font-size: 16px;
    font-weight: 600;
  }
}

</style>