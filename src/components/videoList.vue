<template>
	<div id="video_list">
		<!-- 标题 -->
		<el-row class="videoTitle">
			<el-col :span="2">
				<el-tag :type="titleType" size="small" hit effect="plain">{{ title }}</el-tag>
			</el-col>
			<el-col :span="2" push="20"><el-tag size="small">更多影视</el-tag></el-col>
		</el-row>
		<!-- 视频列表 -->
		<el-row :gutter="20">
			<el-col :span="4" v-for="item in data" :key="item" style="margin-top: 0.625rem;">
				<el-link href="www.baidu.com" :underline="false">
					<el-card>
						<el-badge :value="12" class="item" type="primary"><el-image :src="item.picture"></el-image></el-badge>
						<span class="video_title">{{ item.title }}</span>
						<span class="video_info">{{ item.info }}</span>
					</el-card>
				</el-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props: ['data', 'title', 'titleType']
};
</script>

<style scoped="scoped" lang="less">
#video_list {
	width: 1200px;
	margin: 0 auto;
	text-align: center;
	background: #ffff;
	border-radius: 10px;
	.videoTitle {
		padding-top: 10px;
	}
	.video_title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1; //显示内容的行数；    要显示几行数字为几即可！
		-webkit-box-orient: vertical;

		background-image: -webkit-linear-gradient(bottom, #feac5e, #c779d0, #4bc0c8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.video_info {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; //显示内容的行数；    要显示几行数字为几即可！
		-webkit-box-orient: vertical;
		color: #666;
	}
}
</style>
