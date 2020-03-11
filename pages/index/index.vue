<template>
	<view class="page">
		<uni-nav-bar title="hubjoy" fixed status-bar :shadow="false" :border="false" color="#0A0157" leftIcon="bars"></uni-nav-bar>
		<view class="page-wrap">
			<view class="search-bar">
				<svg width="16px" height="16px" viewBox="0 0 14 14" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
					<desc>Created with Lunacy</desc>
					<g id="Bars/Search-Bar/_Resources/Search-Glyph">
						<path d="M9.91009 8.73956L13.7431 12.5741C13.9605 12.7809 14.0487 13.0894 13.9735 13.3799C13.8983 13.6704 13.6716 13.8973 13.3811 13.9728C13.0907 14.0482 12.7821 13.9603 12.5751 13.7431L8.74559 9.91156L8.74159 9.91456C7.80387 10.6088 6.6668 10.9811 5.50009 10.9761C2.4667 10.9585 0.0132044 8.50148 9.46502e-05 5.46806C-0.00846493 4.01655 0.563845 2.6219 1.58953 1.59481C2.61522 0.567712 4.00907 -0.00651157 5.46059 5.57178e-05C8.49372 0.0175744 10.947 2.47441 10.9601 5.50756C10.9652 6.66953 10.5972 7.80246 9.91009 8.73956ZM1.09609 5.47206C1.10675 7.89866 3.06951 9.8641 5.4961 9.87805C6.65716 9.88288 7.77197 9.42333 8.59236 8.60172C9.41276 7.7801 9.87064 6.66461 9.86409 5.50356C9.85344 3.07695 7.89068 1.11151 5.46409 1.09756C4.30303 1.09273 3.18822 1.55228 2.36783 2.37389C1.54743 3.19551 1.08955 4.311 1.09609 5.47206Z"
						 id="Search" fill="#D2D2D5" fill-rule="evenodd" stroke="none" />
					</g>
				</svg>
				<input class="search-bar-text" type="text" :value.trim="searchText" placeholder="Search" placeholder-class="search-bar-text-placeholder"
				 maxlength="25" />
			</view>
			<swiper :current="currentSwiperIndex" duration="200" class="swiper" circular previous-margin="45rpx" next-margin="45rpx">
				<swiper-item v-for="row in swiperList" @tap="swiperTap(row.id)" :key="row.id">
					<view class="swiper-item" :class="`swiper-item-${row.style}`">
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
							<button type="default" class="swiper-item-right-button" @tap.stop="swiperTap(row.id, 'buy')">Buy now</button>
						</view>
					</view>
				</swiper-item>
			</swiper>
			
			<view class="popular">
				<view class="popular-title">
					<view class="popular-title-text">
						最受欢迎
					</view>
					<view class="popular-title-more">
						查看所有
						<uni-icons type="forward" color="#FA995E"></uni-icons>
					</view>
				</view>
				<view class="popular-list">
					<view class="popular-list-item" v-for="(row, index) in mostPopularList" :key="index">
						<image :src="row.pic" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniNavBar,
			uniIcons
		},
		data() {
			return {
				searchText: '',
				currentSwiperIndex: 0,
				swiperList: [{
						title: 'Nike React Vision',
						content: 'Nike React Vision 男子运动鞋演绎非凡舒适体验',
						id: 1,
						style: 'oringe',
						pic: '/static/images/goods/Nike React Vision/Nike React Vision 1.jpg'
					},
					{
						title: 'Nike NSW React Vision',
						content: '灵感来源于墨西哥民间艺术神话人物',
						id: 2,
						style: 'blue',
						pic: '/static/images/goods/Nike NSW React Vision/Nike NSW React Vision 1.jpg'
					},
					{
						title: 'Jumpman Diamond Low PF',
						content: '汀克·哈特菲尔德亲自设计',
						id: 3,
						style: 'red',
						pic: '/static/images/goods/Jumpman Diamond Low PF/Jumpman Diamond Low PF 1.jpg'
					}
				],
				mostPopularList: [
					{
						pic: '/static/images/most-popular/1.png'
					},
					{
						pic: '/static/images/most-popular/2.png'
					},
					{
						pic: '/static/images/most-popular/3.png'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			swiperTap(id, type) {
				if (type === 'buy') {
					uni.showToast({ title: 'buy' + id.toString() });
				}else {
					uni.showToast({ title: id.toString() });
				}
			}
		}
	}
</script>

<style lang="scss">
	.page {
		&-wrap {
			padding: 30rpx 60rpx;
		}

		.search-bar {
			margin-bottom: 60rpx;
			padding: 0 20rpx 0 40rpx;
			display: flex;
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
					margin-left: 40rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					&-title {
						margin-bottom: 14rpx;
						height: 46rpx;
						color: #ffffff;
						white-space: nowrap;
						font-size: 34rpx;
						font-weight: 400;
						line-height: 46rpx;
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
		
		.popular {
			width: 100%;
			height: 262rpx;
			display: flex;
			flex-direction: column;
			
			
			&-title {
				margin-bottom: 40rpx;
				height: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				&-text {
					font-size: 32rpx;
					font-weight: 400;
				}
				
				&-more {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32rpx;
					font-weight: 400;
					color: #FA995E;
				}
			}
			
			&-list {
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				&-item {
					background-color: #fdfdfd;
					border: 1px solid #d8d8d8;
					width: 180rpx;
					height: 180rpx;
					border-radius: 14rpx;
					
					image {
						width: 100%;
						height: 100%;
						border-radius: 14rpx;
					}
				}
			}
		}
	}
</style>
