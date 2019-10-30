<template>
  <div class="order">
    <van-row>
        <van-col span="6"></van-col>
        <van-col span="12" class="top"><h2>订单</h2></van-col>
        <van-col span="6"></van-col>
    </van-row>
    <van-tabs v-model="active">
      <van-tab title="全部订单">
        {{addresses}}
      <van-panel v-for="c in orders" :title="'订单编号：'+c.id" :key="c.id" :status="c.status">
        <ul style="margin-left:20px">
          <li>总数：{{c.total}}</li>
          <li>下单时间：{{c.orderTime}}</li>
          <li>服务内容：{{c.remark}}</li>
          <li>地址：{{c.addressId}}</li>
        </ul>
      </van-panel>
      </van-tab>
      <van-tab title="未接订单">
        <van-panel v-for="c in orderss" :title="'订单编号：'+c.id" :key="c.id" :status="c.status">
        <ul style="margin-left:20px">
          <li>总数：{{c.total}}</li>
          <li>下单时间：{{c.orderTime}}</li>
          <li>服务内容：{{c.remark}}</li>
          <li>地址：{{c.addressId}}</li>
        </ul>
        <van-button v-if="true" type="danger" @click="reject(c.id)">拒绝</van-button>
        <van-button v-if="true" type="success" @click="accept(c.id)">接受</van-button>
      </van-panel>
      </van-tab>
      <van-tab title="已接单订单">
        <van-panel v-for="c in ordersss" :title="'订单编号：'+c.id" :key="c.id" :status="c.status">
        <ul style="margin-left:20px">
          <li>总数：{{c.total}}</li>
          <li>下单时间：{{c.orderTime}}</li>
          <li>服务内容：{{c.remark}}</li>
          <li>地址：{{c.addressId}}</li>
        </ul>
      </van-panel>
      </van-tab>
      <van-tab title="待确认订单">
        <van-panel v-for="c in orderssss" :title="'订单编号：'+c.id" :key="c.id" :status="c.status">
        <ul style="margin-left:20px">
          <li>总数：{{c.total}}</li>
          <li>下单时间：{{c.orderTime}}</li>
          <li>服务内容：{{c.remark}}</li>
          <li>地址：{{c.addressId}}</li>
        </ul>
        <van-button v-if="true" type="default" @click="finishHandler(c.id)">完成</van-button>
      </van-panel>
      </van-tab>
      <van-tab title="已完成订单">
        <!-- {{ordersssss}} -->
        <van-panel v-for="c in ordersssss" :title="'订单编号：'+c.id" :key="c.id" :status="c.status">
        <ul style="margin-left:20px">
          <li>总数：{{c.total}}</li>
          <li>下单时间：{{c.orderTime}}</li>
          <li>服务内容：{{c.remark}}</li>
          <li>地址：{{c.addressId}}</li>
        </ul>
      </van-panel>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default({
  data(){
    return {
      active:0,
      activeName:["1"]
    }
  },
  created(){
    this.findAllOrders();
    this.unPayOrders();
    this.unSendOrders();
    this.unServeOrders();
    this.finishOrders();
    this.deleteOrderById();

  },
  computed:{
    ...mapState("order",["orders","orderss","ordersss","orderssss","ordersssss","unSendOrder"]),
     ...mapState('address',['addresses'])
  },
  methods:{
    ...mapActions("order",["findAllOrders","unPayOrders","unSendOrders","unServeOrders","finishOrders","deleteOrderById","saveOrUpdateOrder","acceptOrder","rejectOrder"]),
    finishHandler(orderId){
      this.saveOrUpdateOrder({orderId})
      .then((response)=>{
          if(response.status === 200) {
            this.$notify({type:"success",message:"恭喜你完成一个订单"})
          }else{
            console.log(response.statusText)
          }
      })
    },
    reject(id){
      this.rejectOrder({id}).then(response=>{
        if(response.status === 200) {
            this.$notify({type:"success",message:"已拒绝"})
        }
      })
    },
    accept(id){ 
      // alert(id)
      this.acceptOrder({id}).then(response=>{
        if(response.status === 200) {
            this.$notify({type:"success",message:"已接单"})
        }
      })
    }
  }

})
</script>
<style scoped>
  .top{
    text-align: center;
  }
  .message{
    text-align: left;
  }
</style>