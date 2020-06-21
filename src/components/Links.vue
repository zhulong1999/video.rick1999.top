<template>
	<el-card id="Links">
		<el-row class="links_title">
			<el-col :span="2">
				<el-tag  size="small" hit effect="plain">友情链接</el-tag>
			</el-col>
		</el-row>
		<el-row class="links_info">
			<el-col :span="3" v-for="item in links" :key='item'>
				<el-link type='primary' :href='item.link'>{{item.title}}</el-link>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
	export default
	{
		data(){
			return{
				links:""
			}
		},
		created() {
			let _this = this;
			_this.$axios({
				method:"get",
				url:"/data/links.json"
			}).then(msg=>{
				_this.links = msg.data;
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	#Links{
		width: 1200px;
		margin: 0 auto;
		text-align: center;
		background: #fff;
		border-radius: 10px;
		.links_title{
			padding-top: 10px;
			padding-bottom: 10px;	
		}
	
		.links_info{
			padding-bottom: 10px;
		}
	}
</style>
