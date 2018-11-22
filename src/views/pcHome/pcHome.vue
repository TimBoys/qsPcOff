<template>
	<div class="initCont" ref="initCont">
		<!--导航模块-->
		<div class="navCont displayNone">
			<x-img class="carouselImg" v-lazy="pcHome[0]" /></x-img>
			<div class="navItem">
				<span class="active"><a href="#/pcHome" >HOME</a></span>
				<span class="hoverNavSer" >
					<a class="serCont">
					<span @click="clickNavSer" class="flagSer">SERVICES</span>
					<div class="itemContSer" >
						<div @click="open('/weChat')">WeChat Applet</div>
						<div @click="open('/Services')">Web Design</div>
						<div @click="open('/Services')">App ISO/Android</div>
						<div @click="open('/Services')">Marketing & Branding</div>
						<div @click="open('/Services')">Data Analysis</div>						
					</div>					
					</a>
				</span>
				<span class="hoverNavWorks">
					<a class="serCont">
						<span @click="clickNavWorks" class="flagWorks">WORKS</span>
						<div class="itemContWorks" >
							<div @click="open('/Hotel')">Hotel</div>
							<div @click="open('/Education')">Education</div>
							<div @click="open('/Restaurant')">Restaurant</div>
							<div @click="open('/CarDealerships')">Car Dealerships</div>
							<div @click="open('/Tourism')">Tourism</div>
							<div @click="open('/Retail')">Retail</div>
							<div @click="open('/Fintness')">Fitness</div>
							<div @click="open('/RealEstate')">Real Estate</div>
							<div @click="open('/BeautySpa')">Beauty & Spas</div>
							<div @click="open('/EnterTai')">Entertainment</div>					
							
						</div>							
					</a>
				</span>
				<span><a href="#/About" >ABOUT</a></span>
				<span @click="contact">CONTACT</span>
			</div>
			<div class="navContBox"></div>
		</div>
		<!--导航模块-->
		
		
		<div class="boxShadeCont canClickPoint">
			<x-img class="carouselImg" v-lazy="pcHome[1]" /></x-img>
			<div class="shadeBox"  @click="open('/weChat')"></div>
		</div>
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[2]" /></x-img>
			<div class="shadeBox"></div>
		</div>		
		<!--<div class="worksCont canClickPoint">
			<x-img class="carouselImg" v-lazy="pcHome[3]" />
				<section>
					<div @click="open('/Hotel')"></div>
					<div @click="open('/Education')"></div>
					<div @click="open('/Restaurant')"></div>
					<div @click="open('/AutoService')"></div>
				</section>
			</x-img>
		</div>-->
		<div class="worksCont2 canClickPoint">
			<x-img class="carouselImg" v-lazy="pcHome[3]" />
				<section>
					<div @click="open('/Hotel')"></div>
					<div @click="open('/Education')"></div>
					<div @click="open('/Restaurant')"></div>
					<div @click="open('/CarDealerships')"></div>					
					<div @click="open('/Tourism')"></div>
					<div @click="open('/Retail')"></div>
					<div @click="open('/Fintness')"></div>
					<div @click="open('/RealEstate')"></div>
					<div @click="open('/BeautySpa')"></div>
					<!--<div @click="open('/EnterTai')"></div>-->					
				</section>			
			</x-img>
		</div>		
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[5]" /></x-img>
			<div class="shadeBox"></div>
		</div>		
		<div class="boxShadeCont canClickPoint">
			<x-img class="carouselImg" v-lazy="pcHome[6]" /></x-img>
			<div class="shadeBox" @click="open('/About')"></div>
		</div>		
		<div class="boxShadeCont">
			<x-img class="carouselImg" v-lazy="pcHome[7]" /></x-img>
			<div class="shadeBox"></div>
		</div>			
		<!--<div  class="worksCont3">
			<x-img class="carouselImg" v-lazy="pcHome[7]" /></x-img>
			<section class="applyJoin">
				<div class="applyJoinCont">
				    <group>
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Name</group-title>
				      	<x-input title="" v-model="submitData.name" class="ajInput" ></x-input>
				    </group>					
				    <group>
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Email</group-title>
				      	<x-input title="" v-model="submitData.email" class="ajInput" ></x-input>
				    </group>					
				    <group>
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">phone</group-title>
				      	<x-input title="" v-model="submitData.telephone" class="ajInput" ></x-input>
				    </group>					
				    <group>
				    	<group-title slot="title" title-color="#FFF" class="ajGTitle">Message</group-title>
				      	 <x-textarea  v-model="submitData.context"  class="ajTextarea"></x-textarea>
				    </group>
				    <x-button class="ajButton" @click.native="sentButton()">sent</x-button>
				</div>					
			</section>
		</div>		-->
		<div>
			<!--<x-img class="carouselImg" v-lazy="pcHome[5]" /></x-img>-->
			<apply-join></apply-join>
		</div>		
		
		
		
		
		
		<Carousel v-model="value1" loop autoplay :autoplay-speed="4000"  class="carouselCont" v-if="closeOldPc">
			<CarouselItem v-for="(imgItem,index) in banner" :key="index">
				<div class="demo-carousel">
					<x-img class="carouselImg" v-lazy="imgItem.figureAddress" /></x-img>
				</div>
			</CarouselItem>
		</Carousel>

		<!--热门三种按钮-->
		<div class="topFire_cont" v-if="closeOldPc">
			<!--切换地址-->
			<div class="localAddr">
				<div class="addrCont" @click="selectAddr">
					<x-img v-lazy="localAddr.localPos" class="localPos"></x-img>
					<div>{{localAddr.localName}}</div>
					<div class="triangle_border_down">
						<span></span>
					</div>
				</div>
			</div>
			<!--店铺选择-->
			<div class="storeDetail" v-if="isShowAs2">
				<div class="sd-item" v-for="(sdItem,index) in menusStore" @click="selectMenu2(sdItem)"><span :class="{'colorYellow':localAddr.localName == sdItem.storeName}">{{sdItem.storeName}}</span></div>
			</div>
		</div>

<!--内容模块-->
		<div class="homeContainer" v-if="closeOldPc">
			<div class="ct-title">
				<div class="ctt-oneTitle">{{$t('pcHome.PrimeThaiTea')}}</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle">{{$t('pcHome.bringNbe')}}</div>
				<div class="ctt-fourTitle">素匠·泰茶Prime's Thai tea</div>
			</div>
<!--关于我们-->
			<div class="ct-aboutAs" v-if="closeOldPc">
				<div class="ctt-one">
					<div class="ctto-about">{{$t('pcHome.aboutAs')}}</div>
					<div class="ctto-aboutCont">
						<div class="p">{{$t('pcHome.aboutAsCont1')}}</div>
						<div class="p">{{$t('pcHome.aboutAsCont2')}}</div>	
						<div class="p">{{$t('pcHome.aboutAsCont3')}}</div>							
					</div>
					
				</div>
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in aboutImg" :key="index" class="abSrcCont">
						<x-img v-lazy="abSrcItem" class="abSrcContImg"></x-img>
					</div>
				</div>
			</div>
<!--当季精选-->
			<div class="ct-detail" v-if="closeOldPc">
				<div class="detailFire_cont">
					<div v-for="(detailFS,index) in detailFireSrc" class="df_cell" v-if="index == 0">
						<div class="df_header">
							<!--<x-img  v-lazy="detailFS.classLogo"  class="dfh_img"></x-img>
							<p class="dfh_title">{{detailFS.className}} ——</p>-->
							<p class="dfh_title2">{{detailFS.className}}</p>
						</div>
						<div class="df_body">
							<div v-for="(dfb_body) in detailFS.goods" class="dfb_item" >
								<x-img v-lazy="dfb_body.goodsPictureRound" class="dfb_img"></x-img>
								<p class="dfb_name">{{dfb_body.goodsName}}</p>
								<!--<p class="dfb_price">${{dfb_body.goodsPrice}}</p>-->
							</div>
						</div>
					</div>
				</div>
			</div>
<!--轮播2-->
		<div class="carouselCont2" v-if="closeOldPc">
				<div class="ctt-oneTitle">{{$t('pcHome.PrimeThaiTea')}}</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle">{{$t('pcHome.egCupTea')}}</div>	
				<!--模态框2-->
				<div class="carouseScroll">
					<div class="csModel">
						<div class="cs-pre" @click="csNext"><</div>
						<div class="allCont" ref="allCsCont">
						<div class="csCont" >
							<div class="cscItem" v-for="(cscOneItem,index) in cscItem" :key="index">
								<x-img v-lazy="cscOneItem" class="cscItemImg"></x-img>
							</div>		
						</div>
						</div>
						<div class="cs-next" @click="csPre">></div>
					</div>
					
					
				</div>
				<!--模态框2-->
				
		</div>

<!--加盟-->
		<div class="joinUsCont" v-if="closeOldPc">
				<div class="ctt-threeTitle">{{$t('pcHome.toSupport')}}</div>	
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in joinUsCont" :key="index" class="abSrcCont">
						<div>
							<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
							<div class="dectOne">{{abSrcItem.dectOne}}</div>
							<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
						</div>
					</div>
				</div>				
		</div>
<!--联系我们-->
		<div class="findUs" v-if="closeOldPc">
				<div class="findUsCont">
					<x-img v-lazy="aboutImg[2]" class="abSrcContImg"></x-img>
					<div class="fuTrueCont">
						<div class="ftc-left">
							<div class="ftcl-title">{{$t('pcHome.contactUs')}}</div>
							<div class="ftcl-cont">
								<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont">
									<x-img v-lazy="ftclcItem.src" class="ftcrc-Img"></x-img>
									<div>{{ftclcItem.textCont}}</div>
								</div>
							</div>
						</div>
						<div class="ftc-right">
							<x-img v-lazy="ecode" class="ftcrImg"></x-img>
						</div>
						
					</div>
				</div>		
		</div>



		</div>

	</div>
</template>

<script>
	import VueDB from '../../util/vue-db/vue-db-long'
	import { XImg, Flexbox, FlexboxItem, Actionsheet,XInput, GroupTitle,Group,XTextarea,XButton } from 'vux';
	import applyJoin from '../../components/apply-join.vue';
	import _ from 'lodash';	
	var DB = new VueDB();
	var sivTime = null;
	var crouselScrWidth = null;
	var canScrollWidth = null;
	var timeoutflag = 1;
	export default {
		name: "home",
		data() {
			return {
				banner: [],
				value1: 0,
				isShowAs2: false,
				menusAddr: {},
				menusStore: [], //店铺数据
				localAddr: {
					localPos: "../../../pcStatic/images/home/local_position2.png",
					localName: ""
				},
				//关于我们
				aboutImg:[
					"../../../pcStatic/images/home/testImg5.jpg",
					"../../../pcStatic/images/home/testImg6.jpg",
					"../../../pcStatic/images/home/testImg7.jpg",
					"../../../pcStatic/images/home/testImg8.jpg",
				],
				//加入我们
				joinUsCont:[{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.BusinessMS'),
					dectTwo:this.$t('pcHome.BusinessMSCont')
				},{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.BrandIS'),
					dectTwo:this.$t('pcHome.BrandISCont')
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.StoreLS'),
					dectTwo:this.$t('pcHome.StoreLSCont'),
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.StoreDS'),
					dectTwo:this.$t('pcHome.StoreDSCont'),
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.HeadquartersTS'),
					dectTwo:this.$t('pcHome.HeadquartersTSCont'),
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:this.$t('pcHome.OpeningMS'),
					dectTwo:this.$t('pcHome.OpeningMSCont'),
					}
					
				],				

				//轮播2
				cscItem:["../../../pcStatic/images/home/testImg1.jpg","../../../pcStatic/images/home/testImg2.jpg","../../../pcStatic/images/home/testImg3.jpg","../../../pcStatic/images/home/testImg4.jpg","../../../pcStatic/images/home/testImg5.jpg","../../../pcStatic/images/home/testImg6.jpg","../../../pcStatic/images/home/testImg7.jpg","../../../pcStatic/images/home/testImg8.jpg","../../../pcStatic/images/home/testImg2.jpg","../../../pcStatic/images/home/testImg1.jpg",],
				crouselScrWidth:null, //每次滚动距离
				//底部联系我们三个
				ftclcCont:[{
					src:"../../pcStatic/images/mine/addr.png",
					textCont:"175-13988 Maycrest Way RichMond"
				},{
					src:"../../pcStatic/images/mine/tele.png",
					textCont:"604-604-6044"
				},{
					src:"../../pcStatic/images/mine/eMail.png",
					textCont:"customerservice@123.com"
				}],
				//二维码
				ecode:"../../pcStatic/images/mine/ecode.png",
				//首页最热的三类的图标
				detailFireSrc: [],
				//首页图片地址
				pcHome:["../../../static/images/home/pcHome1.png",
					"../../../static/images/home/pcHome2.png",
					"../../../static/images/home/pcHome3.png",
					"../../../static/images/home/pcHome4.png",
					"../../../static/images/home/pcHome5.png",
					"../../../static/images/home/pcHome6.png",
					"../../../static/images/home/pcHome66.png",
					"../../../static/images/home/pcHome7.png",					
					"../../../static/images/home/pcHome8.png",					
				],
				closeOldPc:false, //以前旧的模板内容
				submitData:{
					name:"",
					email:"",
					telephone:"",
					context:""
				},

			}
		},
		mounted: function() {
console.log("Home")
			window.scrollTo(0,0);
		   document.addEventListener('click', (e) => {
//		   	console.dir(e.target.className)
		        if (e.target.className != "flagSer"){
		        	$(".itemContSer").css("display","none");
		        }
		        if(e.target.className != "flagWorks"){
		        	$(".itemContWorks").css("display","none");
		        }
		   })			
			
			//初始化轮播图2
//			canScrollWidth = this.$refs.allCsCont.scrollWidth - this.$refs.allCsCont.clientWidth; //可以滚动的宽度
//			crouselScrWidth = this.$refs.allCsCont.scrollWidth / 10;
//			this.allCsCont2();
			//初始化店铺
//			this.initGetStoreId();
			//初始化店铺数据
//			this.initStoreData();			
		},

		methods: {
			//隐藏显示
			clickNavSer(){
				$(".itemContSer").css("display","block");
				$(".itemContWorks").css("display","none");
			},
			clickNavWorks(){
				$(".itemContWorks").css("display","block");
				$(".itemContSer").css("display","none");
			},
			
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
							text: "Please fill in the correct mobile phone number!",
							type: "text",
						})	
						return false;
					}else if(this.submitData.email && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.submitData.email)){
						this.$vux.toast.show({
							text: "Please fill in the correct email address!",
							type: "text",
						})	
						return false;						
					}
					this.$http.post("/userLogin/saveContact", this.submitData
					).then((res) => {
						console.log(res);
						if(res.status == 200 && res.data.rspCode == "00000") {
							this.$vux.toast.show({
								text:"The information was submitted successfully. We will contact you later. Please keep the phone open!",
								type: "text",
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
					})					
				}else{
					this.$vux.toast.show({
						text:"请填写正确的联系信息！",
						type: "text",
					})					
				}				
				
				
			},
			
			//初始化店铺获取店铺编号
			initGetStoreId() {
				var _this = this;
				this.$http.get("/userLogin/storelist", {
					params: {
						lang: DB.getItem("localLang").toString()
					}
				}).then((res) => {
					if(res.status == 200 && res.data.rspCode == "00000") {
						//初始化上拉店铺
						if(DB.getItem("storeNo").toString()) {
							//有缓存过店铺编号，根据店铺编号去取
							res.data.data.data.forEach(function(item, index) {
								if(item.storeNo == DB.getItem("storeNo").toString()) {
									_this.localAddr.localName = item.storeName;
								}
							})
						} else {
							//第一次进来没有缓存数据，1缓存storeNo ,2初始化选择框
							res.data.data.data.forEach(function(item, index) {
								if(item.isDefault) {
									DB.setItem("storeNo", item.storeNo);
									_this.localAddr.localName = item.storeName;
								}
							})
						}
						//初始化上拉店铺 ，缓存三个店铺数据
						this.menusStore = res.data.data.data;
						res.data.data.data.forEach(function(item, index) {
							_this.menusAddr["storeName_" + item.storeNo] = item.storeName;
						})
						DB.setItem("storeList", JSON.stringify(res.data.data.data));
						//初始化店铺数据
						this.initStoreData();
						this.initGetCarousel();
					}
				}).catch((err) => {
					console.log(err)
				})

			},
			initGetCarousel() {
				this.$http.get("/userLogin/getCarouselFigure", {
					params: {
						//						storeNo:DB.getItem("storeNo").toString(),
						storeNo: "D00005",
						lang: "zh"
					}
				}).then((res) => {
					console.log(res)
					console.log(res.data.data.data)
					if(res.status == 200 && res.data.rspCode == "00000") {
						this.banner = res.data.data.data;
					}
				}).catch((err) => {
					console.log(err)
				})
			},
			selectAddr() {
				//				this.isShowAs = true;
				this.isShowAs2 = !this.isShowAs2;
			},
			//切换店铺 存储店铺编号 更新选择框自定义
			selectMenu2(key, val) {
				console.log(key)
				var selectVal = key.storeNo;
				//				console.log(selectVal[1]);
				if(selectVal != DB.getItem("storeNo").toString()) {
					DB.setItem("storeNo", selectVal);
					this.localAddr.localName = val;
					//青春店铺缓存
					window.location.reload();
				}
			},
			//初试化店铺数据
			initStoreData(){
				var _this = this;
				this.$http.get("/userLogin/getClassGoods",{
					params:{
						storeNo:DB.getItem("storeNo").toString(),
						classType:1,
						lang:DB.getItem("localLang").toString()
					}
				}).then((res) => {
						console.log("/userLogin/getClassGoods")
						console.log(res)
						console.log(res.data.data.data)
						if(res.status == 200 && res.data.rspCode == "00000"){
							this.detailFireSrc = res.data.data.data;
						}
				}).catch((err) => {
					console.log(err)
				})				
			},
			
			//轮播2
			allCsCont2(){
//				console.dir(this.$refs.allCsCont.scrollWidth)
				sivTime =  setInterval(()=>{
					this.$refs.allCsCont.scrollLeft += 1;
//					console.log(this.$refs.allCsCont.scrollLeft)
					if(this.$refs.allCsCont.scrollLeft >= canScrollWidth - 1){
						this.$refs.allCsCont.scrollLeft = 0;
					}
				},30)
				
			},
			//右
			csPre(){
					clearInterval(sivTime);
					console.log("csPre")
					this.$refs.allCsCont.scrollLeft += crouselScrWidth;
					if(this.$refs.allCsCont.scrollLeft >= canScrollWidth - 1){
						this.$refs.allCsCont.scrollLeft = 0;
					}

			},
			//左
			csNext(){
				clearInterval(sivTime);
//				console.log("csNext")
				this.$refs.allCsCont.scrollLeft -= crouselScrWidth;
				if(this.$refs.allCsCont.scrollLeft <= 0){
					this.$refs.allCsCont.scrollLeft = this.$refs.allCsCont.clientWidth;
				}				
			}
		},
		components: {
			XImg,
			Flexbox,
			FlexboxItem,
			Actionsheet,
			GroupTitle,
			Group,
			XInput,
			XTextarea,
			XButton,
			applyJoin
		}

	}
</script>

<style scoped="scoped" lang="scss">
@import "../../assets/scss/util";
	.initCont {
		font-size:0.38rem;
		/*群体遮罩*/
		.boxShadeCont{
			position: relative;
			.shadeBox{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;			
			}
		}
		
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
						display: none;
						/*border: 1px solid;*/
						position: absolute;
						left: 0;
						top: 0.2rem;
						padding-top: 0.1rem;
					}
					.itemContWorks{
						display: none;
						/*border: 1px solid;*/
						position: absolute;
						left: 0;
						top: 0.2rem;
						padding-top: 0.1rem;
					}					
				}
			}
		
			/*@media screen and (min-width: 1000px) {
				.navItem{
					position: absolute;
					top: 0.5rem;
					right: 1rem;
					color: #FFF;
					font-size: 0.3rem;
				}
			}		*/
	
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
					height: calc(100% / 3);
				}
			}
		}		
		/*works模块3*/
		.worksCont3{
			position: relative;
			/*手机端*/
			.applyJoin{
				width: 100%;
				height: 65%;
				display: flex;
				flex-wrap: wrap;
				position: absolute;
				top: 1.5rem;
				.applyJoinCont{
					font-size: 0.2rem;
					border: 1px solid red;
					/*background-color: red;*/
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
						font-size: 0.16rem;
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
					top: 4rem;
					.applyJoinCont{
						border: 1px solid red;
						/*background-color: red;*/
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
						}
						.ajTextarea{
							height: 2.2rem;
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
		}	
		
		
		.carouselCont {
			.carouselImg {
				height: 5rem;
			}
		}
		.topFire_cont {
			position: relative;
			.localLang {
				width: 0.44rem;
				height: 0.44rem;
				text-align: center;
				line-height: 0.44rem;
				position: absolute;
				top: -3.8rem;
				right: 0.2rem;
				background-color: #FDA544;
				font-size: 0.34rem;
				padding: .1rem;
				color: #FFF;
				border-radius: 50%;
				z-index: 999;
			}
			.localAddr {
				line-height: 0.44rem;
				position: absolute;
				top: -4.6rem;
				left: 0.2rem;
				z-index: 999;
				word-break: keep-all;
				overflow: hidden;
				.addrCont {
					padding: 0.05rem 0.1rem;
					max-width: 4rem;
					background-color: #FFF;
					border: 1px solid #c5c5c5;
					line-height: 0.4rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.triangle_border_down {
						display: inline-block;
						width: 0;
						height: 0;
						border-width: 0.14rem 0.14rem 0;
						margin-left: 0.04rem;
						border-style: solid;
						border-color: #FDA544 transparent transparent;
						/*灰 透明 透明 */
						position: relative;
						top: 0;
					}
					.triangle_border_down span {
						display: block;
						width: 0;
						height: 0;
						border-width: 0.14px 0.14px 0;
						border-style: solid;
						border-color: #fc0 transparent transparent;
						/*黄 透明 透明 */
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.localPos {
						width: 0.4rem;
						height: 0.4rem;
						display: inline-block;
					}
					div {
						display: inline-block;
						font-size: 0.3rem;
						color: #FDA544;
						overflow: hidden;
						text-overflow: ellipsis;
						max-width: 3rem;
					}
				}
			}
			.storeDetail {
				position: absolute;
				top: -4.1rem;
				left: 0.2rem;
				z-index: 999;
				font-size: 0.32rem;
				background-color: #fff;
				border: 1px solid #FDA544;
				.sd-item {
					.colorYellow {
						color: #FDA544;
					}
					padding:0.1rem 0.2rem;
					border-bottom: 1px solid #FDA544;
				}
			}
			.tf_cell {
				width: calc(100% / 3);
				height: 100%;
				display: inline-block;
				font-size: 0.34rem;
				section {
					width: 100%;
					height: 2rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #000000;
					.tf_img {
						width: 1.2rem;
						height: 1rem;
						margin-bottom: .1rem;
					}
				}
			}
		}
		/*内容区域*/
		.homeContainer {
			/*头部四个标题*/
			.ct-title{
				width: 100%;;
				height: 2.5rem;
				text-align: center;
				div{
					
				}
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}
				.ctt-threeTitle{
					color:#000000;
					font-weight: 700;
					padding-bottom: 0.3rem;
				}
			}
			/*关于我们*/
			.ct-aboutAs{
				display: flex;
				&>div,p{
					width: 50%;
					/*border: 1px solid;*/
					padding: 0.2rem;
				}
				.ctt-one{
					.ctto-about{
						color:#000000;
						font-size: 0.28rem;
					}
					.ctto-aboutCont{
						
						padding-right: 0;
						color:#333;
						font-size: 0.22rem;		
						&>.p{
							text-indent: 0.48rem;
						}				
					}
				}
				.ctt-two{
					display: flex;
					flex-wrap: wrap;
					.abSrcCont{
						padding:0.2rem;
						.abSrcContImg{
							width:1.8rem;
							height:1.8rem;
							border-radius: 4px;
						}
					}
				}
			}
			
			/*第二个轮播*/
			.carouselCont2{
				width: 100%;;
				text-align: center;
				div{
					
				}
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}				
				.ctt-threeTitle{
					color: $originColor;
				}	
				
				.carouseScroll{
					height: 4rem;
					width: 100%;
					/*background-color: rgba(0,0,0,0.8);*/
					background-image: url("../../../pcStatic/images/home/testImg5.jpg");
					background-repeat:no-repeat ;
					background-size:100% 100% ;
					overflow:hidden;
					margin-top:0.2rem ;
					.csModel{
						margin:0.2rem 2%;
						display: flex;
						background-color: rgba(0,0,0,0.4);
						width:96%;
						height: 3.6rem;					
						div{
							display: inline-block;
							float: left;
						}
						.cs-pre,.cs-next{
							width: 8%;
							line-height: 3.6rem;
							font-size: 0.8rem;
							color: #fff;
						}
						.allCont{
							align-self: center;
							width: 84%;
							overflow-x: scroll;
							overflow-y: hidden;
							&::-webkit-scrollbar { width: 0 !important }
							-ms-overflow-style: none;
							overflow: -moz-scrollbars-none;
							display: flex;
							align-items: center;
							/*padding-left: 0.3rem;*/
						.csCont{
							min-width:25rem;
							margin-top: 0.3rem;
							.cscItem{
								width: 2.5rem;
								.cscItemImg{
									width:2rem;
									height: 2rem;
									border-radius:6px ;
								}
							}
						}
						}

						
					}
				}			
			}
			/*加盟*/
			.joinUsCont{
				width: 100%;;
				.ctt-threeTitle{
					text-align: center;
					width: 100%;
					color: $originColor;
					padding: 0.2rem 0 0.4rem 0;
				}				
				.ctt-two{
					.abSrcCont{
						width: calc(100%/3);
						display: inline-block;
						padding:0.3rem;
						div{
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 0.22rem;
						.abSrcContImg{
							margin: 0 auto;
							width:0.6rem;
							height:0.6rem;
						}
						.dectOne{
							font-weight: 700;
							
						}
						.dectTwo{
							max-width: 4rem;
						}
						}
					}
				}				
			}		
/*联系我们*/
			.findUs{
				width: 100%;
				margin-top: 0.2rem;
				color: #fff;
				.findUsCont{
					position: relative;
					.abSrcContImg{
						height: 4rem;
					}
					.fuTrueCont{
						position: absolute;
						top: 0;
						display: flex;
						margin:0.2rem 2%;
						background-color: rgba(0,0,0,0.4);
						width:96%;
						height: 3.6rem;
						.ftc-left{
							flex: 3;
							padding: 0.4rem;
							.ftcl-title{
								padding-bottom:0.4rem ;
							}
							.ftcl-cont{
								font-size: 0.34rem;
								.ftclc-item{
									margin-bottom: 0.08rem;
									display: flex;
									.ftcrc-Img{
										width: .5rem;
										height: .5rem;
									}
								}
							}
						}
						.ftc-right{
							flex: 1;
							align-self: flex-end;
							display: flex;
							justify-content: flex-end;
							padding-right: 0.2rem;
							padding-bottom: 0.5rem;
							.ftcrImg{
								width: 2rem;
								height: 2rem;
							}
						}
					}
				}				
							
			}			
				
			
		}
		
		/*当季精选*/
		.ct-detail{
			.detailFire_cont {
				.df_cell {
					background-color: #fff;
					.df_header {
						height: 1rem;
						padding-left: 0.4rem;
						display: flex;
						align-items: center;
						justify-content: center;
						.dfh_img {
							width: 0.6rem;
							height: 0.6rem;
						}
						.dfh_title {
							display: inline-block;
							padding-left: .1rem;
							font-size: 0.4rem;
							color: rgb(254, 122, 16);
						}
						.dfh_title2 {
							display: inline-block;
							color: $originColor;
						}
					}
					.df_body {
						display: flex;
						flex-wrap: wrap;
						.dfb_item {
							width: calc(100% / 3);
							display: inline-block;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							color: #FDA544;
							padding: 0.2rem;
							@include box-sizing;
							.dfb_img {
								width: 2.4rem;
								height: 2.4rem;
								border-radius: 8px;
								padding-bottom: 0.1rem;
							}
							.dfb_name,
							.dfb_price {
								font-size: 0.3rem;
							}
						}
					}
				}
			}
		}
		

		
		
		
	}
</style>