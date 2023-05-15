/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 20:24:29
 * @LastEditors: lax
 * @LastEditTime: 2023-05-15 19:59:38
 */
const TerrestrialBranches = require("@/pojo/TerrestrialBranches");
describe("地支", () => {
	const result = [
		"水",
		"土",
		"木",
		"木",
		"土",
		"火",
		"火",
		"土",
		"金",
		"金",
		"土",
		"水",
	];
	const LOGOS = ["阴", "阳"];
	for (let i = 0; i < 12; i++) {
		const tb = new TerrestrialBranches(i);
		const logos = LOGOS[(i + 1) % 2];
		it(`地支:${tb.getValue(true)}=>${logos}${result[i]}`, () => {
			expect(tb.getPhases(true)).toBe(result[i]);
			expect(tb.getLogos(true)).toBe(logos);
		});
	}
});

describe("地支克应-合", () => {
	it(`子丑合`, () => {
		expect(new TerrestrialBranches(0).combination().getValue(true)).toBe("丑");
		expect(new TerrestrialBranches(1).combination().getValue(true)).toBe("子");
	});
	it(`寅亥合`, () => {
		expect(new TerrestrialBranches(2).combination().getValue(true)).toBe("亥");
		expect(new TerrestrialBranches(11).combination().getValue(true)).toBe("寅");
	});
	it(`辰酉合`, () => {
		expect(new TerrestrialBranches(4).combination().getValue(true)).toBe("酉");
		expect(new TerrestrialBranches(9).combination().getValue(true)).toBe("辰");
	});
	it(`午未合`, () => {
		expect(new TerrestrialBranches(6).combination().getValue(true)).toBe("未");
		expect(new TerrestrialBranches(7).combination().getValue(true)).toBe("午");
	});
	it(`申巳合`, () => {
		expect(new TerrestrialBranches(8).combination().getValue(true)).toBe("巳");
		expect(new TerrestrialBranches(5).combination().getValue(true)).toBe("申");
	});
	it(`戌卯合`, () => {
		expect(new TerrestrialBranches(10).combination().getValue(true)).toBe("卯");
		expect(new TerrestrialBranches(3).combination().getValue(true)).toBe("戌");
	});
});
