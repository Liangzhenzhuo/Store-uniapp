<template>
	<view>
		<tabbar @tabClick="tabClick" :tabbarList="tabbarList" :curr="1"></tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabbarList: [
					{
						iconPath: '/static/images/tabbar/home.png',
						selectedIconPath: '/static/images/tabbar/home-active.png',
						path: '/pages/index/index'
					},
					{
						iconPath: '/static/images/tabbar/heart.png',
						selectedIconPath: '/static/images/tabbar/heart-active.png',
						path: '/pages/test/test'
					},
					{
						iconPath: '/static/images/tabbar/trophy.png',
						selectedIconPath: '/static/images/tabbar/trophy-active.png',
						path: '/pages/test/test2'
					}
				],
			};
		},
		onLoad(option) {
			this.tabIndex = option.tabIndex
		},
		methods: {
			tabClick(event) {
				const path = this.tabbarList[event.tabIndex].path,
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

</style>
