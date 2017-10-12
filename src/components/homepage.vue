<template>
	<div id="homepage">
		<mt-header title="白狐图片分享社区">
	  		<router-link to="/" slot="left">
	    		<mt-button class="user_center"></mt-button>
	  		</router-link>
	  		<router-link to="/" slot="right">
	    		<mt-button class="search"></mt-button>
	  		</router-link>
		</mt-header>
		<section>
			<!-- 绑定内联样式，以保证幻灯图完全显示 -->
			<mt-swipe :auto="4000" :style="{height:height+'px'}">
			  <mt-swipe-item v-for="img in imgList">
			  	<!-- 为img绑定load方法，在图片加载完成后触发 -->
			  	<img :src="img" alt="" @load="imgLoded(this)">
			  </mt-swipe-item>
			</mt-swipe>
		</section>
	</div>
</template>
<script>
	export default{
		name:"homepage",
		data(){
			return{
				imgList:[],
				height:0
			}
		},
		methods:{
			imgLoded(){
				// 图片加载完成后，获取图片的高度
				this.height = event.target.height;
				console.log(event.target.width)
				console.log(event.clientWidth)
			}
		},
		created(){
			this.$http.get('./static/sliderImgData.json')
			.then(response=>{
				console.log(response)
				this.imgList = response.data.list;
			})
		}
	}
</script>
<style scoped>
	.mint-header{
		background: rgb(35,38,43);
		height: 44px;
	}
	.user_center{
		width: 20px;
		height: 20px;
		background: url(../assets/user_center.png);
		background-size: 100%;
	}
	.search{
		width: 20px;
		height: 20px;
		background: url(../assets/search.gif);
		background-size: 100%;
	}
	.mint-swipe-item img{
		width: 100%;
	}
</style>
<style>
	
</style>