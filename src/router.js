import Home from "./components/homepage.vue"
import ImageDetail from "./components/imageDetail.vue"
import Category from "./components/categoryPage.vue"
export default[
	{path:'/home',component:Home},
	{path:'/imageDetail',component:ImageDetail},
	{path:'/category',component:Category},
	{path:'/',component:Home},
	{path:'*',component:Home}
]