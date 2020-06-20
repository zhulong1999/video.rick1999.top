<template>
	<div id="video_list">
		<el-row :gutter="20">
			<el-col :span="4" v-for="item in video" :key='item'>
				<el-image :src="item.picture"></el-image>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default
	{
		data(){
			return{
				video:''
			}
		},
		created() {
			let _this = this;
			_this.$axios({
				method:"get",
				url:"/data/video_list.json",
			}).then(msg=>{
				_this.video = msg.data;
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	#video_list{
		width:1100px;
		margin: 0 auto;
		text-align: center;
		background: #ffff;
		padding: 50px;
		border-radius: 10px;
	}
</style>
