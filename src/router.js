import Home from "./components/homepage.vue"
import ImageDetail from "./components/imageDetail.vue"
import Category from "./components/categoryPage.vue"
import ProfitDetail from './components/profitDetail.vue'
import NewsList from './components/newsList.vue'

export default[
	{path:'/home',component:Home},
	{path:'/imageDetail/:type',component:ImageDetail},
	{path:'/category/:type',component:Category},//表示该路径需要传一个值到下级页面
	{path:'/profitDetail',component:ProfitDetail},
	{path:'/news',component:NewsList},
	{path:'/',component:Home},
	{path:'*',component:Home}
]