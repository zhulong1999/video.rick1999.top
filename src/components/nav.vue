<template>
	<div id="nav">
		<el-header>
			<el-menu :default-active="active" mode="horizontal" active-text-color="#CD7FC2" router>
				<el-menu-item class="logo">
					<i class="el-icon-video-camera-solid"></i>
					烛龙影视
				</el-menu-item>
				<el-menu-item index="/">首页</el-menu-item>
				<el-menu-item index="/type">{{ video.name }}</el-menu-item>
				<el-menu-item index="type">{{ TV.name }}</el-menu-item>
				<el-menu-item index="type">{{ DM.name }}</el-menu-item>
				<el-menu-item index="type">{{ ZY.name }}</el-menu-item>
				<el-menu-item index="2">求片</el-menu-item>
				<el-menu-item index="7">
					<el-input v-model="input" placeholder="请输入.." size="medium"><el-button slot="append" icon="el-icon-search" size="medium"></el-button></el-input>
				</el-menu-item>
				<el-menu-item>您好!请先登录</el-menu-item>
				<el-menu-item @click="download_app">APP下载</el-menu-item>
			</el-menu>
		</el-header>
	</div>
</template>
<style scoped="scoped" lang="less">
#nav {
	width: 100%;
	height: auto;
	position: fixed;
	z-index: 999;
	top: 0;
}
.logo {
	background-image: -webkit-linear-gradient(bottom, #feac5e, #c779d0, #4bc0c8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.el-header {
	background: #ffffff;
	// box-shadow: 1px 1px 3px  black;
}
.el-menu {
	width: 1200px;
	margin: 0 auto;
}
</style>
<script>
export default {
	data() {
		return {
			input: '',
			// 电影分类
			video: '',
			// 电视剧分类
			TV: '',
			// 动漫
			DM: '',
			//综艺
			ZY: '',
			active: ''
		};
	},
	methods: {
		download_app() {
			this.$message({
				showClose: true,
				message: '敬请期待！！(●ˇ∀ˇ●)',
				type: 'warning'
			});
		}
	},
	created() {
		let _this = this;
		let router = _this.$route.path;
		_this.active = router;
		this.$axios({
			method: 'get',
			url: '/data/item.json'
		}).then(msg => {
			_this.video = msg.data.video;
			_this.TV = msg.data.TV;
			_this.DM = msg.data.DM;
			_this.ZY = msg.data.ZY;
		});
	}
};
</script>
