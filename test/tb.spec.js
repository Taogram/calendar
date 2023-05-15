/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-06 20:24:29
 * @LastEditors: lax
 * @LastEditTime: 2023-05-06 21:10:16
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
