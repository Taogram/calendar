/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-05 23:10:26
 * @LastEditors: lax
 * @LastEditTime: 2023-05-06 21:36:33
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
const { Phases } = require("tao_taichi.js");
const inspect = Symbol.for("nodejs.util.inspect.custom");
class TerrestrialBranches extends Phases {
	constructor(index) {
		if (index instanceof TerrestrialBranches) return index;
		// 文字取序号，数字取周期后序列
		const i =
			~~(index + 1) === 0 ? TERRESTRIAL_BRANCHES.indexOf(index) : ~~index % 12;
		if (i < 0) throw new Error("arg can`t be use");
		// 水土木木土火火土金金土水
		super(i % 3 === 1 ? 4 : ((~~((i + 1) / 3) % 4) + 1) % 4, (i + 1) % 2);
		this.index = i;
	}

	getValue(is = false) {
		return is ? TERRESTRIAL_BRANCHES[this.index] : this.index;
	}

	// 合
	// 01/211/310/49/58/67/
	combination() {
		return new TerrestrialBranches((13 - this.index) % 12);
	}

	// 冲
	conflict() {}

	// 刑
	punishment() {}

	// 害
	harm() {}

	[inspect]() {
		return this.getValue();
	}
}
module.exports = TerrestrialBranches;
