<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};

</script>

<template>
  <swiper
      :pagination="{
      type: 'fraction',
    }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="img in images">
      <NuxtImg :src="img" alt="img"/>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.mySwiper{
  width: -webkit-fill-available;
}
</style>