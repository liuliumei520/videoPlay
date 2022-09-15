<template>
	<view class="uploading">
		<view class="uploading-item" @click="chooseImage">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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

<style scoped>
.uploading{
	width: 100%;
}
.uploading-item{
	width: 200rpx;
	height: 200rpx;
	background-color: #ccc;
	margin: 20rpx 10rpx 0 30rpx;
}
</style>
