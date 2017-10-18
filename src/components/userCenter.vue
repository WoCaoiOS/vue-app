<template>
	<div id="userCenter" :style="{backgroundImage:'url('+userInfo.bgpic+')'}">
		<mt-header title="个人中心">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button icon="settings" class="settings"></mt-button>
	  		</router-link>
		</mt-header>
		<div class="info_box clearfix">
			<div class="fl">
				<img :src="userInfo.avatar" class="avatar" alt="">
			</div>
			<div class="fl">
				<div class="user_name">{{userInfo.userName}}</div>
				<div>
					<span>关注 {{userInfo.follow}}</span>
					<span>粉丝 {{userInfo.fans}}</span>
				</div>
			</div>
		</div>
		<ul class="menu_list clearfix">
			<li class="fl">
				<div>
					<img src="../assets/subMoney.png" alt="">
				</div>
				<div>我的余额</div>
			</li>
			<li class="fl">
				<div>
					<img src="../assets/score.png" alt="">
				</div>
				<div>我的积分</div>
			</li>
			<li class="fl">
				<div>
					<img src="../assets/my_favorite.png" alt="">
				</div>
				<div>我的收藏</div>
			</li>
			<li class="fl">
				<div>
					<img src="../assets/my_msg.png" alt="">
				</div>
				<div>我的消息</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"userCenter",
		data(){
			return{

			}
		},
		computed:{
			// 获取个人信息
			userInfo(){
				return this.$store.getters.getUserInfo;
			}
		}
	}
</script>
<style scoped>
	#userCenter{
		background-repeat: no-repeat;
		background-size: contain;
		padding:0 15px;
		/*height: 300px;*/
	}
	#userCenter .mint-header{
		background-color: transparent;
	}
	.settings{
		width: 30px;
		height: 30px;
		background: url(../assets/settings.png) no-repeat center;
	}
	.info_box{
		margin: 50px 0 50px;
	}
	.avatar{
		width: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.user_name,.user_name+div{
		color: white;
	}
	.user_name{
		font-size: 18px;
		height: 25px;
		line-height: 25px;
	}
	.user_name+div{
		font-size: 14px;
		height: 25px;
		line-height: 25px;
	}
	.menu_list{
		padding: 20px 0;
		border-bottom: 1px solid #dddddd;
	}
	ul.menu_list li{
		width: 25%;
		padding-top: 20px;
	}
	ul.menu_list li div{
		text-align: center;
		font-size: 13px;
	}
	ul.menu_list li div img{
		width: 50px;
	}
</style>