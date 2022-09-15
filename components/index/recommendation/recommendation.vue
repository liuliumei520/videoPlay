<template>

	<view class="recommendation">

		<view class="rec-item">
			<text class="recommen">精品推荐</text>
			<text class="more">查看更多 ></text>
		</view>



		<!-- 视频专区 -->
		<view class="videoPlay">
			<scroll-view scroll-x="true" :scroll-into-view="scrollIntoIndex" class="scroll-content">
				<view class="scroll-item" v-for="(item,index) in videoList" :key="index" @tap='changeTab(index)'>

					<view class="scroll-list">
						<view class="scroll-img">
							<image class="videoImg" :src="item.imgUrl" mode=""></image>
						</view>

						<view class="scroll-cont">
							<text class="scroll-name">{{item.name}}</text>
							<text class="uploadTime">{{item.uploadTime}}</text>
						</view>

					</view>
				</view>
			</scroll-view>
		</view>


	</view>

</template>

<script>
	export default {
		name: "recommendation",
		data() {
			return {
				// 顶部跟随的索引id值
				scrollIntoIndex: 'top0',

			};
		},
		props: {
			videoList: Array
		}
	}
</script>

<style scoped>
	.recommendation {
		width: 100%;
		background-color: #fff;
		margin: 30rpx 0;
	}

	.rec-item {
		padding: 10rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.recommen {
		font-weight: bold;
	}

	.more {
		color: #b0b0b0;
	}

	.videoPlay {
		width: 100%;
		padding-left: 30rpx;
		padding-top: 20rpx;
	}

	.scroll-content {
		width: 100%;
		/* height: 80rpx; */
		white-space: nowrap;
	}


	.scroll-item {
		display: inline-block;
		margin-right: 15rpx;
	}

	.scroll-list {
		width: 100%;
		/* padding-left: 20rpx;
		padding-top: 10rpx; */

		display: inline-block;

	}


	.scroll-img {
		width: 550rpx;
		height: 350rpx;
		border-radius: 15rpx;
		overflow: hidden;

	}

	.videoImg {
		width: 100%;
		height: 100%;
		position: relative;
	}


	.scroll-cont {
		display: flex;
		flex-direction: column;
		color: #fff;
		position: absolute;
		bottom: 20rpx;
		left: 40rpx;
		font-weight: 600;
	}
</style>
