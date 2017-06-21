<template>
  <router-link :to="{ name: 'more', params: { type: mTypeId }}">
  <div class="mCard">
    <el-card :body-style="{ padding: '0px'} ">
      <div class="imgSize">
          <div class="moreContent"> 
            <div>全部</div>
            <hr/>
            <!-- <div>{{all}}部</div> -->
            <div>{{all}}部</div>
          </div>
        <!-- <img src="../assets/logo.png" > -->
      </div>
      <div class="myfoont"> 
        <span class="movieName">{{movieName}}</span>
         <el-rate  
          :max="5"
          disabled
          show-text
          text-color="#ff9900"
        :text-template="displayPointes">
        </el-rate>
      </div>
    </el-card>
  </div>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MitemSimpleMore',
  props: ['all',"mTypeId"],
  data () {
    return {
      movieName: '神奇女侠'

    }
  },
  computed: {
  	displayPointes:function(){
  		 return (this.points * 2).toString();
  	},
    allTypes:function(){
      // console.log('1')
      // console.log(this.$store)
      // console.log(this.$store.state.movies)
        // console.log('2')
       return this.$store.state.movies.length;
    },
  },
  components:{
  	// Mtype
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imgSize {
  width: 318px;
  height: 447px;
  margin:auto;
    display: flex;
  align-items: center;
  justify-content: center;
   background-color: #D3DCE6;
}
.mCard {
  width: 320px;
  /*height: 300px;*/
     margin: 10px 10px; 
  display: inline-block;
  text-align: center;
}
.movieName {
  font-size: 2rem;
}
.myfoont {
  visibility: hidden;
  padding: 14px;
   height: 62px;
}
.moreContent {
  font-size: 1.5rem;
  /*height: 20px;*/
}
</style>
