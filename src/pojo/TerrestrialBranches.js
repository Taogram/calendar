/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-05 23:10:26
 * @LastEditors: lax
 * @LastEditTime: 2023-05-05 23:37:39
 */
const TERRESTRIAL_BRANCHES = [
	"子",
	"丑",
	"寅",
	"卯",
	"辰",
	"巳",
	"午",
	"未",
	"申",
	"酉",
	"戌",
	"亥",
];
const inspect = Symbol.for("nodejs.util.inspect.custom");
class TerrestrialBranches {
	constructor(index) {
		if (index instanceof TerrestrialBranches) return index;
		// 文字取序号，数字取周期后序列
		this.index =
			~~(index + 1) === 0 ? TERRESTRIAL_BRANCHES.indexOf(index) : ~~index % 12;
	}

	getValue(is = false) {
		return is ? TERRESTRIAL_BRANCHES[this.index] : this.index;
	}

	[inspect]() {
		return this.getValue();
	}
}
module.exports = TerrestrialBranches;
