<template>
  <div class="login">
    <router-view></router-view>
    <div>
      <van-row class="content">
        <van-col span="6"></van-col>
        <van-col span="12" class="cont">请先登录账号</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-row>
        <van-col span="4"></van-col>
        <van-col span="16">
          <div id="login_message">
            <van-cell-group>
              <van-field
                v-model="userList.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
              />
              <van-field
                v-model="userList.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
              />
              <van-button type="primary" @click="submitHandler">登录</van-button>
            </van-cell-group>
          </div>
        </van-col>
        <van-col span="4"></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0,
      userList:{
        "password": "123321",
        "type": "waiter",
        "username": "waiter1"
      }
    }
  },
  computed:{
  },
  created(){

  },
  methods:{
    ...mapActions("login",["loginIn"]),
    submitHandler(){
      // 获取到输入的服务员
      // console.log(this.userList);
      this.loginIn(this.userList)
      .then((response)=>{
          if(response.status === 200) {
            this.$notify({type:"success",message:"登录成功"});
            this.$router.push({path:'/manager/home'})
          }
      })
    }
  }
}
</script>
<style scoped>
.content{
  height:50px;
  line-height: 50px;
}
.cont{
  background-color: aquamarine;
  text-align: center;
}
#login_message{
  margin-top: 3em;
  padding: 1em;
  background-color: black;
}
</style>