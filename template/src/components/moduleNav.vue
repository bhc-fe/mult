<template>
	<!--头部导航-->
	<div class="navDiv">
		<a href="http://lf.gome.com.cn" target="_blank" title="" class="logo">
			<img src="//gfs7.gomein.net.cn/T1XmCsB4CT1RCvBVdK" >
		</a>
		<ul class="nav-ul">
			<li class="nav-li active"><a href="http://lf.gome.com.cn" target="_blank" >首页</a></li>
			<li class="nav-li"><a href="http://wt.gome.com.cn/recharge/" target="_blank">充值缴费</a></li>
			<li class="nav-li"><a href="http://lvxing.gome.com.cn/" target="_blank">旅行</a></li>
			<li class="nav-li"><a href="http://piao.gome.com.cn" target="_blank">演出</a></li>
			<li class="nav-li"><a href="http://movie.gome.com.cn/" target="_blank">电影</a></li>
			<li class="nav-li"><a href="http://jiaoyu.gome.com.cn/" target="_blank">教育</a></li>
			<li class="nav-li"><a href="http://gamecard.gome.com.cn" target="_blank">游戏</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'moduleNav',
		data() {
			return {
			}
		},
		created() { 
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
@hoverColor:#f75964;
.navDiv{
	margin:auto;
	width: 1200px;
	height:110px;
	.logo{
		margin-top:28px;
		display:inline-block;
		width:280px;
		height:60px;
	}
	.nav-ul{
		float:right;
		margin-top:40px;
		.nav-li{
			float:left;
			margin-left:40px;
			&:first-child{
				margin-left:0;
			}
			&.active a{
				color:@hoverColor;
			}
			a{
				font-size:16px;
				line-height:32px;
				color:#333333;
				&:hover{
					color:@hoverColor;
				}
			}
			
		}
	}
}
</style>