<template>
    <div class="moreMain">
		<mt-navbar v-model="selected" :fixed="true" :value="selected" >
		    <mt-tab-item id="1">正在热映</mt-tab-item>
		    <mt-tab-item id="2">即将上映</mt-tab-item>
	    </mt-navbar>	
	    <div class="moreMainBottom">
		    <mt-tab-container v-model="selected">
			      <mt-tab-container-item id="1"
			      v-infinite-scroll="loadMore"
			      infinite-scroll-disabled="loading"
			      infinite-scroll-distance="10">
			        <!-- <mt-cell v-for="n in lists" :key="n" > -->
			        <div v-for="n in lists" :key="n">
			         <MitemHorizontalWithStar :key="n" :item="n"> </MitemHorizontalWithStar>
			        </div>
			        	        
			        <!-- </mt-cell> -->

			
			             <!-- <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner> -->
			      </mt-tab-container-item>
			      <mt-tab-container-item id="2">
			        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
			      </mt-tab-container-item>
		    </mt-tab-container>	
	    </div>
    </div>
</template>

<script>
import MitemHorizontalWithStar from "./MitemHorizontalWithStar"
export default {
  name: 'moreMain',
  data(){
  	return {
      msg: 'Welcome to Your Vue.js App',
      selected:'1',
      loading:false,
      lists:[1,2,3,4,5,6,7,8,9,10,11]
  	}
  },
  components:{
    MitemHorizontalWithStar
  },
  methods:{
    loadMore() {
      this.loading = true;
      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // });
      // setTimeout(() => {
      //   let last = this.lists[this.lists.length - 1];
      //   for (let i = 1; i <= 10; i++) {
      //     this.lists.push(last + i);
      //   }
      //   Indicator.close();
      //   this.loading = false;
      // }, 2500);
    }
  }
}
</script>

<style >
.moreMain .mint-tab-item-label {
	font-size: 70px;
}
.moreMainBottom {
	margin-top: 80px;
}

</style>