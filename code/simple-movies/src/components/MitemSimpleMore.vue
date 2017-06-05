<template>
  <div class="mCardMore">
    <el-card :body-style="{ padding: '0px'} ">
    <div class="myBody">
          <div class="moreContent"> 
  	    	  <div>全部</div>
	    	  <hr/>
	    	  <div>{{allTypes}}部</div>
          </div>

    </div>
    <!-- <el-card :body-style="{ padding: '0px', height:'298px', line-height:'298px',background-color:'gray' }"> -->
  
<!--     height: 298px;
    line-height: 298px;
    background-color: gray; -->
<!--       <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span class="movieName">{{movieName}}</span>
        <el-rate
          :max="5"
		  v-model="points"
		  disabled
		  show-text
		  text-color="#ff9900"
		  :text-template="displayPointes">
		</el-rate>
      </div> -->
    </el-card>
    </div>
</template>

<script>
export default {
  name: 'MitemSimpleMore',
  data () {
    return {
      movieName: '神奇女侠',
      allTypes:27
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
.mCardMore {
  width: 320px;
  height: 300px;
  display: inline-block;
  text-align: center;
}
.myBody {
	height: 298px;
	display: flex;
	align-items: center;
	justify-content: center;
	/*margin-top: 134px;*/
	/*padding-top: 30px;*/
    /*line-height: 298px;*/
    background-color: #D3DCE6;
}
.moreContent {
	font-size: 1.5rem;
	/*height: 20px;*/
}
/*.movieName {*/
  /*font-size: 2rem;*/
/*}*/
</style>
