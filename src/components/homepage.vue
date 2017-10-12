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
			  	<img v-lazy="img" alt="" @load="imgLoded(this)">
			  </mt-swipe-item>
			</mt-swipe>
		</section>
		<section>
			<table>
				<tr>
					<td>
						<div class="menu_logo"></div>
						<div>分类图片</div>
					</td>
					<td>
						<div class="menu_logo"></div>
						<div>付费图片</div>
					</td>
					<td>
						<div class="menu_logo"></div>
						<div>资讯杂谈</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="menu_logo"></div>
						<div>视频拍客</div>
					</td>
					<td>
						<div class="menu_logo"></div>
						<div>积分商城</div>
					</td>
					<td>
						<div class="menu_logo"></div>
						<div>关注动态</div>
					</td>
				</tr>
			</table>
		</section>
		<section>
			<ul class="list_box">
				<li v-for="img in dataList" class="clearfix">
					<div class="fl img_box">
						<img v-lazy="img.img" alt="">
					</div>
					<div class="fl intro_box">
						<div class="title_label">
							{{img.title}}
						</div>
						<div class="author_label">{{img.author}}</div>
						<div class="des_label">
							{{img.description}}
						</div>
						<div class="info_label">
							#{{img.type}}
							<div class="fr">
								<span class="comment">{{img.comment}}</span>
								<span class="favorite">{{img.favorite}}</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:"homepage",
		data(){
			return{
				imgList:[],
				height:0,
				dataList:[],
				hotList:[]
			}
		},
		methods:{
			imgLoded(){
				// 图片加载完成后，获取图片的高度
				this.height = event.target.height;
				// console.log(event.target)
			},
			getSliderData(){
				this.$http.get('./static/sliderImgData.json')
				.then(response=>{
					console.log(response)
					this.imgList = response.data.list;
				})
			},
			getHomeList(){
				this.$http.get("./static/homeData.json")
				.then(response=>{
					console.log(response);
					this.dataList = response.data.dataList;
					this.hotList = response.data.hotList;
				})
			}
		},
		created(){
			this.getSliderData();
			this.getHomeList();
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
	table{
		width: 100%;
		margin-bottom: 20px;
	}
	td{
		/*border:1px solid red;*/
		color:rgb(45,45,45);
		padding: 10px 0;
	}
	td>div.menu_logo{
		margin: auto;
		width: 50px;
		height:45px;
		background: no-repeat center;
		background-size: 70%;
	}
	tr:first-child>td:first-child>div.menu_logo{
		background-image: url(../assets/img_catagory.gif);
	}
	tr:first-child>td:nth-child(2)>div.menu_logo{
		background-image: url(../assets/img_money.gif);
		background-size: 60%;
	}
	tr:first-child>td:nth-child(3)>div.menu_logo{
		background-image: url(../assets/news.gif);
	}
	tr:last-child>td:nth-child(1)>div.menu_logo{
		background-image: url(../assets/video.gif);
	}
	tr:last-child>td:nth-child(2)>div.menu_logo{
		background-image: url(../assets/jifen.gif);
	}
	tr:last-child>td:nth-child(3)>div.menu_logo{
		background-image: url(../assets/follow.gif);
	}
	.list_box{
		width: 100%;
		background: rgb(250,250,250);
		/*background: gray;*/
	}
	.list_box>li{
		width: 95%;
		margin: auto;
		margin-top: 10px;
		background: white;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.clearfix{
		overflow: hidden;
	}
	.img_box{
		width: 40%;
		position: relative;
	}
	.img_box>img{
		width: 100%;
	}
	.img_box:after{
		position: absolute;
		right: -5px;
		top: 5%;
		height: 90%;
		width: 5px;
		content: "";
		background: rgb(242,150,0);
	}
	.intro_box{
		width: 60%;
		padding: 0 15px;
	}
	li>div.intro_box{
		color: rgb(154,154,154);
		text-align: left;
	}
	li>div.intro_box>div.title_label{
		color: rgb(45,45,45);
		font-size: 13px;
		margin-top: 15px;
	}
	li>div.intro_box>div.author_label{
		font-size: 11px;
		margin-top: 5px;
	}
	li>div.intro_box>div.des_label{
		font-size: 12px;
		margin-top: 10px;
	}
	li>div.intro_box>div.info_label{
		font-size: 11px;
		margin-top: 20px;
	}
	.comment{
		padding-left: 24px;
		background: url(../assets/comment.png) no-repeat left center; 
	}
	.favorite{
		padding-left: 24px;
		background: url(../assets/favorite.png) no-repeat left center;
	}
</style>
<style>
	*{
		box-sizing: border-box;	
	}
	div.mint-swipe-indicator{
		background: white;
		opacity: 1;
	}
	.mint-swipe-indicator.is-active{
		background: orange;
	}
</style>