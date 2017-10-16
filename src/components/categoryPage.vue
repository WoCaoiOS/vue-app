<template>
	<div id="category">
		<mt-header title="分类图片">
	  		<mt-button icon="back" slot="left" @click="goBack">&nbsp;&nbsp;</mt-button>
	  		<router-link to="/" slot="right">
	    		<mt-button class="search"></mt-button>
	  		</router-link>
		</mt-header>
	</div>
</template>
<script>
	export default{
		name:"category",
		data(){
			return{

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
				console.log("-=-=-=")
			}
		}
	}
</script>