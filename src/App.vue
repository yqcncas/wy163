<template>
  <div id="app">
    <router-view></router-view>
    <Footers v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footers from './components/Footers'
export default {
  name: 'App',
  components:{
    Footers
  }
}
</script>

<style>

</style>
