import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import test from '@/components/test'

Router.prototype.openPage = function(link,query){
//	console.log(link)
//	console.log(query)
	this.push({
		path:link,
	})
}

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/pcHome'
		},
		{
			path: '/test',
			name: 'test',
			component: test
		},
		{
			path: '/pcHome',
			name: 'pcHome',
		    component(resolve){
		       require(['@/views/pcHome/pcHome.vue'], resolve)
		    }
		},
		{
			path: '/applyJoin',
			name: 'applyJoin',
		    component(resolve){
		       require(['@/views/applyJoin/applyJoin.vue'], resolve)
		    }
		},
		{
			path: '/About',
			name: 'About',
		    component(resolve){
		       require(['@/views/About/About.vue'], resolve)
		    }
		},	
		{
			path: '/Services',
			name: 'services',
		    component(resolve){
		       require(['@/views/services/services.vue'], resolve)
		    }
		},		
		{
			path: '/Hotel',
			name: 'Hotel',
		    component(resolve){
		       require(['@/views/Works/Hotel/Hotel.vue'], resolve)
		    },
		    meta: { scrollToTop: true }
		},
		{
			path: '/Education',
			name: 'Education',
		    component(resolve){
		       require(['@/views/Works/Education/Education.vue'], resolve)
		    }
		},
		{
			path: '/Catering',
			name: 'Catering',
		    component(resolve){
		       require(['@/views/Works/Catering/Catering.vue'], resolve)
		    }
		},	
		{
			path: '/AutoService',
			name: 'AutoService',
		    component(resolve){
		       require(['@/views/Works/AutoService/AutoService.vue'], resolve)
		    }
		},
		{
			path: '/Tourism',
			name: 'Tourism',
		    component(resolve){
		       require(['@/views/Works/Tourism/Tourism.vue'], resolve)
		    }
		},
		{
			path: '/Retail',
			name: 'Retail',
		    component(resolve){
		       require(['@/views/Works/Retail/Retail.vue'], resolve)
		    }
		},		
		{
			path: '/Fintness',
			name: 'Fintness',
		    component(resolve){
		       require(['@/views/Works/Fintness/Fintness.vue'], resolve)
		    }
		},		
		{
			path: '/RealEstate',
			name: 'RealEstate',
		    component(resolve){
		       require(['@/views/Works/RealEstate/RealEstate.vue'], resolve)
		    }
		},		
		{
			path: '/BeautySpa',
			name: 'BeautySpa',
		    component(resolve){
		       require(['@/views/Works/BeautySpa/BeautySpa.vue'], resolve)
		    }
		},		
		{
			path: '/EnterTai',
			name: 'EnterTai',
		    component(resolve){
		       require(['@/views/Works/EnterTai/EnterTai.vue'], resolve)
		    }
		},	
		{
			path: '/weChat',
			name: 'weChat',
		    component(resolve){
		       require(['@/views/weChat/weChat.vue'], resolve)
		    }
		},	
	]
})