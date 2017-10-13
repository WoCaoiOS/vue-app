<template>
	<div id="imageDetail">
		<header class="top_header">
			<mt-header>
	    		<mt-button icon="back" slot="left">&nbsp;&nbsp;</mt-button>
	  			<mt-button slot="right">+关注</mt-button>
			</mt-header>
			<div class="user_box">
				<img class="avatar" v-lazy="imgDetailInfo.avatar" alt="">
				{{imgDetailInfo.author}}
			</div>
		</header>
		<section>
			<div class="img_box" v-for="url in imgDetailInfo.imgeList">
				<img v-lazy="url" alt="">
			</div>
			<div class="data_box">
				<div>
					{{imgDetailInfo.title}}
					<span>#{{imgDetailInfo.type}}</span>
				</div>
				<div>
					{{imgDetailInfo.description}}
				</div>
				<div>{{imgDetailInfo.time}}</div>
			</div>
		</section>
		
	</div>
</template>
<script>					
	import qs from 'qs'
	export default{
		name:"imageDetail",
		data(){
			return{
				imgDetailInfo:{}
			}
		},
		methods:{
			getImgDetail(){
				this.$http.get('./static/imgDetail.json?id='+this.infoId)
				.then(response=>{
					console.log(response);
					this.imgDetailInfo =response.data.data;		
				})
			}
		},
		computed:{
			infoId:function(){
				return this.$store.getters.getInfoId;
			}
		},
		created(){
			console.log("----"+this.infoId);
			this.getImgDetail();				
		}
	}
</script>
<style scoped>
	.mint-header{
		background: rgb(35,38,43);
		height: 44px;
	}
	.top_header{
		position: relative;
	}
	.user_box{
		color: white;
		font-size: 15px;
		position: absolute;
		left: 0;
		top: 0px;
		width: 100%;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	.avatar{
		width: 30px;
		height: 30px;
		border-radius:50%;
		vertical-align: middle;
		margin-right: 5px;
	}
	.img_box{
		width: 100%;
		margin-bottom: 5px;
	}
	.img_box img{
		width: 100%;
		display: block;
	}
</style>