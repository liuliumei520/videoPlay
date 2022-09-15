<template>
	<view class="content">
		<!-- 轮播图组件 -->
		<IndexSwiper :swiperList="swiperList"></IndexSwiper>
		
		<!-- 分类 -->
		<IconsList :iconsList="iconsList"></IconsList>
		
		
		<!-- 精品推荐 -->
		<Recommendation :videoList="videoList"></Recommendation>
		
		
		<view class="">
			11111111
		</view>
		

	</view>


</template>

<script>
	// 轮播图
	import IndexSwiper from "../../components/index/indexSwiper/indexSwiper.vue"

	// 分类
	import IconsList from '../../components/index/iconsList/iconsList.vue'
	
	// 精品推荐
	import Recommendation from '../../components/index/recommendation/recommendation.vue'

	export default {
		data() {
			return {
				title: 'Hello',
				swiperList: [
					{
					imgUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.ZFeZmWytRtwrRsuEXhSTUAHaEo?pid=ImgDet&rs=1'
				}, {
					imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.228fbe0c9c680ed08c4883c7512d72a9?rik=fFasZYpTPD0stg&riu=http%3a%2f%2fimg3.redocn.com%2ftupian%2f20150628%2fliangzhikongqueyouhua_4458140.jpg&ehk=qtlKtFKQIFwh3UmyhnMs7Msmsc%2bqo5%2fNLl4BWfOV5lA%3d&risl=&pid=ImgRaw&r=0'
				}, {
					imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.d4f5ad59632b19301384cf04cd378493?rik=EpxrTR0V2XY%2bXQ&riu=http%3a%2f%2fimage2.sina.com.cn%2fedu%2fupload%2f41%2f156%2f20060914%2f1692%2f338560%2f338560.jpg&ehk=1K5AUpOOWcrm7Ldq2qASjEnj848YcIy3cxmaytk9PLs%3d&risl=&pid=ImgRaw&r=0'
				}, ],
				
				
				iconsList : [
					{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},{
						imgUrl : "https://img95.699pic.com/element/40146/8519.png_860.png",
						name : "好运达搭"
					},
				],
				
				
				videoList : [
					{
						imgUrl : "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZFeZmWytRtwrRsuEXhSTUAHaEo?pid=ImgDet&rs=1",
						name : "历史天空",
						uploadTime : "2022-09-15 15:30:00"
					},{
						imgUrl : "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZFeZmWytRtwrRsuEXhSTUAHaEo?pid=ImgDet&rs=1",
						name : "历史天空",
						uploadTime : "2022-09-15 15:30:00"
					},{
						imgUrl : "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZFeZmWytRtwrRsuEXhSTUAHaEo?pid=ImgDet&rs=1",
						name : "历史天空",
						uploadTime : "2022-09-15 15:30:00"
					},
				]
			}
		},
		components: {
			IndexSwiper,IconsList,Recommendation
		},
		onLoad() {

		},
		methods: {
			
			// 点击搜索框进入到搜索页面
			onNavigationBarSearchInputChanged(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			
			onNavigationBarButtonTap(e){
				// console.log(e);
				
				if(e.float == "right"){
					uni.navigateTo({
						url:"/pages/videoReleased/videoReleased"
					})
					
					
				}
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
</style>
