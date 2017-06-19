<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;float:left;font-size:18px">{{mTypeTitle}}</span>
      <router-link :to="{ name: 'more', params: { type: 'commingSoon' }}">
      <el-button style="float: right;font-size:18px" type="primary">
      	更多
      	<i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
      </router-link>
    </div>

    <div class="rowHeight">
      <div class="rowWidth" >
        <el-row   class="rowWrap">
          <MitemSimpleWithStar v-for="item in movies" :key="item" :item="item"> </MitemSimpleWithStar>
          <MitemSimpleMore :all="movies.length"> </MitemSimpleMore>
        </el-row>
      </div>
    </div>
  </el-card>
</template>

<script>
import MitemSimpleWithStar from "./MitemSimpleWithStar"
import MitemSimpleMore from "./MitemSimpleMore"
import { mapState } from 'vuex'
export default {
  name: 'Mtype',
  data () {
    return {
      mTypeTitle: '影院热映'
      // movies:[1,2,3,4,5,6,7,8,9,10]
    }
  },
  computed:{
    ...mapState({
      movies: 'movies',
    }) 
  },
  components:{
    MitemSimpleWithStar,
  	MitemSimpleMore
  },
  created () {
    console.log(this.$store)
    this.$store.dispatch('getAllMovies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .clearfix:before,
 .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both;

  }
  .rowWrap{
    width:4000px;
    text-align:left;     

  }
.rowWidth {
  width: 1000px;
      overflow-x: auto;
      height: 600px
}
.rowHeight {
  height: 550px;
  overflow-y:hidden;
}
</style>
