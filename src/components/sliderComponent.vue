<template>
	<div id="slider">
		<section>
			<!-- 绑定内联样式，以保证幻灯图完全显示 -->
			<mt-swipe :auto="4000" :style="{height:height+'px'}">
			  <mt-swipe-item v-for="img in imgList">
			  	<!-- 为img绑定load方法，在图片加载完成后触发 -->
			  	<img v-lazy="img" alt="" @load="imgLoded(this)">
			  </mt-swipe-item>
			</mt-swipe>
		</section>
	</div>
</template>
<script>
	export default{
		name:"slider",
		data(){
			return{
				imgList:[],
				height:0
			}
		},
		// 该属性，用于接收父组件传递的值
		props:['type'],
		methods:{
			imgLoded(){
				// 图片加载完成后，获取图片的高度
				this.height = event.target.height;
				// console.log(event.target)
			},
			getSliderData(){
				console.log("------"+this.type)

				this.$http.get('./static/sliderImgData.json?type='+this.type)
				.then(response=>{
					console.log(response)
					this.imgList = response.data.list;
				})
			}
		},
		created(){
			this.getSliderData();
		}
	}
</script>
<style scoped>
	.mint-swipe-item img{
		width: 100%;
	}
</style>