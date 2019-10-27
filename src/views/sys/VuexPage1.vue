<template>
	<div>
		<h3>第一个Vuex界面:{{title}}</h3>
		<button @click="changgeTitle">餐馆易主</button>
		<button @click="changgeTitleAsync">四秒后餐馆易主</button>
		<button @click="doAjax">测试Vue中使用ajax</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			changgeTitle(){
				this.$store.commit('setResturantName',{
					resturantName:'宋小宝牛肉馆'
				});
			},
			changgeTitleAsync(){
				this.$store.dispatch('setResturantNameAsync',{
					resturantName:'曾大宝牛肉馆'
				});
			},
			doAjax(){
				this.$store.dispatch('doAjax',{
					_this:this
				});
			}
		},
		computed:{
			title(){
				//return this.$store.state.resturantName;
				return this.$store.getters.getResturantName;
			}
		}
	}
</script>
<style>
</style>
