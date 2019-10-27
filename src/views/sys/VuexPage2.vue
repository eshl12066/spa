<template>
	<div>
		<h3>第二个Vuex界面:{{title}}</h3>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title:''
			};
		},
		created(){
			this.title = this.$store.state.resturantName;
		}
	}
</script>
<style>
</style>
