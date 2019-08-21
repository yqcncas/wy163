<template>
  <div id="app">
    <router-view></router-view>
    <Footers/>
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
