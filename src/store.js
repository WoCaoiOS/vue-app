import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
	state:{
		infoId:'',
		loginStatus:true,
		userInfo:{
			userId:"001",
			userName:"萧华",
			avatar:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2770691011,100164542&fm=27&gp=0.jpg"
		},
		newsInfo:{}//新闻对象
	},
	mutations:{
		setInfoId(state,id){
			state.infoId = id;
			console.log(id);
		},
		setLoginStatus(state,status){
			state.loginStatus = status;
		},
		setUserInfo(state,info){
			state.userInfo = info;
		},
		setNewsInfo(state,info){
			state.newsInfo = info;
		}
	},
	actions:{
		setInfoId({commit},id){
			commit('setInfoId',id);
		},
		setLoginStatus({commit},status){
			commit('setLoginStatus',status)
		},
		setUserInfo({commit},info){
			commit('setUserInfo',info)
		},
		setNewsInfo({commit},info){
			commit('setNewsInfo',info)
		}
	},
	getters:{
		getInfoId(state){
			return state.infoId;
		},
		getLoginStatus(state){
			return state.loginStatus;
		},
		getUserInfo(state){
			return state.userInfo;
		},
		getNewsInfo(state){
			return state.newsInfo;
		}
	}
})

export default store