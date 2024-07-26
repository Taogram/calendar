/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-12 20:16:08
 * @LastEditors: lax
 * @LastEditTime: 2024-07-25 21:47:38
 */
const moment = require("moment");
const algo = require("@/algorithm/SolarCalendar");
const { CS_ARR, SC_ARR, TB_ARR } = require("tao_name");
const _2022 = require("./2022");

describe("算法测试：年干支", () => {
	const years = [
		["-002696-10-14T14:00:00.000Z", "甲子", false],
		["2021-09-05", "辛丑", false],
		["2024-02-03", "癸卯", false],
		["2024-02-04", "甲辰", false],
		["2024-02-04", "癸卯", true],
		["2024-02-05", "甲辰", false],
	];
	years.map(([time, cstb, accuracy]) => {
		const t = moment(time).format("YYYY-MM-DD:HH-mm:ss");
		it(`date: ${t} = ${cstb}}`, () => {
			expect(SC_ARR[algo(time, undefined, { accuracy })[0][0]]).toBe(cstb);
		});
	});
});

describe("算法测试：月干支", () => {
	for (let i = 0; i < 10; i++) {
		const index = (((i * 2) % 10) + 2) % 10;
		const time = new Date(`${1984 + i}-03-01 00:00:00`);
		const [year, month] = algo(time)[0];
		it(`年干：${CS_ARR[i]}(${SC_ARR[year]})=>月干：${CS_ARR[index]}(${SC_ARR[month]})`, () => {
			expect(SC_ARR[year][0]).toBe(CS_ARR[i]);
			expect(SC_ARR[month][0]).toBe(CS_ARR[index]);
		});
	}

	_2022.map(([t, index, accuracy]) => {
		const time = new Date(t);
		const month = algo(time, undefined, { accuracy })[0][1];
		it(`时间：${moment(time).format("YYYY-MM-DD HH:mm")}=>月支：${
			TB_ARR[index]
		}(${SC_ARR[month]}) ${accuracy}`, () => {
			expect(SC_ARR[month][1]).toBe(TB_ARR[index]);
		});
	});
});

describe("算法测试: 日干支", () => {
	const AD = new Date("2023-02-06 14:00:00");
	it("日干支计算(AD): 乙未/31", () => {
		expect(SC_ARR[algo(AD)[0][2]]).toBe("乙未");
	});

	it("日干支计算(AD): 乙未/31 -origin->2023-05-06", () => {
		const o = new Date("+002023-05-06T12:00:00.000Z");
		expect(algo(AD, o)[0][2]).toBe(31);
	});

	const BC = new Date("-001993-02-06T14:00:00.000Z");
	it("日干支计算(BC): 甲申/20", () => {
		expect(algo(BC)[0][2]).toBe(20);
	});

	it("日干支计算(BC): 甲申/20 -origin->-1993-01-17", () => {
		const o = new Date("-001993-01-17T12:00:00.000Z");
		expect(algo(BC, o)[0][2]).toBe(20);
	});

	it("日干支计算(AD): 乙未/31 -origin->-4713-01-17", () => {
		const o = new Date("-004713-01-17T12:00:00.000Z");
		expect(algo(AD, o)[0][2]).toBe(31);
	});

	const _BC = new Date("-004714-12-08T12:00:00.000Z");
	it("日干支计算(BC): 甲申/20 -origin->-4713-01-17", () => {
		const o = new Date("-004713-01-17T12:00:00.000Z");
		expect(algo(_BC, o)[0][2]).toBe(20);
	});
});

describe("算法测试: 时干支", () => {
	for (let i = 0; i < 24; i++) {
		const date = new Date(`2022-06-08 ${i < 10 ? "0" + i : i}:01:00`);
		const index = TB_ARR[~~((i + 1) / 2) % 12];
		it(`时支计算: ${i}小时->${index}`, () => {
			expect(SC_ARR[algo(date)[0][3]][1]).toBe(index);
		});
	}
	for (let i = 0; i < 10; i++) {
		const date = new Date(`2022-05-${21 + i} 00:01:00`);
		const index = (i * 2) % 10;
		it(`时干计算: 日干${CS_ARR[i]}->时干${CS_ARR[index]}`, () => {
			expect(SC_ARR[algo(date)[0][3]][0]).toBe(CS_ARR[index]);
		});
	}
});
