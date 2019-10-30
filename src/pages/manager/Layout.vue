<template>
  <div class="order">
    <router-view></router-view>
    <div>
      <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/manager/home" icon="star-o">首页</van-tabbar-item>
        <van-tabbar-item name="/manager/order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item name="/manager/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:0
    }
  },
  methods:{
    tabChangeHandler(path){
      this.$router.push({path})
    }
  }
}
</script>