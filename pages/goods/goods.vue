<template>
	<view>
		<tabbar @tabClick="tabClick"></tabbar>
		<nav-bar title="Nike" leftIcon="arrowleft" @clickLeft="back" :padding="40"></nav-bar>
		<view class="page-wrap">
			<view class="goods">
				<view class="goods-item" v-for="(item, index) in goodsList" :key="index">
					<view class="goods-item-pic">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="goods-item-info">
						<view class="goods-item-info-price">
							<view class="goods-item-info-price-now">
								{{item.price | priceFormat}}
							</view>
							<view class="goods-item-info-price-origin">
								CNY {{item.originPrice | priceFormat}}
							</view>
						</view>
						<view class="goods-item-info-title">
							{{item.title}}
						</view>
						<view class="addCart">
							<button type="default">添加购物车</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar/nav-bar.nvue'
	import {
		loadding,
		hideLoadding,
		msg
	} from '@/common/util.js'
	
	export default {
		components: {
			navBar
		},
		data() {
			return {
				goodsList: []
			};
		},
		filters: {
			priceFormat(val) {
				return '￥' + val
			}
		},
		onLoad(option) {
			console.log(option.type);
			this.init()
		},
		methods: {
			async init() {
				loadding()
				let goods
				try {
					goods = await this.$http.post('/getGoods')
					this.goodsList = [...goods.data, ...goods.data]
					hideLoadding()
				}
				catch(err) {
					msg({ title: err.message })
					hideLoadding()
				}
			},
			back(e) {
				uni.navigateBack()
			},
			tabClick(event) {
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
	.page-wrap {
		padding: 20rpx 40rpx 108rpx 40rpx;
		background-color: #FAFAFF;
		box-sizing: border-box;
	}
	
	.goods {
		display: flex;
		flex-direction: column;
		
		&-item {
			margin-bottom: 50rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 260rpx;
			border-radius: 14rpx;
			box-sizing: border-box;
			box-shadow: 2rpx 18rpx 28rpx rgba(160,143,255,0.1);
			
			&-pic {
				margin-right: 20rpx;
				width: 216rpx;
				height: 216rpx;
				border: solid 0.5px #d8d8d8;
				border-radius: 32rpx;
				overflow: hidden;
				
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			&-info {
				display: flex;
				flex-direction: column;
				
				&-price {
					margin-bottom: 20rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					
					&-now {
						margin-right: 40rpx;
						font-size: 32rpx;
						font-weight: 400;
						color: #0a0157;
					}
					
					&-origin {
						font-size: 24rpx;
						font-weight: 400;
						color: #c3c3c3;
						text-decoration: line-through;
					}
				}
				
				&-title {
					margin-bottom: 40rpx;
					font-size: 24rpx;
					color: #c3c3c3;
					font-weight: 400;
				}
				
				.addCart {
					button {
						margin-left: initial;
						display: flex;
						align-items: center;
						justify-content: center;
						// width: 146rpx;
						height: 40rpx;
						color: #5e5ffa;
						font-size: 20rpx;
						font-weight: 400;
						line-height: 40rpx;
						border: 1px solid #5E5FFA;
						border-radius: 90px;
						
						&::after {
							content: none
						}
					}
				}
			}
		}
	}
</style>
