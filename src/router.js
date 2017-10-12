import Home from "./components/homepage.vue"

export default[
	{path:'/home',component:Home},
	{path:'/',component:Home},
	{path:'*',component:Home}
]