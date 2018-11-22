<template>
  <div id="app">
  	<div @click.capture="initNav" v-show="closeOldPc">
  		<nav class="navbar navbarSjt navbar-default navbar-fixed-top" role="navigation">
			<div class="container-fluid"> 
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
						data-target="#example-navbar-collapse">
					<!--<span class="sr-only">切换导航</span>-->
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
		
				<a class="navbar-brand nsjt-brand" href="#"><x-img v-lazy="sjtLogo"  class="sjtLogo_img"></x-img>·{{$t('pcHome.PrimeThaiTea')}}</a>
			</div>
			<div class="collapse navbar-collapse divCollapse" id="example-navbar-collapse" ref="divCollapse">
				<ul class="nav navbar-nav navbar-right nsjt-right" :class="{'wbStyle' : iswbStyle}" >
					<!--<li><a href="#/pcHome" :class="{'actived' : isActive('pcHome')}">{{$t('pcHome.home')}}</a></li>
					<li><a href="./wxindex.html#/home" :class="{'actived' : isActive('home')}">{{$t('pcHome.nav_djjx')}}</a></li>
					<li><a href="./wxindex.html#/classification" :class="{'actived' : isActive('classification')}">{{$t('pcHome.nav_sysp')}}</a></li>
					<li><a href="./wxindex.html#/mine" :class="{'actived' : isActive('mine')}">{{$t('pcHome.nav_grzx')}}</a></li>
					<li><a href="#/applyJoin" :class="{'actived' : isActive('applyJoin')}">{{$t('pcHome.nav_afj')}}</a></li>-->
				</ul>
				
			</div>
		<div class="navlocalLang">
			<span class="localLang navbar-right" @click="changeLang(localLang)">{{showLan}}</span>
		</div>	
	
	</div>
</nav>
  	
      <transition>
      	<!--<keep-alive>-->
        <router-view></router-view>
        <!--</keep-alive>-->
      </transition>

      </div>
      
 <!--new pcHome--> 
<!--导航模块-->
		<div class="navCont">
			<img class="carouselImg" :src="showNavImg" /></img>
			<div class="navItem">
				<span :class="{'active' : isActive('Home')}"><a @click="open('/Home')">HOME</a></span>
				<span @mouseenter="clickNavSer" @mouseleave="mouseLeaveSer" :class="{'active' : isServices}">
					<a class="serCont">
					<span @click="clickNavSer" class="flagSer">SERVICES</span>
					<div class="itemContSer" >
						<div @click="open('/weChat')">WeChat Applet</div>
						<div @click="open('/WebDesign')">Web Design</div>
						<div @click="open('/IOSAndroid')">App ISO/Android</div>
						<div @click="open('/MarketingBranding')">Marketing & Branding</div>
						<div @click="open('/DataAnalysis')">Data Analysis</div>						
					</div>					
					</a>
				</span>
				<span  @mouseenter="clickNavWorks" @mouseleave="mouseLeaveWorks" :class="{'active' : isWorks}">
					<a class="serCont">
						<span @click="clickNavWorks" class="flagWorks">PORTFOLIO</span>
						<div class="itemContWorks" >
							<div @click="open('/Hotel')">Hotel</div>
							<div @click="open('/Education')">Education</div>
							<div @click="open('/Catering')">Restaurant</div>
							<div @click="open('/CarDealerships')">Car Dealerships</div>
							<div @click="open('/Tourism')">Tourism</div>
							<div @click="open('/Retail')">Retail</div>
							<div @click="open('/Fintness')">Fitness</div>
							<div @click="open('/RealEstate')">Real Estate</div>
							<div @click="open('/BeautySpa')">Beauty & Spas</div>
							<!--<div @click="open('/EnterTai')">Entertainment</div>-->					
						</div>							
					</a>
				</span>
				<span :class="{'active' : isActive('About')}"><a @click="open('/About')" >ABOUT</a></span>
				<span @click="contact" ><a>CONTACT</a></span>
			</div>
			<div class="navContBox"></div>
		</div>
		<!--导航模块-->      
     <router-view></router-view>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem';
import VueDB from './util/vue-db/vue-db-long';
import { XImg } from 'vux';
new Rem();
var DB = new VueDB();

export default {
  name: 'App',
  data(){
  	return {
  		nowUrl:"/",
  		sjtLogo:"../../pcStatic/images/mine/sjtLogo2.jpg",
  		iswbStyle:false,
  		localLang: "zh",
  		closeOldPc:false, //以前旧的模板内容
			//首页图片地址
			pcHome:"../../static/images/home/pcHome1.png", 		
			weChat:"../../static/images/weChat/weChat1.png",
			Services:"../../static/images/service/service1.png",
			Hotel:"../../static/images/works/Hotel/Hotel1.png",
			Education:"../../static/images/works/Education/education1.png",
			Catering:"../../static/images/works/Catering/catering1.png",
			AutoService:"../../static/images/works/AutoService/AutoService1.png",
			Tourism:"../../static/images/works/Tourism/tourism1.png",
			Retail:"../../static/images/works/Retail/retail1.png",
			Fintness:"../../static/images/works/Fintness/fintness1.png",
			RealEstate:"../../static/images/works/RealEstate/realEstate1.png",
			BeautySpa:"../../static/images/works/BeautySpa/BeautySpa1.png",
			EnterTai:"../../static/images/works/EnterTai/EnterTai1.png",
			About:"../../static/images/About/about1.png",
			
			showNavImg:"../../static/images/home/pcHome1.png", 	//显示的第一张图片
			
			isServices:false, //services页
			isWorks:false, //work页
  	}
  },
  watch:{
  	"$route"(to,from){
  			this.nowUrl = to.fullPath;
//			console.log(to.fullPath)
  			this.changeImg(to.fullPath);
//			console.dir(this.$refs.divCollapse.classList)
  			if (this.$refs.divCollapse.classList[this.$refs.divCollapse.classList.length -1] == "in") {
					$(".divCollapse").removeClass("in").attr("aria-expanded",false);
					$('#collapse').addClass("collapsed").attr("aria-expanded",false);
					
  			}
  	}
  },
	mounted:function(){
		   document.addEventListener('click', (e) => {
//		   	console.dir(e.target.className)
//		   	console.log("-------------")
		        if (e.target.className != "flagSer"){
		        	$(".itemContSer").css("display","none");
		        }
		        if(e.target.className != "flagWorks"){
		        	$(".itemContWorks").css("display","none");
		        }
		   })			
		
			//初始化获取本地语言
			this.initLocalLang();
			
			this.initResize();		
	},
	computed:{
			showLan:function(){
				return this.localLang == "zh" ? "中" : "EN";
			}
		},
	methods:{
			//导航隐藏显示
			clickNavSer(){
				$(".itemContSer").css("display","block");
				$(".itemContWorks").css("display","none");
			},
			clickNavWorks(){
				$(".itemContWorks").css("display","block");
				$(".itemContSer").css("display","none");
			},		
			mouseLeaveWorks(){
				$(".itemContWorks").css("display","none");
			},
			mouseLeaveSer(){
				$(".itemContSer").css("display","none");
			},
			//跳转路由，切换页面
			open(links){
				this.$router.openPage(links);
			},
			//切换路由更改图片格式
			changeImg(links){
//				console.log(links)
				this.isServices = false;
				this.isWorks = false;
				if(links == "/Home"){
					this.showNavImg = this.pcHome;
				}else if(links == "/weChat"){
					this.showNavImg = this.weChat;
					this.isServices = true;
				}else if(links == "/Services"){
					this.showNavImg = this.Services;
					this.isServices = true;
				}else if(links == "/WebDesign" || links == "/IOSAndroid" || links == "/MarketingBranding" || links == "/DataAnalysis"){
					this.showNavImg = this.Services;
					this.isServices = true;
				}else if(links == "/Hotel"){
					this.showNavImg = this.Hotel;
					this.isWorks = true;
				}else if(links == "/Education"){
					this.showNavImg = this.Education;
					this.isWorks = true;
				}else if(links == "/Restaurant"){
					this.showNavImg = this.Catering;
					this.isWorks = true;
				}else if(links == "/CarDealerships"){
					this.showNavImg = this.AutoService;
					this.isWorks = true;
				}else if(links == "/Tourism"){
					this.showNavImg = this.Tourism;
					this.isWorks = true;
				}else if(links == "/Retail"){
					this.showNavImg = this.Retail;
					this.isWorks = true;
				}else if(links == "/Fintness"){
					this.showNavImg = this.Fintness;
					this.isWorks = true;
				}else if(links == "/RealEstate"){
					this.showNavImg = this.RealEstate;
					this.isWorks = true;
				}else if(links == "/BeautySpa"){
					this.showNavImg = this.BeautySpa;
					this.isWorks = true;
				}else if(links == "/EnterTai"){
					this.showNavImg = this.EnterTai;
					this.isWorks = true;
				}else if(links == "/About"){
					this.showNavImg = this.About;
				}				
			},
			//跳转底部
			contact(){
				setTimeout(()=>{
					window.scrollTo(0,9999);
				},200)				
			},			
			//初始化获取本地语言
			initLocalLang() {
				if(!DB.getItem("localLang").toString()) {
					this.localLang = "zh";
					DB.setItem("localLang","en");
				} else {
					this.localLang = DB.getItem("localLang").toString() == "en" ? "zh" : "en";
				}
			},
			//初始化导航
			initNav(e){
//				console.log(e.srcElement.className)
				if (e.srcElement.className != "icon-bar") {
						$(".divCollapse").removeClass("in").attr("aria-expanded",false);
						$('#collapse').addClass("collapsed").attr("aria-expanded",false);							
				}
			},		
			//切换语言
			changeLang(item) {
				console.log(item);
				if(item == "zh") {
					this.localLang = "en";
					DB.setItem("localLang", "zh");
				} else {
					this.localLang = "zh";
					DB.setItem("localLang", "en");
				}
				window.location.reload();
			},	
		
			//重置浏览器大小
			initResize(){
				var _this = this;
			 _this.changeNavColor();
				$(window).resize(function () {          //当浏览器大小变化时
//				    console.log($(window).width());          //浏览器时下窗口可视区域高度
				    _this.changeNavColor();

				});
				
			},
			changeNavColor(){
					if($(window).width() < 740){
	    				this.iswbStyle = true;
	   		 }else{
				    	this.iswbStyle = false;
				  }			
			},
			isActive(route){
//				 console.log(route +"route")
//				 console.log(this.nowUrl + "this.nowUrl")
				 return this.nowUrl.indexOf(route) != -1;
			}
	},
	
	components: {
    XImg
  }
}
</script>

<style lang="scss" type="text/scss">
	@import "./assets/scss/public";
	@import "./assets/scss/util";
 /*@import '~@/assets/font/iconfont.css'*/

/*导航模块*/
		.navCont{
			position: relative;
			.carouselImg{
				/*height: 7rem;*/
				}
			.navContBox{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;		
			}				
			.navItem{
				z-index: 99;
				position: absolute;
				top: 0.25rem;
				right: 0.3rem;
				color: #FFF;
				font-size: 0.25rem;
				span{
					margin-right: 0.3rem;
				}
				a{
					color: #FFF;
				}
				.active{
					font-weight: 700;
					text-underline: 1px;
				}
				.hoverNavSer:hover{
					.itemContSer{
						display: block;
					}
				}
				.hoverNavWorks:hover{
					.itemContWorks{
						display: block;
					}
				}				
				/*导航浮动*/
				.serCont{
					position: relative;
					span{
						margin: 0;
					}
					.itemContSer{
						
						width: 180%;
						display: none;
						position: absolute;
						left: -40%;
						text-align: center;
						top: 0.2rem;
						padding-top: 0.1rem;
						div{
							word-break: keep-all;
							background-color: rgba(99,99,99,0.6);
						}
					}
					.itemContWorks{
						width: 180%;
						display: none;
						position: absolute;
						left: -40%;
						top: 0.2rem;
						padding-top: 0.1rem;
						text-align: center;
						div{
							word-break: keep-all;
							background-color: rgba(99,99,99,0.6);
						}						
					}					
				}
			}
		}
		/*导航模块end*/
	





	.navbarSjt{
			font-size:0.38rem;
			height: 1rem;
			min-height:0;
			background-color: #fff;
			padding-right:0.5rem;
		.container-fluid,.navbar-header,.example-navbar-collapse,.navbar-toggle,.nsjt-brand,.nsjt-right,.localLang{
			height: 100%;
		}
		/*左侧图标logo*/
		.nsjt-brand{
			font-size:0.3rem;
			font-weight:700;
			color:#333;
			display:flex;
			align-items:center;
		.sjtLogo_img{
			width:0.8rem;
			height:0.6rem;
      background-color: #fff;
      display: inline-block;
			}
		}
		/*右侧下拉菜单移动端按钮*/
		.navbar-header{
		.navbar-toggle{
			height: 0.5rem;
			margin-top:0.24rem;
			padding: 2px;
			padding-right:0.4rem;
			border: 0;
			&:hover{
				background-color: #fff;
			}
			.icon-bar{
				background-color: $originColor;
				
			}
		}
		.navlocalLang{
			position: relative;
			float: right;
		}
		}
		/*菜单栏*/
		.navbar-collapse{
			.wbStyle{
				background-color: rgba(0,0,0,0.6)!important;
				li a{
					color: #fff!important;
				}
			}
			.nsjt-right{
				float: right;
				min-height: 1rem;
				min-width: 2rem;
				overflow: visible;
				margin-top: 0;
				margin-right: 0rem;
				padding-right: 0.2rem;
				text-align: center;
				.actived{
					color:$originColor!important;
				}
				li a{
					&:hover{
						color:$originColor;
						opacity: 0.4;
					}
					font-size: 0.3rem;
					line-height: 0.65rem;
					height: 1rem;
				}
			}
		}
		
		.navlocalLang{
		.localLang{
			position: fixed;
			top: 0;
			right: 0;
			margin-right: 0.2rem;
			height: 1rem;
			padding:0.26rem 0 0.2rem 0;
			font-size: 0.34rem;
			width: 0.5rem;
			color:#333;
		}
		}
		
		
		}

</style>
