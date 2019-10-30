<template>
  <div class="home">
    <van-nav-bar title="我的" style="border:.5px solid #ededed"></van-nav-bar>
    <van-row>
      <img style="width:100%" src="../../assets/images/home_02.png" alt="">
    </van-row>
    <van-row>
      <van-grid :column-num="3">
        <!-- {{categories}} -->
        <van-grid-item
          v-for="c in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        />
      </van-grid>
    </van-row>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created(){
    this.findAllCategories();
  },
  computed:{
    ...mapState("category",["categories"])
  },
  methods:{
    ...mapActions("category",["findAllCategories"])
  }
}
</script>