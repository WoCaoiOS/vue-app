<!--  
父组件传值给子组件，可以使用props
-->
<template>
	<div id="category">
		<mt-header title="分类图片">
	  		<mt-button icon="back" slot="left" @click="goBack">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button class="search"></mt-button>
	  		</router-link>
		</mt-header>
		<slider type="category"></slider>
		<div style="height:38px;overflow-y:hidden">
			<div class="fl menu_box">
				<ul class="clearfix segment" :style="{width:70*typeList.length+'px'}">
					<li class="fl segment_item" v-for="(item,index) in typeList" :class="{active:selected==index}" @click="selected=index">{{item}}</li>
				</ul>
			</div>
			<div class="fl right_arrow" @click=""></div>
		</div>
		<section>
			<ul>
				<li v-for="item in dataList">{{item.title}}</li>
			</ul>
		</section>
	</div>	
</template>
<script>
	// 注册子组件
	import slider from './sliderComponent.vue'
	export default{
		name:"category",
		data(){
			return{
				typeList:[
					"最新",
					"风景",
					"美女",
					"动物",
					"壁纸",
					"帅哥",
					"明星",
				],
				selected:0,
				dataList:[]
			}
		},
		components:{slider},
		methods:{
			goBack(){
				this.$router.go(-1);
				console.log("-=-=-=")
			},
			getData(){
				this.$http.get('./static/category.json?imgType=1')
				.then(response=>{
					console.log(response)
					this.dataList = response.data.dataList;
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style scoped>
	/*.segment{
		width:90%;
		overflow-x: auto;
	}*/
	.menu_box{
		width: 90%;
		height: 55px;
		overflow-x: auto;
		margin: 0;
	}
	.segment_item{
		width: 70px;
		text-align: center;
		font-size: 13px;
		color: #2d2d2d;
		padding: 10px 0;
		position: relative;
	}
	.active:after{
		width: 80%;
		height: 1px;
		position: absolute;
		left: 10%;
		bottom: 0;
		content: '';
		background:rgb(242,150,0);
	}
	.right_arrow{
		width: 10%;
		margin: 0;
		height: 37px;
		background: url(../assets/arrow_right.png) no-repeat center;
		background-size: 20px;
	}
</style>