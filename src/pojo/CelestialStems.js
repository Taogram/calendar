/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-05 23:10:26
 * @LastEditors: lax
 * @LastEditTime: 2023-05-05 23:27:31
 */
const CELESTIAL_STEMS = [
	"甲",
	"乙",
	"丙",
	"丁",
	"戊",
	"己",
	"庚",
	"辛",
	"壬",
	"癸",
];
const inspect = Symbol.for("nodejs.util.inspect.custom");
class CelestialStems {
	constructor(index) {
		if (index instanceof CelestialStems) return index;
		// 文字取序号，数字取周期后序列
		this.index =
			~~(index + 1) === 0 ? CELESTIAL_STEMS.indexOf(index) : ~~index % 10;
	}

	getValue(is = false) {
		return is ? CELESTIAL_STEMS[this.index] : this.index;
	}

	[inspect]() {
		return this.getValue();
	}
}
module.exports = CelestialStems;
