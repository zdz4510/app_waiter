<template>
  <div class="user">
    
    <van-nav-bar title="我的" style="border:.5px solid #ededed"></van-nav-bar>
    <div>
      <div style="text-align:center;background-color:#fff;">
        <van-image
        round
        width="8rem"
        height="8rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="name">{{customers.name}}</div>
      <div class="btn">
        <van-button plain url="/login">退出</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState("login",["customers"])
  },
  methods:{
    //普通方法
    showTelephone(){
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    toMyOrder(){
      this.$router.push('./Order')
    },
    toHelp(){
      this.$router.push('./Help')
    },
    toMyaddress(){
      this.$router.push('./Address')
    },
  }
}
</script>

<style scoped>
.name{
  background-color: #fff;
  text-align: center;
}
.btn{
  background-color: #fff;
}
</style>