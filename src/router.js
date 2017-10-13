import Home from "./components/homepage.vue"
import ImageDetail from "./components/imageDetail.vue"

export default[
	{path:'/home',component:Home},
	{path:'/imageDetail',component:ImageDetail},
	{path:'/',component:Home},
	{path:'*',component:Home}
]