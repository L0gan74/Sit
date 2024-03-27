<script setup lang="ts">

import type {ItemIdCard} from "~/interface/items";
import axios from "axios";
import Swiper from "~/components/cart/swiper.vue";

const config = useRuntimeConfig()
const API_URL = config.public.apiBase

const route = useRoute()
const loading = ref<boolean>(false)
const item = ref<ItemIdCard | null>(null);

const fetchItemId = async () => {
  try {
    loading.value = true
    const {data} = await axios.get<ItemIdCard>(API_URL + `/items/${route.params.id}`)
    item.value = data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchItemId)

</script>

<template>
  <h2 v-if="loading"></h2>
  <div v-else class="card">
    <div class="card-content">
      Картинки будут
      <p class="card-content__description">
        {{ item?.description }}
      </p>
    </div>
    <div class="card-info">
      <div class="card-info__star">
        <NuxtImg class="card-info__star-img" src="/img/star.png" alt="star"/>
        <div class="card-info__star-review">{{ item?.review }}</div>
      </div>
      <h3 class="card-info__name">{{ item?.name }}</h3>
      <h2 class="card-info__price">{{ item?.price }}</h2>
      <button class="card-info__buy" type="button">Купить в один клик</button>
      <button class="card-info__basket" type="button">+ Добавить в корзину</button>
      <div class="card-info__characteristics">
        <div class="card-info__characteristics-param">
          <p>Основные размеры товара</p>
          <p>{{ item?.size }}</p>
        </div>
        <div class="card-info__characteristics-param">
          <p>Цвет</p>
          <p>{{ item?.color }}</p>
        </div>
        <div class="card-info__characteristics-param">
          <p>Обивка</p>
          <p>{{ item?.upholstery }}</p>
        </div>
        <div class="card-info__characteristics-param">
          <p>Материал</p>
          <p>{{ item?.material }}</p>
        </div>
        <div class="card-info__characteristics-param">
          <p>Наполнитель</p>
          <p>{{ item?.filler }}</p>
        </div>
        <div class="card-info__characteristics-param">
          <p>Гарантия</p>
          <p>{{ item?.guarantee }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  &-content {
    &__description {
      padding-top: 32px;
      line-height: 180%;
    }
  }

  &-info {
    &__star {
      display: flex;
      align-items: center;
      gap: 5px;
      padding-bottom: 5px;

      &-img {
        width: 22px;
        object-fit: cover;
      }

      &-review {
        color: rgb(255, 134, 47);
        font-size: 16px;
        line-height: 130%;
      }
    }

    &__name {
      padding-bottom: 21px;
    }

    &__price {
      padding-bottom: 21px;
    }

    &__buy {
      border-radius: 10px;
      background: rgb(166, 92, 240);
      padding: 19px 35px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }

    &__basket {
      color: rgb(166, 92, 240);
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      width: 224px;
    }

    &__characteristics {
      padding: 40px 0 30px;

      &-param {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        p{
          line-height: 180%;
        }
      }
    }
  }
}
</style>