<template>
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>{{movieName}}</span>
        <!-- <div class="bottom clearfix"> -->
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        <!-- </div> -->
        <el-rate
          :max="5"
		  v-model="points"
		  disabled
		  show-text
		  text-color="#ff9900"
		  :text-template="displayPointes">
		</el-rate>
				  <!-- text-template="{value}"> -->
      </div>
    </el-card>
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

</style>
