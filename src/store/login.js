import {get,post,post_array} from '../http/axios';
import axios from 'axios';

export default {
  namespaced:true,
  state:{
    customers:[]
  },
  getters:{
  },
  mutations:{
    refreshCustomers(state,customers){
      state.customers = customers;
    },
    setTitle(state,title){
      state.title = title;
    }
  },
  actions:{
      async loginIn(context,user) {
          let login_response = await axios.post("/user/login",user);
          console.log(login_response.data)
          let info_response = await get("/user/info?token="+login_response.data.token);
          context.commit("refreshCustomers",info_response.data);
          return info_response;
      }
  }
}