/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 20:24:29
 * @LastEditors: lax
 * @LastEditTime: 2023-06-03 13:47:43
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
		expect(new TerrestrialBranches(0).combination()[0].getValue(true)).toBe(
			"丑"
		);
		expect(new TerrestrialBranches(1).combination()[0].getValue(true)).toBe(
			"子"
		);
	});
	it(`寅亥合`, () => {
		expect(new TerrestrialBranches(2).combination()[0].getValue(true)).toBe(
			"亥"
		);
		expect(new TerrestrialBranches(11).combination()[0].getValue(true)).toBe(
			"寅"
		);
	});
	it(`辰酉合`, () => {
		expect(new TerrestrialBranches(4).combination()[0].getValue(true)).toBe(
			"酉"
		);
		expect(new TerrestrialBranches(9).combination()[0].getValue(true)).toBe(
			"辰"
		);
	});
	it(`午未合`, () => {
		expect(new TerrestrialBranches(6).combination()[0].getValue(true)).toBe(
			"未"
		);
		expect(new TerrestrialBranches(7).combination()[0].getValue(true)).toBe(
			"午"
		);
	});
	it(`申巳合`, () => {
		expect(new TerrestrialBranches(8).combination()[0].getValue(true)).toBe(
			"巳"
		);
		expect(new TerrestrialBranches(5).combination()[0].getValue(true)).toBe(
			"申"
		);
	});
	it(`戌卯合`, () => {
		expect(new TerrestrialBranches(10).combination()[0].getValue(true)).toBe(
			"卯"
		);
		expect(new TerrestrialBranches(3).combination()[0].getValue(true)).toBe(
			"戌"
		);
	});

	it(`申子辰合`, () => {
		const _0 = new TerrestrialBranches("子");
		expect(_0.combination()[1][0].getValue(true)).toBe("申");
		expect(_0.combination()[1][1].getValue(true)).toBe("辰");
		const _8 = new TerrestrialBranches("申");
		expect(_8.combination()[1][0].getValue(true)).toBe("辰");
		expect(_8.combination()[1][1].getValue(true)).toBe("子");
		const _4 = new TerrestrialBranches("辰");
		expect(_4.combination()[1][0].getValue(true)).toBe("子");
		expect(_4.combination()[1][1].getValue(true)).toBe("申");
	});

	it(`亥卯未合`, () => {
		const _11 = new TerrestrialBranches("亥");
		expect(_11.combination()[1][0].getValue(true)).toBe("未");
		expect(_11.combination()[1][1].getValue(true)).toBe("卯");
		const _3 = new TerrestrialBranches("卯");
		expect(_3.combination()[1][0].getValue(true)).toBe("亥");
		expect(_3.combination()[1][1].getValue(true)).toBe("未");
		const _7 = new TerrestrialBranches("未");
		expect(_7.combination()[1][0].getValue(true)).toBe("卯");
		expect(_7.combination()[1][1].getValue(true)).toBe("亥");
	});

	it(`寅午戌合`, () => {
		const _2 = new TerrestrialBranches("寅");
		expect(_2.combination()[1][0].getValue(true)).toBe("戌");
		expect(_2.combination()[1][1].getValue(true)).toBe("午");
		const _6 = new TerrestrialBranches("午");
		expect(_6.combination()[1][0].getValue(true)).toBe("寅");
		expect(_6.combination()[1][1].getValue(true)).toBe("戌");
		const _10 = new TerrestrialBranches("戌");
		expect(_10.combination()[1][0].getValue(true)).toBe("午");
		expect(_10.combination()[1][1].getValue(true)).toBe("寅");
	});

	it(`巳酉丑合`, () => {
		const _5 = new TerrestrialBranches("巳");
		expect(_5.combination()[1][0].getValue(true)).toBe("丑");
		expect(_5.combination()[1][1].getValue(true)).toBe("酉");
		const _9 = new TerrestrialBranches("酉");
		expect(_9.combination()[1][0].getValue(true)).toBe("巳");
		expect(_9.combination()[1][1].getValue(true)).toBe("丑");
		const _1 = new TerrestrialBranches("丑");
		expect(_1.combination()[1][0].getValue(true)).toBe("酉");
		expect(_1.combination()[1][1].getValue(true)).toBe("巳");
	});
});

describe("地支克应-冲", () => {
	it("子午冲", () => {
		expect(new TerrestrialBranches("子").conflict().getValue(true)).toBe("午");
		expect(new TerrestrialBranches("午").conflict().getValue(true)).toBe("子");
	});

	it("丑未冲", () => {
		expect(new TerrestrialBranches("丑").conflict().getValue(true)).toBe("未");
		expect(new TerrestrialBranches("未").conflict().getValue(true)).toBe("丑");
	});

	it("寅申冲", () => {
		expect(new TerrestrialBranches("寅").conflict().getValue(true)).toBe("申");
		expect(new TerrestrialBranches("申").conflict().getValue(true)).toBe("寅");
	});

	it("卯酉冲", () => {
		expect(new TerrestrialBranches("卯").conflict().getValue(true)).toBe("酉");
		expect(new TerrestrialBranches("酉").conflict().getValue(true)).toBe("卯");
	});

	it("辰戌冲", () => {
		expect(new TerrestrialBranches("辰").conflict().getValue(true)).toBe("戌");
		expect(new TerrestrialBranches("戌").conflict().getValue(true)).toBe("辰");
	});

	it("巳亥冲", () => {
		expect(new TerrestrialBranches("巳").conflict().getValue(true)).toBe("亥");
		expect(new TerrestrialBranches("亥").conflict().getValue(true)).toBe("巳");
	});
});

describe("地支克应-刑", () => {
	it("自刑", () => {
		expect(new TerrestrialBranches("辰").punishment()[0].getValue(true)).toBe(
			"辰"
		);
		expect(new TerrestrialBranches("午").punishment()[0].getValue(true)).toBe(
			"午"
		);
		expect(new TerrestrialBranches("酉").punishment()[0].getValue(true)).toBe(
			"酉"
		);
		expect(new TerrestrialBranches("亥").punishment()[0].getValue(true)).toBe(
			"亥"
		);
	});

	it("三刑", () => {
		// 寅巳申
		let tb = new TerrestrialBranches("寅");
		expect(tb.punishment()[0].getValue(true)).toBe("申");
		expect(tb.punishment()[1].getValue(true)).toBe("巳");
		tb = new TerrestrialBranches("申");
		expect(tb.punishment()[0].getValue(true)).toBe("巳");
		expect(tb.punishment()[1].getValue(true)).toBe("寅");
		tb = new TerrestrialBranches("巳");
		expect(tb.punishment()[0].getValue(true)).toBe("寅");
		expect(tb.punishment()[1].getValue(true)).toBe("申");
		// 丑戌未
		tb = new TerrestrialBranches("丑");
		expect(tb.punishment()[0].getValue(true)).toBe("未");
		expect(tb.punishment()[1].getValue(true)).toBe("戌");
		tb = new TerrestrialBranches("戌");
		expect(tb.punishment()[0].getValue(true)).toBe("丑");
		expect(tb.punishment()[1].getValue(true)).toBe("未");
		tb = new TerrestrialBranches("未");
		expect(tb.punishment()[0].getValue(true)).toBe("戌");
		expect(tb.punishment()[1].getValue(true)).toBe("丑");
	});

	it("相刑", () => {
		expect(new TerrestrialBranches("子").punishment()[0].getValue(true)).toBe(
			"卯"
		);
		expect(new TerrestrialBranches("卯").punishment()[0].getValue(true)).toBe(
			"子"
		);
	});
});

describe("地支克应-害", () => {
	it(`子未害`, () => {
		expect(new TerrestrialBranches("子").harm().getValue(true)).toBe("未");
		expect(new TerrestrialBranches("未").harm().getValue(true)).toBe("子");
	});
	it(`丑午害`, () => {
		expect(new TerrestrialBranches("丑").harm().getValue(true)).toBe("午");
		expect(new TerrestrialBranches("午").harm().getValue(true)).toBe("丑");
	});
	it(`寅巳害`, () => {
		expect(new TerrestrialBranches("寅").harm().getValue(true)).toBe("巳");
		expect(new TerrestrialBranches("巳").harm().getValue(true)).toBe("寅");
	});
	it(`卯辰害`, () => {
		expect(new TerrestrialBranches("卯").harm().getValue(true)).toBe("辰");
		expect(new TerrestrialBranches("辰").harm().getValue(true)).toBe("卯");
	});
	it(`申亥害`, () => {
		expect(new TerrestrialBranches("申").harm().getValue(true)).toBe("亥");
		expect(new TerrestrialBranches("亥").harm().getValue(true)).toBe("申");
	});
	it(`酉戌害`, () => {
		expect(new TerrestrialBranches("酉").harm().getValue(true)).toBe("戌");
		expect(new TerrestrialBranches("戌").harm().getValue(true)).toBe("酉");
	});
});

describe("method-get", () => {
	it("合冲刑害", () => {
		const tb = new TerrestrialBranches("子");
		expect(tb.get("合")[0].getValue(true)).toBe("丑");
		expect(tb.get("合")[1][0].getValue(true)).toBe("申");
		expect(tb.get("合")[1][1].getValue(true)).toBe("辰");
		expect(tb.get("冲").getValue(true)).toBe("午");
		expect(tb.get("刑")[0].getValue(true)).toBe("卯");
		expect(tb.get("害").getValue(true)).toBe("未");
	});

	it(`五行`, () => {
		expect(new TerrestrialBranches(0).get("生", true)).toBe("木");
	});
});

describe("method-to", () => {
	it("子", () => {
		const tb = new TerrestrialBranches("子");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("未")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥").length).toEqual(0);
	});

	it("丑", () => {
		const tb = new TerrestrialBranches("丑");
		expect(tb.to("子")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("未")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("亥").length).toEqual(0);
	});

	it("寅", () => {
		const tb = new TerrestrialBranches("寅");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳")).toEqual(expect.arrayContaining([2, 3]));
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥")).toEqual(expect.arrayContaining([0]));
	});

	it("卯", () => {
		const tb = new TerrestrialBranches("卯");
		expect(tb.to("子")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("戌")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("亥").length).toEqual(0);
	});

	it("巳", () => {
		const tb = new TerrestrialBranches("巳");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅")).toEqual(expect.arrayContaining([2, 3]));
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申")).toEqual(expect.arrayContaining([0, 2]));
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥")).toEqual(expect.arrayContaining([1]));
	});

	it("午", () => {
		const tb = new TerrestrialBranches("午");
		expect(tb.to("子")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("丑")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("未")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥").length).toEqual(0);
	});

	it("未", () => {
		const tb = new TerrestrialBranches("未");
		expect(tb.to("子")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("丑")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("亥").length).toEqual(0);
	});

	it("申", () => {
		const tb = new TerrestrialBranches("申");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳")).toEqual(expect.arrayContaining([0,2]));
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥")).toEqual(expect.arrayContaining([3]));
	});

	it("酉", () => {
		const tb = new TerrestrialBranches("酉");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("辰")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("戌")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("亥").length).toEqual(0);
	});

	it("戌", () => {
		const tb = new TerrestrialBranches("戌");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("寅").length).toEqual(0);
		expect(tb.to("卯")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("辰")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("巳").length).toEqual(0);
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未")).toEqual(expect.arrayContaining([2]));
		expect(tb.to("申").length).toEqual(0);
		expect(tb.to("酉")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥").length).toEqual(0);
	});

	it("亥", () => {
		const tb = new TerrestrialBranches("亥");
		expect(tb.to("子").length).toEqual(0);
		expect(tb.to("丑").length).toEqual(0);
		expect(tb.to("寅")).toEqual(expect.arrayContaining([0]));
		expect(tb.to("卯").length).toEqual(0);
		expect(tb.to("辰").length).toEqual(0);
		expect(tb.to("巳")).toEqual(expect.arrayContaining([1]));
		expect(tb.to("午").length).toEqual(0);
		expect(tb.to("未").length).toEqual(0);
		expect(tb.to("申")).toEqual(expect.arrayContaining([3]));
		expect(tb.to("酉").length).toEqual(0);
		expect(tb.to("戌").length).toEqual(0);
		expect(tb.to("亥")).toEqual(expect.arrayContaining([2]));
	});
});
