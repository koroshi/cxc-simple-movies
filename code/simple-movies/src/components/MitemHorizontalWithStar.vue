<template>
	<div class="hItem">
		<div class="upPart">
			<a class="image">
				<img src="../assets/logo.png" >

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
		</div>
		<div class="mDiscription">2017-01-27(英国) / 伊万·麦克格雷格 / 约翰尼·李·米勒 / 罗伯特·卡莱尔 / 艾文·布莱纳 / 雪莉·亨德森 / 安杰拉·奈迪亚科娃 / 史蒂文·罗伯特森 / 戈登·肯尼迪 / 西蒙·韦尔 / 詹姆斯·卡沙莫 / 梁佩诗 / 阿塔·雅谷伯 / 埃文·威尔什 /...</div>
	</div>
</template>
<script>
export default {
	name:"MitemHorizontalWithStar",
	data () {
		return {
			movieName:'神奇女侠',
			points:4.1
		}
	},
	computed: {
  	  displayPointes:function(){
  		 return (this.points * 2).toString();
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
	height: 150px;
}
.mRate {
	text-align: left;
	padding-left: 450px;
	font-size: 3rem;
}
.mDiscription {
		text-align: left;
	padding-left: 450px;
	text-indent:2em;
	color: #666666;
}
.image img{
	/*display: inline;*/
	float: left;
	width: 160px;
    height: 100px;
}
	
</style>
