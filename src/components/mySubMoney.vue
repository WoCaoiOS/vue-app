<template>
	<div id="money">
		<mt-header title="我的余额">
	  		<mt-button icon="back" slot="left" @click="$router.go(-1)">&nbsp;&nbsp;</mt-button> 		
	    	<mt-button icon="more" class="settings" slot="right"></mt-button>	  		
		</mt-header>
		<div class="viewbg">
			<img src="../assets/money_bg.png" alt="">
			<div class="info_box">
				<div class="money_logo">
					<img src="../assets/money_logo.png" alt="">
				</div>
				<div class="money_info clearfix">
					<div class="left_box fl">
						<div>可用金额</div>
						<div>{{moneyFormat}}</div>
					</div>
					<div class="right_box fl">
						<div>冻结金额</div>
						<div>{{coldMoney}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content"></div>
	</div>
</template>
<script>
	export default{
		name:"money",
		data(){
			return{

			}
		},
		computed:{
			userInfo(){
				return this.$store.getters.getUserInfo;
			},
			// 金额千分位处理
			moneyFormat(){
				// 先将金额转换成字符串
				var moneyStr = this.userInfo.canUseMoney+"";
				// 将整数部分和小数部分分离
				var strArr = moneyStr.split('.')
				// 将整数部分的数字一一切割出来，并进行反转
				var nums = strArr[0].split('').reverse()
				// 遍历数组，并在合适的位置添加","
				var m='';
				for (var i = 0; i < nums.length; i++) {
					m+=nums[i];
					// 判断是否需要追加逗号
					if ((i+1)%3==0 && i<nums.length-1) {
						m+=","
					}
				}
				// 处理无小数点的部分
				var subStr=''
				if (strArr[1]) {
					subStr = strArr[1]
				}
				// 得到转换结果
				return m.split('').reverse().join('')+'.'+subStr;
			},
			coldMoney(){
				// 先将金额转换成字符串
				var moneyStr = this.userInfo.coldMoney+"";
				// 将整数部分和小数部分分离
				var strArr = moneyStr.split('.')
				// 将整数部分的数字一一切割出来，并进行反转
				var nums = strArr[0].split('').reverse()
				// 遍历数组，并在合适的位置添加","
				var m='';
				for (var i = 0; i < nums.length; i++) {
					m+=nums[i];
					// 判断是否需要追加逗号
					if ((i+1)%3==0 && i<nums.length-1) {
						m+=","
					}
				}
				// 处理无小数点的部分
				var subStr=''
				if (strArr[1]) {
					subStr = '.'+strArr[1]
				}
				// 得到转换结果
				return m.split('').reverse().join('')+subStr;
			}
		}
	}
</script>
<style scoped="">
	#money{
		position: relative;
	}
	.mint-header{
		background-color: transparent;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 1999;
	}
	.viewbg{
		position: relative;
	}
	.viewbg img{
		width: 100%;
		position: relative;
		z-index: -1;
	}
	.content{
		width: 100%;
		height: 100px;
		background: red;
	}
	.info_box{
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		bottom: 0;
	}
	.money_logo{
		text-align: center;
		margin-top: 60px;
	}
	.money_logo img{
		width: 60px;
	}
	.money_info>div{
		width: 50%;
		height: 60px;
		/*border: 1px solid red;*/
		position: relative;
		color: white;
		text-align: center;
	}
	.money_info>div>div:first-child{
		font-size: 13px;
		height: 30px;
		line-height: 30px;
	}
	.money_info>div>div:last-child{
		font-size: 18px;
		font-weight: bold;
		height: 30px;
		line-height: 30px;
	}
	.money_info>div:first-child:after{
		position: absolute;
		right: -0.5px;
		top:22%;
		height: 56%;
		width: 1px;
		content: '';
		background-color: white;
	}
</style>