/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-02-11 12:08:22
 * @LastEditors: lax
 * @LastEditTime: 2023-04-15 10:24:31
 * @FilePath: \taobi\test\calendar.spec.js
 */
// const { sexagenaryCycle } = require("@/pojo/Tao.js");
// const SC = sexagenaryCycle;
const Calendar = require("@/pojo/Calendar");

// TODO
describe("干支历对象：Calendar", () => {
	it(`公历=>干支历`, () => {
		const calendar = new Calendar(new Date("2023-04-15 10:15:00"));
		const cstb = calendar.sc(true).reduce((acc, next) => {
			return acc + next;
		}, "");

		expect(cstb).toBe("癸卯丙辰癸卯丁巳");
	});
});
