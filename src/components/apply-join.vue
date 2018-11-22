<template>
<div class="initCont">
		<!--导航模块-->	
		<div  class="worksCont3">
			<x-img class="carouselImg" v-lazy="applyJoin" /></x-img>
			<div class="shadeBox"></div>
			<section class="applyJoin">
				<div class="applyJoinCont">
				    <group class="ajcGroup">
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Name</group-title>
				      	<x-input title="" v-model="submitData.name" class="ajInput" ></x-input>
				    </group>					
				    <group class="ajcGroup">
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Email</group-title>
				      	<x-input title="" v-model="submitData.email" class="ajInput" ></x-input>
				    </group>					
				    <group class="ajcGroup">
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Phone</group-title>
				      	<x-input title="" v-model="submitData.telephone" class="ajInput" ></x-input>
				    </group>					
				    <group class="ajcGroup">
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Message</group-title>
				      	 <x-textarea :rows="3"  v-model="submitData.context"  class="ajTextarea"></x-textarea>
				    </group>
				    <x-button class="ajButton" @click.native="sentButton()">SUBMIT</x-button>
				</div>					
			</section>
			
			<div class="bottomLink">
				<div class="leftCont">
					<div @click="open('/weChat')"></div>
					<div @click="open('/Services')" class="cancatColumn"></div>
				</div>
				<div class="rightCont">
					<div @click="open('/Hotel')"></div>
					<div @click="open('/Education')"></div>
					<div @click="open('/Restaurant')"></div>
					<div @click="open('/CarDealerships')"></div>
					<div @click="open('/Tourism')"></div>
				</div>			
				<div class="rightCont2">
					<div @click="open('/Retail')"></div>
					<div @click="open('/Fintness')"></div>
					<div @click="open('/RealEstate')"></div>
					<div @click="open('/BeautySpas')"></div>
				</div>				
			</div>
			
		</div>	
		
		
		</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet,XInput, GroupTitle,Group,XTextarea,XButton } from 'vux';
	
	export default{
		data(){
			return{
				submitData:{
					name:"",
					email:"",
					telephone:"",
					context:""
				},				
				applyJoin:"../../../static/images/home/pcHome8.png",
			}
		},
		components:{
			XImg,
			Flexbox,
			FlexboxItem,
			Actionsheet,
			GroupTitle,
			Group,
			XInput,
			XTextarea,
			XButton
		},
		methods: {
			//跳转路由，切换页面
			open(link){
				this.$router.openPage(link);
			},
			//跳转底部
			contact(){
				setTimeout(()=>{
					window.scrollTo(0,9999);
				},200)				
			},
			//提交按钮
			sentButton(){
				console.log(this.applyJoin)
				if (this.submitData.name && this.submitData.telephone && this.submitData.context) {
					if (!/^[0-9-]+$/.test(this.submitData.telephone)) {
						this.$vux.toast.show({
							text: "One or more fields have an error.Please check and try again.",
							type: "text",
						})	
						return false;
					}else if(this.submitData.email && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.submitData.email)){
						this.$vux.toast.show({
							text: "One or more fields have an error.Please check and try again.",
							type: "text",
						})	
						return false;						
					}
					var data = {
						companyId: 1,
						contactUser:this.submitData.name,
		                contactPhone:this.submitData.telephone,
		                qqWechat:this.submitData.email,
		                contactDeatil:this.submitData.context,
					}
					this.$http.post("/contactUs/insert", data).then((res) => {
						console.log(res);
						if(res.status == 200 && res.data.errorCode == "0") {
							this.$vux.toast.show({
								text:"The information was submitted successfully. We will contact you later. Please keep the phone open!",
								type: "text",
								time:"4000"
							})	
							this.submitData = {
									name:"",
									telephone:"",
									email:"",
									context:""
								}
						}
					}).catch((err) => {
						console.log(err);
						this.$vux.toast.show({
							text:"One or more fields have an error.Please check and try again.",
							type: "text",
							time:"4000"
						})	
					})					
				}else{
					this.$vux.toast.show({
						text:"One or more fields have an error.Please check and try again.",
						type: "text",
					})					
				}				
				
				
			},	
		}
		
		
	}
	
	
</script>

<style scoped="scoped" lang="scss">
@import "../assets/scss/util";
	.initCont {
		font-size:0.38rem;
		
		/*导航模块*/
		.navCont{
			position: relative;
			.carouselImg{
				/*height: 7rem;*/
				}
			.navItem{
				position: absolute;
				top: 0.25rem;
				right: 0.3rem;
				color: #FFF;
				font-size: 0.2rem;
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
					height: 50%;
				}
			}
		}
		/*works模块2*/
		.worksCont2{
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
					width: calc(100% / 3);
					height: 50%;
				}
			}
		}		
		/*works模块3*/
		.worksCont3{
			position: relative;
			.shadeBox{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;		
			}
			
			/*底部右侧点击链接*/
			.bottomLink{
				z-index: 99;
				width: 50%;
				height:50%;
				display: flex;
				flex-wrap: wrap;
				position: absolute;
				top: 30%;
				right: 0;
				/*background-color: blue;*/	
				/*border: 1px solid;*/
				.leftCont{
					width:30%;
					padding-top:11%;
					div{
						width: 100%;
						height: 7%;
						/*border: 1px solid blue;*/
						&:hover{
							cursor: pointer;
						}
					}
					.cancatColumn{
						height: 35%;
					}
				}
				.rightCont{
					width: 30%;
					padding-top:11%;
					div{
						width:100%;
						height: 7%;
						/*border: 1px solid blue;*/
						&:hover{
						cursor: pointer;
						}
					}					
				}
				.rightCont2{
					width: 30%;
					padding-top:11%;
					div{
						width:100%;
						height: 7%;
						/*border: 1px solid blue;*/	
						&:hover{
						cursor: pointer;
						}
					}					
				}				
				
			}
			
			/*手机端*/
			.applyJoin{
				z-index: 99;
				width: 100%;
				height: 65%;
				display: flex;
				flex-wrap: wrap;
				position: absolute;
				top: 34%;
				.applyJoinCont{
					font-size: 0.2rem;
					width: 50%;
					height:100%;
					padding:0 5% 0 10%;
					.weui-cells{
						margin-top: 0.1rem!important;
					}
					.ajGTitle{
						color: #FFF;
						padding-left: 0;
						margin-top: 0.1rem;
						margin-bottom: 0rem;
						font-size: 0.1rem;
					}					
					.ajInput{
						height: 0.2rem;
						font-size: 0.1rem;
						padding: 0;
					}
					.ajTextarea{
						height: 0.6rem;
						font-size: 0.1rem;
						padding: 0;						
					}
					.ajButton{
						margin-top: 0.15rem;
						height: 0.4rem;
						font-size: 0.2rem;
						color: #FFF;
						background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
					}					
				}
			}
			/*pc端*/	
			@media screen and (min-width: 900px){
				.applyJoin{
					width: 100%;
					height: 60%;
					display: flex;
					flex-wrap: wrap;
					position: absolute;
					top:34%;
					.applyJoinCont{
						width: 50%;
						height: 100%;
						padding:0 5% 0 10%;
						.weui-cells{
							margin-top: 0.04rem!important;
						}
						.ajGTitle{
							color: #FFF;
							padding-left: 0;
						}
						.ajInput{
							height: 0.2rem;
							font-size: 0.22rem;
						}
						.ajTextarea{
							height: 0.7rem;
							font-size: 0.22rem;
							padding: 0;						
						}		
						.ajButton{
							margin-top: 0.2rem;
							height: 0.4rem;
							color: #FFF;
							font-size: 0.16rem;
							background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
						}					
					}
				}				
			}	
			
			@media screen and (min-width: 1000px){
				.applyJoin{
					width: 100%;
					height: 60%;
					display: flex;
					flex-wrap: wrap;
					position: absolute;
					top:34%;
					.applyJoinCont{
						width: 50%;
						height: 100%;
						padding:0 5% 0 10%;
						.weui-cells{
							margin-top: 0.04rem!important;
						}
						.ajGTitle{
							color: #FFF;
							padding-left: 0;
						}
						.ajInput{
							height: 0.2rem;
							font-size: 0.22rem;
						}
						.ajTextarea{
							height: 0.8rem;
							font-size: 0.22rem;
							padding: 0;						
						}		
						.ajButton{
							margin-top: 0.2rem;
							height: 0.4rem;
							color: #FFF;
							font-size: 0.16rem;
							background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
						}					
					}
				}				
			}			
			
			@media screen and (min-width: 1100px){
				.applyJoin{
					width: 100%;
					height: 60%;
					display: flex;
					flex-wrap: wrap;
					position: absolute;
					top:34%;
					.applyJoinCont{
						width: 50%;
						height: 100%;
						padding:0 5% 0 10%;
						.weui-cells{
							margin-top: 0.04rem!important;
						}
						.ajGTitle{
							color: #FFF;
							padding-left: 0;
						}
						.ajInput{
							height: 0.2rem;
							font-size: 0.22rem;
						}
						.ajTextarea{
							height: 0.9rem;
							font-size: 0.22rem;
							padding: 0;						
						}		
						.ajButton{
							margin-top: 0.2rem;
							height: 0.4rem;
							color: #FFF;
							font-size: 0.16rem;
							background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
						}					
					}
				}				
			}			
				
			@media screen and (min-width: 1200px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.04rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.25rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 1rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.4rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}				

			@media screen and (min-width: 1300px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.1rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.3rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 1.2rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.4rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}

			@media screen and (min-width: 1400px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.1rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.3rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 1.2rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.4rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}
	
			@media screen and (min-width: 1500px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.1rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.4rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 2rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.5rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}	

			@media screen and (min-width: 1600px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.1rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.4rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 2rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.5rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}
						
			@media screen and (min-width: 1700px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 0.1rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
									}
									.ajInput{
										height: 0.4rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 2rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.2rem;
										height: 0.5rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}				
			@media screen and (min-width: 1800px){
							.applyJoin{
								width: 100%;
								height: 60%;
								display: flex;
								flex-wrap: wrap;
								position: absolute;
								top: 34%;
								.applyJoinCont{
									width: 50%;
									height: 100%;
									padding:0 5% 0 10%;
									.weui-cells{
										margin-top: 1.5rem!important;
									}
									.ajGTitle{
										color: #FFF;
										padding-left: 0;
										font-size: 0.2rem;
									}
									.ajInput{
										height: 0.4rem;
										font-size: 0.22rem;
									}
									.ajTextarea{
										height: 2.6rem;
										font-size: 0.22rem;
										padding: 0;						
									}		
									.ajButton{
										margin-top: 0.3rem;
										height: 0.5rem;
										color: #FFF;
										background:linear-gradient(to right,rgb(0,159,196),rgb(0,200,156))
									}				
								}
							}				
						}			
		}	
		
	}
		
</style>