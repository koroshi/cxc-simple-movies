<template>
	<div class="hItem">
		<div class="upPart">
			<a class="image">
				<img :src="imageUrl" >

			</a>

			<a>
				<!-- 【MMD】结月缘的The ocean【重投】打的四大 -->
				<!-- <h3>神奇女侠</h3> -->
				 <div class="mRate">
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
			    <!-- The ocean大声道啊爱上 -->
				
			</a>
		<div class="mDiscription">
			<p>
				导演：{{director}}
			</p>
			<p>
				主演:{{displayStartings}}
			</p>
		     <p>
				{{hasWatching}}人看过
			</p>
		</div>
		</div>

	</div>
</template>
<script>
export default {
	name:"MitemHorizontalWithStar",
	props:['movie'],
	data () {
		return {
			movieName:this.movie.title,
			points:this.movie.rating.average/2,
			// director:'导演',
			Starings:['主演1','主演2'],
			hasWatching:100
		}
	},
	computed: {
  	  displayPointes:function(){
  		 // return (this.points * 2).toString();
  		return this.movie.rating.average.toString();
  	},
      displayStartings:function(){
         return this.movie.casts.map((one) => one.name).join('/')
      },
      director:function(){
      	return this.movie.directors.map((one) => one.name).join(',')
      },
      imageUrl:function(){
      	return this.movie.images.large;
      }
  },
	
}
</script>

<style >
.hItem {
	height: 420px;
	width: 100%;
	padding: 20px;
}
.upPart {
	margin-top: 10px;
	height: 350px;
}
.mRate {
	text-align: left;
	padding-left: 450px;
	font-size: 5rem;
}
.mRate .el-rate__icon {
	font-size: 37px;
}
.mRate .el-rate__text {
font-size: 33px;
}
.mDiscription {
	font-size: 2rem;
	margin-top: 50px;
	text-align: left;
	padding-left: 450px;
	text-indent:2em;
	color: #666666;
}
.image img{
	/*display: inline;*/
	float: left;
	/*width: 300px;*/
    height: 400px;
}
	
</style>
