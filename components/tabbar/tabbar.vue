<template>
	<view class="tabbar" :style="{ bottom: hide ? '-108rpx': '' }">
		<view class="tabbar-item" v-for="(item, index) in tabbarList" :key="index" @tap="tabbarItemClick(index, item.path)">
			<view class="tabbar-item-pic" :class="index === curr ? 'active' : ''">
				<image :src="index === curr ? item.selectedIconPath : item.iconPath" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hide: false
			}
		},
		props: {
			tabbarList: {
				type: Array,
				default() {
					return [
					{
						iconPath: '/static/images/tabbar/home.png',
						selectedIconPath: '/static/images/tabbar/home-active.png',
						path: '/pages/index/index'
					},
					{
						iconPath: '/static/images/tabbar/cart.png',
						selectedIconPath: '/static/images/tabbar/cart-active.png',
						path: '/pages/test/test'
					},
					{
						iconPath: '/static/images/tabbar/profile.png',
						selectedIconPath: '/static/images/tabbar/profile-active.png',
						path: '/pages/test/test2'
					}
				]
				}
			},
			curr: {
				type: Number,
				default() {
					return 0
				}
			}
		},
		methods: {
			tabbarItemClick(index, path) {
				this.$emit('tabClick', { tabIndex: index, path: path})
			},
			tabbarHide() {
				this.hide = true
			}
		}
	}
</script>

<style lang="scss">
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 108rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		z-index: 1;
		background-color: #FFF;
		border-top-left-radius: 48rpx;
		border-top-right-radius: 48rpx;
		box-shadow: 0px -5px 8px rgba(142,149,255,0.03);
		transition: bottom .3s;
		
		&-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			
			&-pic {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 80rpx;
				height: 80rpx;
				
				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}
		
		.active {
			border-radius: 50%;
			background: rgba(94,95,250,0.1);
		}
	}
</style>
