<template>
	<view class="thematic">
		<view class="thematic-title">
			<view class="thematic-title-text">
				{{title}}
			</view>
			<view class="thematic-title-more" @tap="moreClick">
				{{moreText}}
				<uni-icons type="forward" color="#FA995E"></uni-icons>
			</view>
		</view>
		<swiper circular :duration="200" autoplay>
			<swiper-item v-for="(row, index) in swiperList" :key="index">
				<view class="thematic-list">
					<view class="thematic-list-item" v-for="(row2, index2) in row" :key="index2">
						<image :src="row2.pic" mode="aspectFill" @tap="listItemClick(index, index2)"></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default() {
					return ''
				}
			},
			moreText: {
				type: String,
				default() {
					return '查看所有'
				}
			},
			swiperList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			moreClick() {
				this.$emit('moreClick', { title: this.title })
			},
			listItemClick(index1, index2) {
				const title = this.title
				this.$emit('itemClick', { title, index1, index2 })
			}
		}
	}
</script>

<style lang="scss">
	.thematic {
		margin-bottom: 60rpx;
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
</style>
