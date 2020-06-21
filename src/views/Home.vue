<template>
	<div class="home">
		<el-container>
			<Nav></Nav>
			<Banner class="banner"></Banner>
			<el-main>
				<VideoList :data="video" title="影院热映" titleType="danger"></VideoList>
				<br />
				<VideoList :data="video" title="最新视频" titleType="success"></VideoList>
				<br />
				<Links class="links"></Links>
			</el-main>
			<el-footer><Footer></Footer></el-footer>
		</el-container>
	</div>
</template>

<style scoped="scoped" lang="less"></style>
<script>
// 导航
import Nav from '@/components/nav.vue';
//banner
import Banner from '@/components/banner.vue';
//影视列表
import VideoList from '@/components/videoList.vue';
//友情链接
import Links from '@/components/Links.vue';
//底部信息
import Footer from '@/components/footer.vue';
export default {
	components: {
		Nav,
		Banner,
		VideoList,
		Links,
		Footer
	},
	data() {
		return {
			video: ''
		};
	},
	created() {
		let _this = this;
		_this
			.$axios({
				method: 'get',
				url: '/data/video_list.json'
			})
			.then(msg => {
				_this.video = msg.data;
			});
	}
};
</script>
<style scoped="scoped" lang="less">
.banner {
	margin-top: 80px;
	margin-bottom: 20px;
}
.links {
	margin-top: 20px;
}
</style>
