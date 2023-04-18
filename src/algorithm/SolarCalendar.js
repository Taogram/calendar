/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-06 21:28:04
 * @LastEditors: lax
 * @LastEditTime: 2023-04-15 11:14:52
 */
const { SolarTerms } = require("solar_terms.js");
const { celestialStems, sexagenaryCycle } = require("@/pojo/Tao");
const calcMonth = require("@/algorithm/calcMonth");
const Julian = require("julian.js");
/**
 * @description 转干支历
 * @param {date} date 公历时间
 * @param {date} o origin 干支历起点
 * @param {Object} p 配置
 */

function algorithm(_date, _o = new Date("-002696-10-14T14:00:00.000Z"), p) {
	const date = new Date(_date);
	const o = new Date(_o);

	const year = date.getFullYear();
	let origin = o.getFullYear();
	let _year = year;
	let _origin = origin;
	if (_year < 0) _year = (_year % 60) + 60;
	if (_origin < 0) _origin = (_origin % 60) + 60;

	const options = Object.assign({}, p, { year });
	const during = new SolarTerms(options).getSolarTermsAll();

	const start = during[2];
	if (date.getTime() <= start.getTime()) _year -= 1;

	let diff = Math.abs(_year - _origin);
	const yIndex = diff % 60;

	// 甲己之年丙作首，乙庚之岁戊为头；
	// 丙辛必定寻庚起，丁壬壬位顺行流；
	// 更有戊癸何方觅，甲寅之上好追求。
	// 05->2,16->4
	// 27->6,38->8
	// 49->0

	// yIndex->yCS->mCS
	const mIndex =
		sexagenaryCycle.indexOf(
			celestialStems[((((yIndex % 10) * 2) % 10) + 2) % 10] + "寅"
		) +
		(calcMonth(date, during) - 2);

	let dIndex = (~~Julian.UTC$JD(date) - ~~Julian.UTC$JD(o)) % 60;
	if (dIndex < 0) dIndex += 60;

	// 甲己还甲子，乙庚丙作初
	// 丙辛生戊子，丁壬庚子头
	// 戊癸起壬子，周而复始求
	// 05->0,16->2
	// 27->4,38->6
	// 49->8

	const hIndex =
		sexagenaryCycle.indexOf(celestialStems[((dIndex % 10) * 2) % 10] + "子") +
		(~~((date.getHours() + 1) / 2) % 12);

	return [yIndex, mIndex, dIndex, hIndex];
}

module.exports = algorithm;
