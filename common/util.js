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
};
