/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-09 22:16:00
 * @LastEditors: lax
 * @LastEditTime: 2024-07-25 21:44:26
 */

module.exports = function calcMonth(date, during, accuracy) {
	const dateTime = accuracy ? date.getTime() : ~~(date.getTime() / 86400000);
	const index = during.reduce((acc, next, i) => {
		if (typeof acc === "number") return acc;
		let accTime = accuracy ? acc.getTime() : ~~(acc.getTime() / 86400000);
		let nextTime = accuracy ? next.getTime() : ~~(next.getTime() / 86400000);
		if (i === 1 && dateTime < accTime) return 0;
		if (i === 23 && dateTime >= nextTime) return 24;
		let isBetween = dateTime >= accTime && dateTime < nextTime;
		return isBetween ? i : next;
	});
	return ~~(index / 2 + 0.5) % 12;
};
