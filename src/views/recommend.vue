<template>
  <span>推荐</span>
  <slider :sliders="sliders"></slider>
</template>

<script>
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider'
export default {
  name: 'recommend',
  components:{
    Slider
  },
  data() {
    return {
      sliders:[]
    }
  },
  async created() {
    const result = await getRecommend()
    this.sliders = result.sliders
  }
}
</script>