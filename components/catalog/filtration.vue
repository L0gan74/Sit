<script setup lang="ts">

import type {categoryInterface} from "~/interface/filtration";

const categorys: categoryInterface[] = [
  {
    id: 1,
    name: 'Диваны',
    value: "Диваны1"
  },
  {
    id: 2,
    name: 'Кресла',
    value: "Кресла1"
  },
  {
    id: 3,
    name: 'Пуфы',
    value: "Пуфы1"
  }
]

const value = ref([500, 80000])

const {
  onChangeCategory,
  onChangeColors,
  onChangePrice
} = inject("location")

</script>

<template>
  <div class="sidebar">
    <h3>Фильтровать по:</h3>
    <div @change="onChangeCategory" class="sidebar-category">
      <h4>Категория</h4>
      <label class="sidebar-category__list">
        <input value="*" type="radio" name="category"/>
        <span class="sidebar-category__list-custom"></span>
        Все категории
      </label>
      <label class="sidebar-category__list">
        <input value="sofa" type="radio" name="category"/>
        <span class="sidebar-category__list-custom"></span>
        Диваны
      </label>
      <label class="sidebar-category__list">
        <input value="chair" type="radio" name="category"/>
        <span class="sidebar-category__list-custom"></span>
        Кресла
      </label>
      <label class="sidebar-category__list">
        <input value="ottoman" type="radio" name="category"/>
        <span class="sidebar-category__list-custom"></span>
        Пуфы
      </label>
    </div>
    <div class="sidebar-category">
      <h4>Цена</h4>
      <div class="slider-demo-block">
        <el-slider @change="onChangePrice" show-input-controls v-model="value" range :min="500" :max="80000"/>
      </div>
    </div>
    <div @change="onChangeColors" class="sidebar-category">
      <h4>Цвет</h4>
      <label class="sidebar-category__list">
        <input value="*" type="radio" name="colors"/>
        <span class="sidebar-category__list-custom"></span>
        Все цвета
      </label>
      <label class="sidebar-category__list">
        <input value="Синий" type="radio" name="colors"/>
        <span class="sidebar-category__list-custom"></span>
        Синий
      </label>
      <label class="sidebar-category__list">
        <input value="Белый" type="radio" name="colors"/>
        <span class="sidebar-category__list-custom"></span>
        Белый
      </label>
      <label class="sidebar-category__list">
        <input value="Фиолетовый" type="radio" name="colors"/>
        <span class="sidebar-category__list-custom"></span>
        Фиолетовый
      </label>
    </div>
  </div>
</template>

<style lang="scss">

.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.sidebar {
  h3 {
    font-size: 18px;
    line-height: 130%;
    padding-bottom: 19px;
  }

  &-category {
    padding-bottom: 15px;

    h4 {
      color: rgb(102, 102, 102);
      font-size: 16px;
      font-weight: 600;
      line-height: 130%;
      padding-bottom: 9px;
    }

    &__list {
      cursor: pointer;
      display: block;
      padding-bottom: 12px;

      input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        z-index: -1;

        &:checked + .sidebar-category__list-custom::before {
          transform: translate(50%, 50%) scale(1);
        }
      }

      label {
        font-size: 16px;
        color: rgb(102, 102, 102);
        line-height: 130%;
      }

      &-custom {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: white;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 2px;
        margin-right: 12px;
        vertical-align: sub;
        position: relative;

        &:before {
          content: '';
          display: inline-block;
          width: 9px;
          height: 9px;
          background: rgb(166, 92, 240);
          position: absolute;
          transform: translate(50%, 50%) scale(0);
          transition: 0.2 ease-in;
        }
      }
    }
  }
}

</style>