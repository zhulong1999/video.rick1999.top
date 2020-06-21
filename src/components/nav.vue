<template>
	<div id="nav">
		<el-header>
			<el-menu :default-active="1"  mode="horizontal" >
				<el-menu-item >
					<i class="el-icon-video-camera-solid"></i>烛龙影视
				</el-menu-item>
				<el-menu-item index="1">首页</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						{{ video.name }}
					</template>
					<el-menu-item :index="1 + '-' + i" v-for="(item, i) in video.item" :key="item">{{ item.name }}</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						{{ TV.name }}
					</template>
					<el-menu-item :index="2 + '-' + i" v-for="(item, i) in TV.item" :key="item">{{ item.name }}</el-menu-item>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						{{ DM.name }}
					</template>
					<el-menu-item :index="3 + '-' + i" v-for="(item, i) in DM.item" :key="item">{{ item.name }}</el-menu-item>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title">
						{{ ZY.name }}
					</template>
					<el-menu-item :index="4 + '-' + i" v-for="(item, i) in TV.item" :key="item">{{ item.name }}</el-menu-item>
				</el-submenu>
				<el-menu-item index="6">求片</el-menu-item>
				<el-menu-item index="7">
					<el-input v-model="input" placeholder="请输入.." size="medium"><el-button slot="append" icon="el-icon-search" size="medium"></el-button></el-input>
				</el-menu-item>
				<el-menu-item index="8">您好!请先登录</el-menu-item>
				<el-menu-item :index="9" @click='download_app'>APP下载</el-menu-item>
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
			ZY: ''
		};
	},
	methods:{
		download_app(){
			this.$message({
				showClose: true,
				message:"敬请期待！！(●ˇ∀ˇ●)",
				type:"warning"
			})
		}
		
	},
	created() {
		console.log(123);
		let _this = this;
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
