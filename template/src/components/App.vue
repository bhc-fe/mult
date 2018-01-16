<template>
	<div id="app">
		<!--引入组件-->
		<moduleNav></moduleNav>
		<moduleLife></moduleLife>
	</div>
</template>

<script>
	/*引入组件*/
	import moduleNav from './moduleNav'
	import moduleLife from './moduleLife'

	export default {
		name: 'app',
		components: {
			/*引入组件*/
			moduleNav,
			moduleLife
		}
	}
	/*改变头部图标和跳转地址*/
	$('.gome-foot-slogan a').attr("href", 'http://lf.gome.com.cn/');
	$('.gome-foot-slogan img').attr('src', '//gfs6.gomein.net.cn/T1kZh_BKVT1RCvBVdK');
	
</script>
<style>
	/*引入公共样式*/
	@import '../assets/base.css';
</style>