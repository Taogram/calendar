/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-12-11 00:57:08
 * @LastEditors: lax
 * @LastEditTime: 2024-05-19 09:42:54
 * @FilePath: \calendar\test\cstb.spec.js
 */
const CSTB = require("@/pojo/SexagenaryCycle");
const { CS_ARR, SC_ARR, TB_ARR } = require("tao_name");

describe("天干地支对象：sexagenaryCycle", () => {
	for (let i = 0; i < 60; i++) {
		const name = SC_ARR[i];
		const head = SC_ARR[~~(i / 10) * 10];
		const arr = Array.from(name);
		const h = CS_ARR.indexOf(arr[0]);
		const t = TB_ARR.indexOf(arr[1]);
		const obj = {
			x: h,
			y: t,
		};
		const listStr = {
			x: arr[0],
			y: arr[1],
		};
		const listNum = [h, t];

		it(`1参数,类型:object,值:{${obj.x},${obj.y}}=>结果:${name}`, () => {
			expect(new CSTB(obj).cstb(true)).toBe(name);
		});

		it(`1参数,类型:object,值:{${listStr.x},${listStr.y}}=>结果:${name}`, () => {
			expect(new CSTB(listStr).cstb(true)).toBe(name);
		});

		it(`1参数,类型:array,值:[${listNum[0]},${listNum[1]}]=>结果:${name}`, () => {
			expect(new CSTB(listNum).cstb(true)).toBe(name);
		});

		it(`1参数,类型:object,值:[${arr[0]},${arr[1]}]=>结果:${name}`, () => {
			expect(new CSTB(arr).cstb(true)).toBe(name);
		});

		it(`1参数,类型:number,值:${i}=>结果:${name}`, () => {
			expect(new CSTB(i).cstb(true)).toBe(name);
		});

		it(`1参数,类型:string,值:"${i}"=>结果:${name}`, () => {
			expect(new CSTB(`${i}`).cstb(true)).toBe(name);
		});

		it(`1参数,类型:string,值:${name}=>结果:${name}`, () => {
			expect(new CSTB(name).cstb(true)).toBe(name);
		});

		it(`值:${name}=>旬首:${head}`, () => {
			expect(new CSTB(i).getLead(true).cstb(true)).toContain("甲");
		});
	}

	for (let i = 0; i < 60; i++) {
		const index = SC_ARR[i];
		const [cs, tb] = index;
		const x = CS_ARR.indexOf(cs);
		const y = TB_ARR.indexOf(tb);
		it(`2参数,类型:string,值:${cs}/${tb}=>结果:${cs + tb}`, () => {
			expect(new CSTB(cs, tb).cstb(true)).toBe(cs + tb);
		});

		it(`2参数,类型:number,值:${x}/${y}=>结果:${cs + tb}`, () => {
			expect(new CSTB(x, y).cstb(true)).toBe(cs + tb);
		});

		it(`2参数,类型:string,值:"${x}"/"${y}"=>结果:${cs + tb}`, () => {
			expect(new CSTB(`${x}`, `${y}`).cstb(true)).toBe(cs + tb);
		});
	}
});
