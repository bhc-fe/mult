<template>
	<!--有调生活-->
	<div class="lifeDiv" v-if="lifeList.length>0">
		<div class="title"> 
			<span>有调生活</span>
			<div class="other">
				<a v-for="item in relaList" :href="item.furl" :title="item.title" target="_blank"></a>
			</div>
		</div>
		<div class="life-main clearfix big-obj"> 
			<div class="life-box" v-for="item in lifeList" >
				<div class="img-box">
					<a :href="item.furl" :title="item.title" target="_blank"><img v-lazy="item.rurl" width="386" height="260"></a>
				</div>
				<div class="desc-box">
					<a :href="item.furl" :title="item.title" target="_blank" class="title-box ellipsis"></a>
					<a :href="item.furl" :title="item.title" target="_blank" class="brief-box ellipsis"></a>
					<p class="price-box"><i>元/</i>起</p>
				</div>
			</div> 
		</div>
	</div>
</template>

<script>
	import indexApi from '@/api/indexApi'
	import commonImg from '@/util/commonImg'
	export default {
		name: 'moduleLife',
		data() {
			return {
				relaNum: 6,
				initNum: 3,
				relaList: {},
				lifeList: {}
			}
		},
		created() {
			var _this = this;
			indexApi.ad(140,(res) => {
				let data = typeof(res) === 'string' ? JSON.parse(res) : res;
				if(data.code == 200) {
					if(data.data.grps[0] && data.data.grps[0].ads){
						_this.relaList = data.data.grps[0].ads.slice(0, _this.relaNum);
					}
				}
			});
			indexApi.ad(141,(res) => {
				let data = typeof(res) === 'string' ? JSON.parse(res) : res;
				if(data.code == 200) {
					if(data.data.grps[0] && data.data.grps[0].ads){
						_this.lifeList = data.data.grps[0].ads.slice(0, _this.initNum);
						_this.lifeList.map(function(item, index) {
							if(item.titleName != undefined) {
								return;
							}
							let arr = item.title.split("|");
							item.titleName = arr[0];
							item.brief = arr[1];
							item.price = arr[2];
							if((typeof item.rurl) != "object") {
								item.rurl = {
									src: item.rurl,
									error: commonImg.state.placeholderImgThree,
									loading: commonImg.state.placeholderImgThree
								}
							}
						}); 
					}
				}
			});
		},
		methods: {}
	}
</script>

<style lang="less" scoped>
@hoverColor:#f75964;
.lifeDiv{
	width: 1200px;
	margin:auto;
	padding-bottom:24px;
	/*内容*/
	.life-main{
		.life-box{
			float: left;
			width:386px;
			height:380px;
			background-color:#fff;
			margin-right:20px;
			&:last-child{
				margin-right:0px;	
			}
			.img-box{
				height:260px;
				overflow: hidden;
			}
			.desc-box{
				padding:18px 20px 0;
				.title-box{
					display:inline-block;
					float: left;
					width:100%;
					font-size:16px;
					line-height: 28px;
					color:#333333;
					&:hover{
						color:@hoverColor;
					}
				}
				.brief-box{
					display:inline-block;
					float: left;
					width:100%;
					font-size:12px;
					line-height: 24px;
					color:#999999;
					&:hover{
						color:@hoverColor;
					}
				}
				.price-box{
					float: left;
					color:#f75964;
					font-size:12px;
					line-height: 30px;
					i{
						font-size:18px;
					}
				}
			}
		}	
	}
	/*标题*/
	.title{
		padding-left:36px;
		height:56px;
		font-size:24px;
		line-height:56px;
		color:#b8a177;
		background:url(../assets/ydsh_icon.png) no-repeat left center;
		overflow: hidden;
		
		span{
			font-weight: 600;
		}
		.other{
			float:right;
			height:100%;
			a{
				font-size:14px;
				color:#666;
				margin-left:30px;
				&:hover{
					color:@hoverColor;
				}
				&:first-child{
					margin-left:0px;
				}
			}
		}
	}
	
}
</style>