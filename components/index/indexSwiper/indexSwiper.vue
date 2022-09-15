<template>
	<!-- 轮播图组件 -->
	<view class="swiper-page">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>

</template>
 
<script>
	export default {
		name: "indexSwiper",
		data() {
			return {

			};
		},
		props: {
			swiperList: Array
		}
	}
</script>

<style scoped>
	.swiper-page {
		width: 90%;
		margin: auto;
		border-radius: 30rpx;
		overflow: hidden;
	}

	swiper {
		width: 100%;
		margin: auto;
		height: 400rpx;
	}

	.swiper-img {
		width: 100%;
		height: 400rpx;
	}
</style>
