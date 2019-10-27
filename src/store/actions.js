export default{
	setResturantNameAsync: (context, payload) => {
		console.log('aaaa');
		setTimeout(()=>{
			console.log('bbbb');
			//state.resturantName = payload.resturantName;
			context.commit('setResturantName', payload); //Action提交的是mutation
		},4000);
		console.log('cccc');
	},
	//vuex是不能使用Vue实例的
	doAjax: (context, payload) => {
		let _this = payload._this;
		let url = _this.axios.urls.SYSTEM_USER_DOLOGIN;
		_this.axios.post(url, {}).then((response)=> {
			console.log('doAjax,,,,');
			console.log(response);
		}).catch(function(error) {
			console.log(error);
		});
	}
}