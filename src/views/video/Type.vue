<template>
	<div id="type">
		<el-container>	
			<Nav></Nav>
		<el-main>
			<el-card class="type">
				<el-row>
					<el-col :span="2"><el-tag>类型</el-tag></el-col>
					<el-col :span="2"><el-link>全部</el-link></el-col>
					<el-col :span="2" v-for="item in type.item.type">
						<el-link type="primary">{{ item }}</el-link>
					</el-col>
				</el-row>
				<el-divider></el-divider>
				<el-row>
					<el-col :span="2"><el-tag type="success">地区</el-tag></el-col>
					<el-col :span="2"><el-link>全部</el-link></el-col>
					<el-col :span="2" v-for="item in type.item.address">
						<el-link type="success">{{ item }}</el-link>
					</el-col>
				</el-row>
				<el-divider></el-divider>
				<el-row>
					<el-col :span="2"><el-tag type="danger">年代</el-tag></el-col>
					<el-col :span="2"><el-link>全部</el-link></el-col>
					<el-col :span="2" v-for="item in type.item.date">
						<el-link type="danger">{{ item }}</el-link>
					</el-col>
				</el-row>
			</el-card>
			<br>
			<VideoList :data="video" title="影视列表" titleType="success"></VideoList>
		</el-main>
		<el-footer><Footer></Footer></el-footer>
		</el-container>
	</div>
</template>

<script>
import Nav from '@/components/nav.vue';
//影视列表
import VideoList from '@/components/videoList.vue';
//底部信息
import Footer from '@/components/footer.vue';
export default {
	components: {
		Nav,
		VideoList,Footer
	},
	data() {
		return {
			type: '',
			video: ''
		};
	},
	created() {
		let _this = this;
		_this
			.$axios({
				method: 'get',
				url: '/data/item.json'
			})
			.then(msg => {
				_this.type = msg.data.video;
				console.log(msg.data.video);
			});
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
#type {
	.type {
		width: 1200px;
		height: auto;
		margin: 0 auto;
		margin-top: 80px;
	}
}
</style>
