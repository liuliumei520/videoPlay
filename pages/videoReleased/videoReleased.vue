<template>
	<view>
		<view class="">
			<Uploading @click="chooseImage"></Uploading>
		</view>  
	</view>
</template>

<script>
	import Uploading from '../../components/index/uploading/uploading.vue'
	export default {
		data() {
			return {

			}
		},

		components: {
			Uploading,
		},
		methods: {
			//手机真机操作测试才能调用摄像头，相册图片，网页上只能选择图片
			chooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择、摄像头
					success: function(res) {
						console.log(res);
					}
				});
			}
		}
	}
</script>

<style>

</style>
