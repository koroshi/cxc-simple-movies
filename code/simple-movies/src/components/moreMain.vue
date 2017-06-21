<template>
    <div class="moreMain">
<!--      <router-link :to="{ name: 'more', params: { type: 'commingSoon' }}">
     返回
     </router-link> -->
		<mt-navbar v-model="type" :fixed="true" :value="type" >
            <mt-tab-item id="3">
         <router-link :to="{ name: 'Mhome'}">

     返回
     <!-- type -->
  </router-link>
        </mt-tab-item>
		    <mt-tab-item id="hot">
        <router-link :to="{ name: 'more', params: { type: 'hot' }}">
          正在热映
          </router-link>
          </mt-tab-item>
        <mt-tab-item id="comingSoon">
        
       <router-link :to="{ name: 'more', params: { type: 'comingSoon' }}">
          即将上映
          </router-link>
        </mt-tab-item>
                  

  
           
	    </mt-navbar>	
	    <div class="moreMainBottom">
		    <mt-tab-container v-model="type">
			      <mt-tab-container-item :id="'hot'"
			      v-infinite-scroll="loadMore"
			      infinite-scroll-disabled="loading"
			      infinite-scroll-distance="10">
			        <!-- <mt-cell v-for="n in lists" :key="n" > -->
			        <div v-for="n in hotMovies" :key="n">
			         <MitemHorizontalWithStar :key="n" :movie="n"> </MitemHorizontalWithStar>
			        </div>
			        	        
			        <!-- </mt-cell> -->

			
			             <!-- <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner> -->
			      </mt-tab-container-item>
			      <mt-tab-container-item id="comingSoon"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
                          <div v-for="n in commingMovies" :key="n">
               <MitemHorizontalWithStar :key="n" :movie="n"> </MitemHorizontalWithStar>
              </div>
			        <!-- <mt-cell v-for="n in commingMovies" :title="'测试 ' + n" :key="n" /> -->
			      </mt-tab-container-item>
		    </mt-tab-container>	
	    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import MitemHorizontalWithStar from "./MitemHorizontalWithStar"
export default {
  name: 'moreMain',
    // props: ["type"],
  data(){
  	return {
      msg: 'Welcome to Your Vue.js App',
      // selected:'hot',
      loading:false,
      lists:[1,2,3,4,5,6,7,8,9,10,11]
  	}
  },
  components:{
    MitemHorizontalWithStar
  },
  computed:{
    ...mapState({
      movies: 'movies',
      commingMovies: 'commingMovies',
      hotMovies: 'hotMovies',
    }) ,
    type:function(){
       return this.$route.params.type;
    }
    // type: (()=> this.$route.params.type)
    // type:this.$route.params.type
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