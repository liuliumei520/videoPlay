<template>
	<view>
		<yy-video-player 
		  :auto-play="false" 
		  :url="url"  
		  :poster="poster" 
		  :danmu-list="danmuList" 
		  :show-back-btn="true"
		  :show-download-btn="true"
		></yy-video-player>
		
	</view>
</template>

<script>
	import yyVideoPlayer from '../../components/yy-video-player/yy-video-player.nvue';
	export default {
		data() {
			return {
				url : "https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4",
				poster : "https://tse2-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?pid=ImgDet&rs=1",	
				danmuList : [111,222]
			}
		},
		components: {
		    yyVideoPlayer
		}, 
		methods: {
			
		}
	}
</script>

<style>

</style>
