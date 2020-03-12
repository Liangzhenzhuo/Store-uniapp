// 数组等长切分
export const chunk = function(arr, num) {
	num = num * 1 || 1;
	var ret = [];
	arr.forEach(function(item, i) {
		if (i % num === 0) {
			ret.push([]);
		}
		ret[ret.length - 1].push(item);
	});
	return ret;
}

export const loadding = option => {
	const _option = option ? option : {}
	uni.showLoading({
		title: _option.title || '加载中',
		mask: _option.mask || false
	})
}

export const hideLoadding = () => {
	uni.hideLoading()
}

export const msg = option => {
	const _option = option ? option : {}
	uni.showToast({
		icon: _option.icon || 'none',
		title: _option.title || 'title',
		duration: _option.duration || 1500,
		image: _option.image || null
	})
}

