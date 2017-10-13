<template>
	<div id="imageDetail">
		<header class="top_header">
			<mt-header>
	    		<mt-button icon="back" slot="left" @click="goBack">&nbsp;&nbsp;</mt-button>
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
				<div class="title">
					{{imgDetailInfo.title}}
					<span>#{{imgDetailInfo.type}}</span>
				</div>
				<div class="des">
					{{imgDetailInfo.description}}
				</div>
				<div class="time">{{imgDetailInfo.time}}</div>
			</div>
			<div class="money_box" >
				<div class="tips">点赞是美德，打赏是鼓励</div>
				<div class="btn_box">
					<mt-button type="primary"><span>$</span>打赏</mt-button>
				</div>
				<div class="reward_box">
					<span class="reward_tips" v-if="rewardList.length==0">还没有人打赏，来当第一个打赏的人吧！</span>
					<ul v-if="rewardList.length!=0" class="clearfix">
						<li class="fl" v-for="user in imgDetailInfo.moneyList">
							<div>
								<img v-lazy="user.avatar" alt="">
							</div>
							<div>
								<span>$</span>{{user.money}}元
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="comment_box">
				<span>评论（{{comments.length}}）</span>
				<ul>
					<li v-for="info in comments" class="clearfix">
						<div class="fl avatar_box">
							<img v-lazy="info.avatar" alt="">
						</div>
						<div class="fl content_box">
							<div class="user_name">{{info.author}} <span>{{info.time}}</span></div>
							<div class="content_label">{{info.content}}</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<footer>
			<input type="text" class="input_control" placeholder="说点什么吧">
			<button type="button" class="praise" :class="{'praise_active':praiseIsActive}" @click="praiseIsActive = !praiseIsActive"></button>
			<button type="button" class="favorite" :class="{'favorite_active':isFav}" @click="isFav = !isFav"></button>
			<button type="button" class="share"></button>
		</footer>
	</div>
</template>
<script>					
	import qs from 'qs'
	export default{
		name:"imageDetail",
		data(){
			return{
				imgDetailInfo:{},
				rewardList:[],
				comments:[],
				praiseIsActive:0,
				isFav:0
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
				console.log("-=-=-=")
			},
			getImgDetail(){
				this.$http.get('./static/imgDetail.json?id='+this.infoId)
				.then(response=>{
					console.log(response);
					this.imgDetailInfo = response.data.data;	
					this.rewardList = this.imgDetailInfo.moneyList;
					this.comments = response.data.data.commentList;	
					this.praiseIsActive = response.data.data.isPraise;
					this.isFav = response.data.data.isFav;
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
		left: 15%;
		top: 0px;
		width: 70%;
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
	.data_box{
		padding: 5px 10px;
	}
	.data_box>.title{
		font-size: 15px;
		color: #2d2d2d;
		margin-top: 10px;
	}
	.data_box>.title>span{
		font-size: 11px;
		color: #919191;
		margin-left: 10px;
	}
	.data_box>.des{
		color: #2d2d2d;
		font-size: 12px;
		margin: 10px 0 0;
		line-height: 23px
	}
	.data_box>.time{
		color: #919191;
		font-size: 10px;
		padding:10px 20px;
		background: url(../assets/clock.png) no-repeat left center;
		background-size: 18px 18px;
	}
	.money_box{
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		padding: 15px 5px;
		text-align: center;
	}
	.tips{
		color:#2d2d2d;
		font-size: 12px;
	}
	.btn_box{
		padding: 20px;
		text-align: center;
		line-height: 15px;
	}
	.btn_box>.mint-button--primary{
		background: rgb(242,150,0);
		border-radius: 0;
		border:none;
		outline: none;
		width: 150px;
		font-size: 12px;
	}
	.btn_box>.mint-button--primary span{
		display: inline-block;
		/*padding: 5px;*/
		border-radius: 50%;
		background: white;
		color: rgb(242,150,0);
		width: 15px;
		height: 15px;
		margin-right: 5px;
	}
	.reward_tips{
		font-size: 10px;
		color: #919191;
	}
	.reward_box ul{
		width: 100%;
		overflow-x: auto;
	}
	.reward_box ul li{
		width: 100px;
	}
	.reward_box ul li div{
		width: 50%;
		margin: auto;
		text-align: center;
		color: rgb(242,150,0);
		font-size: 12px;
	}
	.reward_box ul li div img{
		width: 90%;
		border-radius: 50%;
	}
	.reward_box ul li div span{
		color: white;
		display: inline-block;
		/*padding: 5px;*/
		border-radius: 50%;
		background: rgb(242,150,0);
		width: 15px;
		height: 15px;
		margin-right: 5px;
	}
	.comment_box{
		padding: 10px;
	}
	.comment_box ul li{
		padding: 10px;
		border-bottom: 1px dotted #dcdcdc;
		position: relative;
	}
	.avatar_box{
		width: 25%;
		height: 100%;
	}
	.avatar_box img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.content_box{
		height: 60px;
		width: 70%;
	}
	.content_box div{
		height: 30px;
		color: #2d2d2d;
	}
	.user_name{
		font-size: 12px;
	}
	.user_name span{
		color: #919191;
		margin-left: 10px;
		font-size: 12px;
	}
	.content_label{
		font-size: 13px;
	}
	section{
		padding-bottom: 55px;
	}
	footer{
		position: fixed;
		bottom: 0;
		left: 0;
		/*background: orange;*/
		height: 50px;
		width: 100%;
		background: white;
		line-height: 50px;
		border-top: 1px solid #dcdcdc;
	}
	.input_control{
		outline: none;
		border:none;
		background: rgb(242,242,242);
		height: 30px;
		/*margin-top: 10px;*/
		margin-left: 10px;
		border-radius: 15px;
		width: 60%;
		padding-left: 10px;
		vertical-align: middle;
	}
	button{
		width: 30px;
		height: 30px;
		display: inline-block;
		vertical-align: middle;
		border: none;
		outline: none;
		background-color: transparent;
	}
	.praise{
		background: url(../assets/praise.png) no-repeat center;
		background-size: 70%;
	}
	.praise_active{
		background-image: url(../assets/praised.png);
	}
	.favorite{
		background: url(../assets/favorite_big.png) no-repeat center;
		background-size: 70%;
	}
	.favorite_active{
		background-image: url(../assets/favorited.png);
	}
	.share{
		background: url(../assets/share.png) no-repeat center;
		background-size: 70%;
	}
</style>
<style>
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.clearfix{
		overflow: hidden;
	}

</style>