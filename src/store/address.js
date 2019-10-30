import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    addresses:[]
  },
  mutations:{
    refreshAddress(state,addresses){
      state.addresses = addresses;
    }
  },
  actions:{
    async findAddressByCustomerId(context,id){
      let response = await get("/address/findByCustomerId?id="+id);
      context.commit("refreshAddress",response.data)
    },
    async findAllAddresses(context){
      let response = await get('/address/findAll')
      context.commit('refreshAddress',response.data)
    }
  }
}