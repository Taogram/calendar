/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-05 23:10:26
 * @LastEditors: lax
 * @LastEditTime: 2023-05-15 19:47:16
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
const { Phases } = require("tao_taichi.js");
const inspect = Symbol.for("nodejs.util.inspect.custom");
class CelestialStems extends Phases {
	constructor(index) {
		if (index instanceof CelestialStems) return index;
		// 文字取序号，数字取周期后序列
		const i =
			~~(index + 1) === 0 ? CELESTIAL_STEMS.indexOf(index) : ~~index % 10;
		if (i < 0) throw new Error("arg can`t be use");
		super((~~(i / 2) + 2) % 5, (i + 1) % 2);
		this.index = i;
	}

	getValue(is = false) {
		return is ? CELESTIAL_STEMS[this.index] : this.index;
	}

	// 合
	// 05/16/27/38/49
	combination() {
		return new CelestialStems((this.index + 5) % 10);
	}

	// 冲
	// 06/17/38/49
	// 48/04/15
	conflict() {
		if (this.index !== 4 && this.index !== 5)
			return new CelestialStems((this.index + 6) % 12);
		return null;
		// TODO 48、04、15
	}

	// 破
	break() {
		// TODO
	}

	[inspect]() {
		return this.getValue();
	}
}
module.exports = CelestialStems;
