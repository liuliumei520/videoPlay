export default{
	common : {
		baseUrl : "",
		data : {},
		header : {
			"Content-Type" : "application/json",
			"Content-Type" : "application/x-www-form-urlencoded"
		},
		method : "GET",
		dataType : "json"
	},
	request(options){
		
		uni.showLoading({
			title : "加载中"
		});
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		
		
		return new Promise((res,rej) => {
			uni.request({
				...options,
			
				success: (result) => {
					if(result.statusCode != 200){
						return rej();
					}
					let data = result.data.data;
					res(data);
					
					setTimeout(function(){
						uni.hideLoading()
					},2000);
				}
			})
		})
	}
}