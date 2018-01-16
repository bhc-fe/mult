function ConfigUrl(){
	// dev
	const DEV_PREFIX_URL = {
		API_URL:"http://localhost:8080"
	}
	// uat环境
	const UAT_PREFIX_URL = {
		API_URL:"http://lf.atguat.com.cn",			//广告位   
	}

	// live环境
	const LIVE_PREFIX_URL = {
		API_URL:"http://lf.gome.com.cn",			//广告位
	}
	
	// 后缀
	const Suffix_URL = {
		AD_URL:"/v1/url/",
	}
	
	this.ApiUrl = null;
	this.getApiUrl = function(){
		const path = window.location.href;
		return this.ApiUrl === null ? ( path.indexOf('uat') !== -1 ? Object.assign(Suffix_URL,UAT_PREFIX_URL) : path.indexOf('gome') !== -1? Object.assign(Suffix_URL,LIVE_PREFIX_URL):Object.assign(Suffix_URL,DEV_PREFIX_URL)) : this.configUrl;
	}
}

export default new ConfigUrl();
