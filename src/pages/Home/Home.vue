<template>
  <div>
    <Header/>
    <HeaderLogo/>
    <Banner/>
    <Policy/>
    <Nav/>
    <Guanggao/>
    <List/>
    <Bottom/>
  </div>
</template>

<script>
import Header from '../../components/Header'
import HeaderLogo from './conponents/HeaderLogo/HeaderLogo'
import Banner from './conponents/Banner/Banner'
import Policy from './conponents/policy/Policy'
import Nav from './conponents/Nav/Nav'
import Guanggao from './conponents/Guanggao/Guanggao'
import List from './conponents/List/List'
import Bottom from './conponents/Bottom/Bottom'
export default {
  components:{
    Header,
    HeaderLogo,
    Banner,
    Policy,
    Nav,
    Guanggao,
    List,
    Bottom
  }
}
</script>

<style>

</style>