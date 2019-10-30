import {get,post,post_array} from '../http/axios';

export default {
  namespaced:true,
  state:{
    unPayOrder:[],
    orders:[],
    orderss:[],
    ordersss:[],
    orderssss:[],
    ordersssss:[],
    ordermes:[],
    visible:false,
    title:"添加顾客信息"
  },
  getters:{
  },
  mutations:{
    //获取所有的订单信息
    refreshOrders(state,orders){
      state.orders = orders;
    },
    // findOrdermes(state,order){
    //   state.orders = orders;
    // },
    unPay(state,orderss){
   let a=orderss.filter((item) => {
            return item.status ==="待接单"
        })
        state.orderss=a;
    },
    unSend(state,ordersss){
      let b=ordersss.filter((item) => {
            return item.status ==="待服务"
        })
        state.ordersss=b;
    },
    unServe(state,orderssss){
      let c=orderssss.filter((item) => {
            return item.status ==="待派单"
        })
        state.orderssss=c;
    },
    finish(state,ordersssss){
      let d=ordersssss.filter((item) => {
            return item.status ==="已完成"
        })
        state.ordersssss=d;
    },
    setTitle(state,title){
      state.title = title;
    }
  },
  actions:{
    async batchDeleteOrder(context,ids){
      // 1. 批量删除
      let response = await post_array("/order/batchDelete",{ids})
      // 2. 分发
      context.dispatch("findAllOrders");
      // 3. 返回结果
      return response;
    },
    async deleteOrderById(context,id){
      let response = await get("/order/deleteById?id="+id);
      context.dispatch("findAllOrders");
      return response;
    },
    async findAllOrders(context){
      // 1. ajax查询
      let response = await get("/order/findAll");
      // 2. 将查询结果更新到state中
      context.commit("refreshOrders",response.data);
    },
    async finishOrders(context){
      // 1. ajax查询
      let response = await get("/order/findAll");
      // 2. 将查询结果更新到state中
      context.commit("finish",response.data);
    },
    async unPayOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unPay",response.data);
      },
      async unSendOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unSend",response.data);
      },
      async unServeOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unServe",response.data);
      },
    // payload 员工信息
    async saveOrUpdateOrder(context,payload){
      // 1. 保存或更新
      console.log(payload)
      let response = await get("/order/serviceCompleteOrder",payload)
      // 2. 刷新页面
      context.dispatch("findAllOrders");
      // 4. 提示
      return response;
    },
    // 拒绝订单
    async rejectOrder({dispatch},orderId){
      let response = await get("/order/rejectOrder",{orderId});
      dispatch("findAllOrders");
      return response;
    },
     // 接受订单
     async acceptOrder({dispatch},orderId){
      let response = await get("/order/takeOrder",{orderId});
      dispatch("findAllOrders");
      return response;
    }
  }
}