/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-06 20:23:54
 * @LastEditors: lax
 * @LastEditTime: 2024-07-28 10:51:20
 */
const { SolarTerms } = require("solar_terms.js");
const calcMonth = require("@/algorithm/calcMonth");
const _2022 = require("./2022");
const moment = require("moment");

describe("算法：计算月支", () => {
	const during = new SolarTerms().getSolarTermsAll(2022);

	_2022.map(([date, index, accuracy]) => {
		it(`区间计算 ${moment(date).format(
			"YYYY-MM-DD:HH:mm:ss"
		)} / 月份:${index}`, () => {
			expect(calcMonth(new Date(date), during, accuracy)).toBe(index);
		});
	});
});
