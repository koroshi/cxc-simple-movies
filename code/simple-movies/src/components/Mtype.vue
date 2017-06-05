<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;float:left;font-size:18px">{{mTypeTitle}}</span>
    <el-button style="float: right;font-size:18px" type="primary">
    	更多
    	<i class="el-icon-arrow-right el-icon--right"></i>
    </el-button>
    <!-- el-icon-arrow-right -->
  </div>

  <div class="rowHeight">
  <div class="rowWidth" >
  <el-row   class="rowWrap">
 
       <MitemSimpleWithStar v-for="item in 10" :key="item"> </MitemSimpleWithStar>
       <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->
       <MitemSimpleMore> </MitemSimpleMore>
        <!-- <MitemSimpleWithStar v-for="item in 10"> </MitemSimpleWithStar> -->
   	  
<!--    	  <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>

      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>

      <MitemSimpleWithStar> </MitemSimpleWithStar> -->
      <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->

      <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->
      <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->
   <!-- </el-col> -->
  	   
  </el-row>
   </div>
   </div>



  <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->
  <!-- <MitemSimpleWithStar> </MitemSimpleWithStar> -->
</el-card>
</template>

<script>
import MitemSimpleWithStar from "./MitemSimpleWithStar"
import MitemSimpleMore from "./MitemSimpleMore"
export default {
  name: 'Mtype',
  data () {
    return {
      mTypeTitle: '影院热映',
      movies:[1,2,3,4,5,6,7,8,9,10]
    }
  },
  components:{
    MitemSimpleWithStar,
  	MitemSimpleMore
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
    width:3700px;
    text-align:left;     

  }
.rowWidth {
  width: 1000px;
      overflow-x: auto;
      height: 350px
}
.rowHeight {
  height: 300px;
  overflow-y:hidden;
}
</style>
