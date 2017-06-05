<template>
  <div class="mCard">
    <el-card :body-style="{ padding: '0px'}">
       <div class="imgSize">
          <img src="../assets/logo.png" >
       </div>
      <div class="myfoont">
        <span class="movieName">{{movieName}}</span>
        <el-rate
          :max="5"
		      v-model="points"
		      disabled
		      show-text
		      text-color="#ff9900"
		    :text-template="displayPointes">
		    </el-rate>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MitemSimpleWithStar',
  data () {
    return {
      movieName: '神奇女侠',
      points:4.1
    }
  },
  computed: {
  	displayPointes:function(){
  		 return (this.points * 2).toString();
  	}
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
}
.mCard {
    margin: 10px 10px; 
  width: 320px;
  /*height: 300px;*/
  display: inline-block;
  text-align: center;
}
.movieName {
  font-size: 2rem;
}
.myfoont {
  padding: 14px;
   height: 62px;
}
</style>
