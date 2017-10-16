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
		}
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
		}
	}
})

export default store