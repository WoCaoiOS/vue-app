<template>
	<div id="login">
		<mt-header title="登录">
	  		<mt-button icon="back" slot="left" @click="goBack">&nbsp;&nbsp;</mt-button>
		</mt-header>
		<section>
			<div class="logo">
				<img src="../assets/login/fox.png" alt="fox">
			</div>
			<label for="account">账号</label><br>
			<input type="text" name="account" class="login_info"><br>
			<label for="password">密码</label><br>
			<input type="password" name="password" class="login_info">
			<div class="clearfix">
				<div class="fl">找回密码?</div>
				<router-link to="/register">
					<div class="fr">快速注册&gt;</div>	
				</router-link>		
			</div>
			<input type="button" value="登录" class="login_btn">
			<div class="or"><p>OR</p></div>
			<div class="social">
				<table>
					<tr>
						<td><img src="../assets/login/qq.png" alt=""></td>
						<td><img src="../assets/login/wechat.png" alt=""></td>
						<td><img src="../assets/login/weibo.png" alt=""></td>
					</tr>
				</table>	
			</div>
		</section>	
	</div>
</template>
<script>
	export default{
		name:"loign",
		data(){
			return{

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}	
</script>
<style scoped>
	.mint-header{
		background-color: white;
		color: rgb(35,38,43);
	}
	.logo{
		text-align: center;
		margin-bottom: 30px;
	}
	.logo img{
		width: 15%;
	}
	section{
		color: rgb(144,144,144);
		margin-top: 50px;
		padding: 0 20px;
	}
	section input[type='text']{
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		border:none;
		border-bottom: 1px solid rgb(231,231,231)

	}
	
	.login_btn{
		color: white;
		background-color: rgb(35,38,43);
		margin: 15px 0;
		padding: 10px;
	}
	.social img{
		width:35%;
	}
	.clearfix{
		line-height: 50px;
	}
	.fr{
		color:rgb(241,149,14); 
	}
	input{
		width: 100%;
		border:none;
		outline: none;
	}
	.social{
		text-align: center;
	}
	.social table{
		width: 100%;
	}
	.social table tr{
		height: 50px;
	}
	p{
		color:rgb(144,144,144);
	}
	.or{
		text-align: center;
		margin-top:70px;
	}

</style>