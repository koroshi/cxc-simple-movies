<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;float:left;">{{mTypeTitle}}</span>
    <el-button style="float: right;" type="primary">
    	更多
    	<i class="el-icon-arrow-right el-icon--right"></i>
    </el-button>
    <!-- el-icon-arrow-right -->
  </div>

  <div class="rowHeight">
  <div class="rowWidth">
  <el-row class="rowWrap">
 
      

   <!-- <el-col :span="5"> -->
   	  <MitemSimpleWithStar> </MitemSimpleWithStar>
   <!-- </el-col> -->
   <!-- <el-col :span="5"> -->
   	  <MitemSimpleWithStar> </MitemSimpleWithStar>
   <!-- </el-col> -->
    <!-- <el-col :span="5">   -->
      <MitemSimpleWithStar> </MitemSimpleWithStar>
   <!-- </el-col> -->
       <!-- <el-col :span="5">   -->
      <MitemSimpleWithStar> </MitemSimpleWithStar>
   <!-- </el-col> -->
       <!-- <el-col :span="5">   -->
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>

      <MitemSimpleWithStar> </MitemSimpleWithStar>
      <MitemSimpleWithStar> </MitemSimpleWithStar>

      <MitemSimpleWithStar> </MitemSimpleWithStar>
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
export default {
  name: 'Mtype',
  data () {
    return {
      mTypeTitle: '影院热映'
    }
  },
  components:{
  	MitemSimpleWithStar
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
    width:3500px;
    text-align:left;     

  }
.rowWidth {
  width: 1000px;
      overflow-x: auto;
      height: 350px
}
.rowHeight {
  height: 280px;
  overflow-y:hidden;
}
</style>
