<template>
	<view class="icons">
		
		<view class="icons-item" v-for="(item,index) in iconsList" :key="index">
			<image class="icons-img" :src="item.imgUrl" mode=""></image>
			<text class="icons-name">{{item.name}}</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		name:"iconsList",
		props: {
			iconsList: Array
		},
		
	}
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
		margin-top: 15rpx;
	}
	.icons-item{
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 30rpx;
	}
	.icons-img{
		width: 90rpx;
		height: 90rpx;
	}
	.icons-name{
		color: #4f4a50;
		font-size: 20rpx;
		margin-top: 10rpx;
	}
</style>
