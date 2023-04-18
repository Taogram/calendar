/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-09 22:16:00
 * @LastEditors: lax
 * @LastEditTime: 2023-04-15 09:59:03
 */

module.exports = function calcMonth(date, during) {
	const dateTime = date.getTime();
	const index = during.reduce((acc, next, i) => {
		if (typeof acc === "number") return acc;
		if (i === 1 && dateTime < acc.getTime()) return 0;
		if (i === 23 && dateTime > next.getTime()) return 24;
		let isBetween = dateTime >= acc.getTime() && dateTime < next.getTime();
		return isBetween ? i : next;
	});
	return ~~(index / 2 + 0.5) % 12;
};
