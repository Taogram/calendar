/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 20:24:29
 * @LastEditors: lax
 * @LastEditTime: 2023-06-02 19:30:42
 */
const CelestialStems = require("@/pojo/CelestialStems");
describe("天干五行", () => {
	const result = ["木", "木", "火", "火", "土", "土", "金", "金", "水", "水"];
	const LOGOS = ["阴", "阳"];
	for (let i = 0; i < 10; i++) {
		const cs = new CelestialStems(i);
		const logos = LOGOS[(i + 1) % 2];
		it(`天干:${cs.getValue(true)}=>${logos}${result[i]}`, () => {
			expect(cs.getPhases(true)).toBe(result[i]);
			expect(cs.getLogos(true)).toBe(logos);
		});
	}
});

describe("天干克应-合", () => {
	it(`甲己合`, () => {
		expect(new CelestialStems(0).combination().getValue(true)).toBe("己");
		expect(new CelestialStems(5).combination().getValue(true)).toBe("甲");
	});
	it(`乙庚合`, () => {
		expect(new CelestialStems(1).combination().getValue(true)).toBe("庚");
		expect(new CelestialStems(6).combination().getValue(true)).toBe("乙");
	});
	it(`丙辛合`, () => {
		expect(new CelestialStems(2).combination().getValue(true)).toBe("辛");
		expect(new CelestialStems(7).combination().getValue(true)).toBe("丙");
	});
	it(`丁壬合`, () => {
		expect(new CelestialStems(3).combination().getValue(true)).toBe("壬");
		expect(new CelestialStems(8).combination().getValue(true)).toBe("丁");
	});
	it(`戊癸合`, () => {
		expect(new CelestialStems(4).combination().getValue(true)).toBe("癸");
		expect(new CelestialStems(9).combination().getValue(true)).toBe("戊");
	});
});

describe("天干克应-冲", () => {
	it(`甲庚冲`, () => {
		expect(new CelestialStems(0).conflict().getValue(true)).toBe("庚");
		expect(new CelestialStems(6).conflict().getValue(true)).toBe("甲");
	});
	it(`乙辛冲`, () => {
		expect(new CelestialStems(1).conflict().getValue(true)).toBe("辛");
		expect(new CelestialStems(7).conflict().getValue(true)).toBe("乙");
	});
	it(`丙壬冲`, () => {
		expect(new CelestialStems(2).conflict().getValue(true)).toBe("壬");
		expect(new CelestialStems(8).conflict().getValue(true)).toBe("丙");
	});
	it(`丁癸冲`, () => {
		expect(new CelestialStems(3).conflict().getValue(true)).toBe("癸");
		expect(new CelestialStems(9).conflict().getValue(true)).toBe("丁");
	});

	it(`戊己无冲`, () => {
		expect(new CelestialStems(4).conflict()).toBe(-1);
		expect(new CelestialStems(5).conflict()).toBe(-1);
	});

	describe("method-get", () => {
		it(`get`, () => {
			expect(new CelestialStems(0).get("合", true).getValue(true)).toBe("己");
		});
		it(`父函数get`, () => {
			expect(new CelestialStems(0).get("生", true)).toBe("火");
		});
	});

	describe("method-to", () => {
		it(`合`, () => {
			expect(new CelestialStems("甲").to(new CelestialStems("己"))).toBe(
				CelestialStems.CONNECTION.HE
			);
			expect(new CelestialStems("乙").to(new CelestialStems("庚"))).toBe(
				CelestialStems.CONNECTION.HE
			);
			expect(new CelestialStems("丙").to(new CelestialStems("辛"))).toBe(
				CelestialStems.CONNECTION.HE
			);
			expect(new CelestialStems("丁").to(new CelestialStems("壬"))).toBe(
				CelestialStems.CONNECTION.HE
			);
			expect(new CelestialStems("戊").to(new CelestialStems("癸"))).toBe(
				CelestialStems.CONNECTION.HE
			);
		});
		it(`冲`, () => {
			expect(new CelestialStems("甲").to(new CelestialStems("庚"))).toBe(
				CelestialStems.CONNECTION.CHONG
			);
			expect(new CelestialStems("乙").to(new CelestialStems("辛"))).toBe(
				CelestialStems.CONNECTION.CHONG
			);
			expect(new CelestialStems("丙").to(new CelestialStems("壬"))).toBe(
				CelestialStems.CONNECTION.CHONG
			);
			expect(new CelestialStems("丁").to(new CelestialStems("癸"))).toBe(
				CelestialStems.CONNECTION.CHONG
			);
			expect(new CelestialStems("戊").to(new CelestialStems("己"))).toBe(-1);
		});
		it(`父函数get`, () => {
			expect(new CelestialStems(0).get("生", true)).toBe("火");
		});
	});
});
