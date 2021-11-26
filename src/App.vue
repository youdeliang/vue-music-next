<template>
  <m-header></m-header>
  <tab></tab>
  <!-- 路由视图组件  支持嵌套-->
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header, 
    Tab:Tab,
  },
}
</script>
