import ConfigUrl from '@/util/configUrl'
const apiUrl = ConfigUrl.getApiUrl();

export default {
	/*广告位*/
	ad(id,cb){
	  	$.get(`${apiUrl.API_URL}${apiUrl.AD_URL}?boxid=${id}`, function(res){
			cb(res)
		});
	}
}