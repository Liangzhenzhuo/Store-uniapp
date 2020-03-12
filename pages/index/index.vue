<template>
	<view class="page">
		<nav-bar title="什么垃圾商城"></nav-bar>
		<tabbar @tabClick="tabClick" ref="tabbar"></tabbar>
		<view class="page-wrap">
			<view class="search-bar">
				<!-- 搜索图标 -->
				<uni-icons type="search"></uni-icons>
				<input class="search-bar-text" type="text" :value.trim="searchText" placeholder="搜索" placeholder-class="search-bar-text-placeholder"
				 maxlength="25" />
			</view>
			<swiper :current="currentSwiperIndex" duration="200" class="swiper" circular previous-margin="45rpx" next-margin="45rpx"
			 v-if="swiperList">
				<swiper-item v-for="row in swiperList" @tap="swiperTap(row.id)" :key="row.id">
					<view class="swiper-item" :class="'swiper-item-' + row.style">
						<view class="swiper-item-pic">
							<image :src="row.pic" mode="aspectFill"></image>
						</view>
						<view class="swiper-item-right">
							<view class="swiper-item-right-title">
								{{row.title}}
							</view>
							<view class="swiper-item-right-content">
								{{row.content}}
							</view>
							<button type="default" class="swiper-item-right-button" @tap.stop="swiperTap(row.id, 'buy')">立即购买</button>
						</view>
					</view>
				</swiper-item>
			</swiper>

			<view class="category">
				<view class="category-item" v-for="(item, index) in categoriesList" :key="index">
					<view class="category-item-pic">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="category-item-title">
						{{item.title}}
					</view>
				</view>
			</view>

			<thematic-swiper title="最受欢迎" :swiperList="mostPopularList | arrayChunk" @moreClick="thematicMoreClick" @itemClick="thematicItemClick"></thematic-swiper>

			<thematic-swiper title="发现" moreText="更多" :swiperList="discoverList | arrayChunk" @moreClick="thematicMoreClick"
			 @itemClick="thematicItemClick"></thematic-swiper>

		</view>
	</view>
</template>

<script>
	import thematicSwiper from './components/thematic-swiper.vue'
	import navBar from '@/components/nav-bar/nav-bar.nvue'
	import {
		chunk,
		loadding,
		hideLoadding,
		msg
	} from '@/common/util.js'
	import {
		uniIcons
	} from '@/components/uni'

	export default {
		components: {
			navBar,
			thematicSwiper,
			uniIcons
		},
		data() {
			return {
				searchText: '',
				currentSwiperIndex: 0,
				swiperList: [],
				mostPopularList: [],
				discoverList: [],
				categoriesList: [{
						'title': '数码3C',
						'pic': '/static/images/category/mobiles.png'
					},
					{
						'title': '全球购',
						'pic': '/static/images/category/earth.png'
					},
					{
						'title': '时尚',
						'pic': '/static/images/category/fashion.png'
					},
					{
						'title': '家电',
						'pic': '/static/images/category/jiadian.png'
					},
				]
			}
		},
		filters: {
			arrayChunk(arr) {
				return chunk(arr, 3)
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			async init() {
				loadding()
				let swiper, popular, discover
				try {
					swiper = await this.$http.post('/getSwiper'),
					popular = await this.$http.post('/getPopular'),
					discover = await this.$http.post('/getDiscover')
					this.swiperList = swiper.data
					this.mostPopularList = popular.data
					this.discoverList = discover.data
					hideLoadding()
				}
				catch(err) {
					msg({ title: err.message })
					hideLoadding()
				}
			},
			swiperTap(id, type) {
				if (type === 'buy') {
					uni.showToast({
						title: 'buy' + id.toString()
					});
				} else {
					uni.showToast({
						title: id.toString()
					});
				}
			},
			thematicMoreClick(event) {
				uni.navigateTo({
					url: '/pages/goods/goods?type=' + event.title
				})
			},
			thematicItemClick(event) {
				console.log(event);
			},
			tabClick(event) {
				console.log(event);
				const path = event.path,
							currPagePath = '/' + this.$route.meta.pagePath
				if (path === currPagePath) return
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss">
	.page {
		background-color: #f9f9ff;

		&-wrap {
			padding: 30rpx 60rpx 108rpx 60rpx;
		}

		.search-bar {
			margin-bottom: 60rpx;
			padding: 0 20rpx 0 40rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			height: 60rpx;
			border: solid 1px #e0e0e0;
			border-radius: 100px;
			box-sizing: border-box;

			&-text {
				flex: 1;
				padding-left: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				letter-spacing: 0.4rpx;

				&-placeholder {
					color: #D2D2D5;
				}
			}
		}

		.swiper {
			margin-bottom: 60rpx;
			width: 750rpx;
			transform: translateX(-60rpx);

			&-item {
				margin: 0 20rpx;
				padding: 0 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				width: 630rpx;
				height: 260rpx;
				border-radius: 14rpx;
				box-sizing: border-box;
				overflow: hidden;

				&-red {
					background-color: #FA5E5E;
				}

				&-blue {
					background-color: #5E5FFA;
					// box-shadow: 1px 12px 15px rgba(160,143,255,0.3)
				}

				&-oringe {
					background-color: #FA995E;
				}

				&-pic {
					width: 196rpx;
					height: 196rpx;
					border-radius: 50%;

					image {
						width: 196rpx;
						height: 196rpx;
						border-radius: 50%;
					}
				}

				&-right {
					height: 85%;
					width: 320rpx;
					margin-left: 40rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					&-title {
						margin-bottom: 14rpx;
						// height: 46rpx;
						color: #ffffff;
						font-size: 34rpx;
						font-weight: 400;
						line-height: 36rpx;
					}

					&-content {
						color: #ffffff;
						font-size: 20rpx;
						font-weight: 400;
						line-height: 28rpx;
						margin-bottom: 24rpx;
					}

					&-button {
						margin-left: initial;
						padding: 0 14rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-shrink: 0;
						width: 156rpx;
						height: 52rpx;
						color: #ffffff;
						font-size: 24rpx;
						font-weight: 400;
						line-height: 28rpx;
						background: none;
						border: 1px solid #FFF;
						box-sizing: initial;
						border-radius: 100px;

						&::after {
							content: none;
						}
					}
				}
			}
		}

		.category {
			margin-bottom: 70rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			&-item {
				&-pic {
					margin-bottom: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100rpx;
					height: 100rpx;
					background: rgba(94, 95, 250, 0.1);
					border-radius: 50%;

					image {
						width: 42rpx;
						height: 42rpx;
					}
				}

				&-title {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					font-weight: 400;
					color: #0a0157;
				}
			}
		}
	}
</style>
