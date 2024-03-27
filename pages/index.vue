<script setup lang="ts">

import Filtration from "~/components/catalog/filtration.vue";
import axios from "axios";
import type {ItemsCard} from "~/interface/items";

const config = useRuntimeConfig()
const API_URL = config.public.apiBase

const apiURL = process.env.API_URL
const loading = ref<boolean>(false)
const items = ref<ItemsCard[]>([])
const filters = reactive({
  searchQuery: '',
  category: '*',
  color: "*",
  minPrice: "500",
  maxPrice: "80000"
})

const onChangeSearchInput = (event: any) => {
  filters.searchQuery = event.target.value
}

const onChangeCategory = (event: any) => {
  filters.category = event.target.value
}

const onChangeColors = (event: any) => {
  filters.color = event.target.value
}

const onChangePrice = (event: any) => {
  filters.minPrice = event.target.value
  filters.maxPrice = event.target.value
}


const fetchItems = async () => {
  try {
    loading.value = true

    const params = {
      category: filters.category,
      color: filters.color,
      price: filters.minPrice
    };

    if (filters.searchQuery) {
      params.name = `*${filters.searchQuery}*`
    }

    const {data} = await axios.get(API_URL + `/items`,
        {
          params
        }
    )
    items.value = data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchItems)
watch(filters, fetchItems)

provide('location', {
  onChangeCategory,
  onChangeColors,
  onChangePrice
})

</script>

<template>
  <main class="main">
    <div class="main-search">
      <input @input="onChangeSearchInput" class="main-search__input" type="text" placeholder="Я хочу купить...">
      <button class="main-search__button" type="button">
        <NuxtImg class="main-search__button-img" src="/img/search.png"/>
      </button>
    </div>
    <div class="main-wrapper">
      <Filtration/>
      <div class="main-catalog">
        <h2>Каталог</h2>
        <div class="main-catalog__items">
          <h2 v-if="loading">Загрузка данных</h2>
          <Item v-else :items="items"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.main {
  padding: 32px 0 70px;

  &-search {
    padding-bottom: 20px;
    position: relative;
    max-width: max-content;

    &__input {
      width: 761px;
      height: 60px;
      border-radius: 10px;
      background: rgb(247, 247, 247);
      padding-left: 59px;
      border: 0;
      outline: none;
      color: rgb(153, 153, 153);
      font-size: 16px;
      line-height: 120%;
    }

    &__button {
      position: absolute;
      top: 14px;
      right: 32px;
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 32px;
  }

  &-catalog {
    h2 {
      font-size: 24px;
      padding-bottom: 24px;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 32px;
    }
  }
}

</style>