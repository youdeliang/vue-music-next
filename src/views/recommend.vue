<template>
  <span>推荐</span>
</template>

<script>
import { getRecommend } from '@/service/recommend'
export default {
  name: 'recommend',
  async created() {
    const result = await getRecommend()
    console.log('result :>> ', result)
  },
}
</script>