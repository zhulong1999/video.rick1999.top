<template>
	<div class="home">
		<el-container>
			<Nav></Nav>
			<div class="span"></div>
			<Banner></Banner>
			<div class="span"></div>
			<el-main><VideoList></VideoList></el-main>
			<el-footer>
			</el-footer>
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
export default {
	components: {
		Nav,
		Banner,
		VideoList
	}
};
</script>
<style scoped="scoped" lang="less">
.span {
	width: 100%;
	height: 20px;
}
</style>
