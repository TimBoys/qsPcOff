<template>
		<!--导航模块-->
		<div class="initCont" ref="initCont">
			
		<div class="navCont displayNone">
			<x-img class="carouselImg" v-lazy="pcHome[0]" /></x-img>
			<div class="navItem">
				<span><a href="#/pcHome" >HOME</a></span>
				<span ><a href="#/Services" >SERVICES</a></span>
				<span ><a href="#/Hotel" >WORKS</a></span>
				<span class="active"><a href="#/About" >ABOUT</a></span>
				<span><a @click="contact">CONTACT</a></span>
			</div>
			<div class="navContBox"></div>
		</div>
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[1]" /></x-img>
			<div class="shadeBox" ></div>
		</div>
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[2]" /></x-img>
			<div class="shadeBox" ></div>
		</div>		
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[3]" /></x-img>
			<div class="shadeBox" ></div>
		</div>			
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[4]" /></x-img>
			<div class="shadeBox" ></div>
		</div>	
		<div >
			<!--<x-img class="carouselImg" v-lazy="pcHome[5]" /></x-img>-->
			<apply-join></apply-join>
		</div>	
	</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import applyJoin from '../../components/apply-join.vue';
	export default{
		name:"Hotel",
		data(){
			return{
				//首页图片地址
				pcHome:[
					"../../../static/images/About/about1.png",
					"../../../static/images/About/about2.png",
					"../../../static/images/About/about3.png",
					"../../../static/images/About/about4.png",
					"../../../static/images/About/about5.png",
					"../../../static/images/home/pcHome8.png",					
				],
				closeOldPc:false, //以前旧的模板内容				
			}
		},
		mounted:function(){
			window.scrollTo(0,0);
		},
		components:{
			XImg,
			applyJoin
		},
		methods:{
			//跳转底部
			contact(){
				setTimeout(()=>{
					window.scrollTo(0,9999);
				},200)				
			},			
		}
		
	}
	
</script>

<style scoped="scoped" lang="scss">
	.initCont{
		font-size:0.38rem;
		/*导航模块*/
		.boxShadeCont{
			position: relative;
			.shadeBox{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;			
				/*border: 1px solid;
				background-color: red;*/
			}
		}		
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
				/*border: 1px solid;
				background-color: red;*/
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
			}
		
			/*@media screen and (min-width: 1000px) {
				.navItem{
					position: absolute;
					top: 0.5rem;
					right: 1rem;
					color: #FFF;
					font-size: 0.5rem;
				}
			}			*/
		}
		/*导航模块end*/
		/*works模块*/
		.worksCont{
			position: relative;
			section{
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				position: absolute;
				top: 0;
				div{
					/*border: 1px solid;
					background-color: red;*/
					width: 50%;
					height: 100%;
				}
			}
		}		
		
		
		
	}
</style>