<template>
	<div id="banner">
		<el-carousel  height='400px'>
			<el-carousel-item v-for="item in banner" :key='item' >
				<el-image :src='item.picture' :alt='item.title' fit='scale-down'></el-image>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				banner:''
			}
		},
		created() {
			var _this = this;
			this.$axios({
				method:"get",
				url:"/data/banner.json",
			}).then(msg=>{
				_this.banner = msg.data;
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	.el-carousel{
		width: 1200px;
		margin: 0 auto;
		border-radius: 0.4125rem;
		.el-carousel-item{
			border-radius: 0.4125rem;
			.el-image{
				width: 100%;
				height: 100%;
				border-radius: 0.4125rem;
			}	
		}
		
	}
</style>
