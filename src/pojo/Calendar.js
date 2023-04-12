/*
 * @Description: 干支历
 * 公式：https://zhuanlan.zhihu.com/p/93508430
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-22 15:38:09
 * @LastEditors: lax
 * @LastEditTime: 2023-04-06 20:19:42
 */
const SexagenaryCycle = require("./SexagenaryCycle");
const Algorithm = require("@/algorithm");

/**
 * 干支历时
 */
class Calendar {
	constructor(_obj = new Date()) {
		let obj = _obj;

		/**
		 * 年干支
		 * @type {SexagenaryCycle}
		 */
		this.year;

		/**
		 * 月干支
		 * @type {SexagenaryCycle}
		 */
		this.month;

		/**
		 * 日干支
		 * @type {SexagenaryCycle}
		 */
		this.date;

		/**
		 * 时干支
		 * @type {SexagenaryCycle}
		 */
		this.hour;

		if (typeof obj === "string") {
			obj = Array.from(obj.trim());
		}
		if (obj instanceof Array) {
			if (obj.length >= 8) {
				const [y, y_, m, m_, d, d_, h, h_] = obj;
				this.year = new SexagenaryCycle(y, y_);
				this.month = new SexagenaryCycle(m, m_);
				this.date = new SexagenaryCycle(d, d_);
				this.hour = new SexagenaryCycle(h, h_);
			} else if (obj.length === 4) {
				const [y, m, d, h] = obj;
				this.year = new SexagenaryCycle(y);
				this.month = new SexagenaryCycle(m);
				this.date = new SexagenaryCycle(d);
				this.hour = new SexagenaryCycle(h);
			} else {
				throw new Error(" array length error ");
			}
		}
		if (obj instanceof Date) {
			this.time = obj;
			const year = this.time.year();
			const month = this.time.mouth();
			const date = this.time.date();
			const hour = this.time.hour();
			this.year = Calendar.getByYear(year);
			this.mouth = Calendar.getByMouth(year, month);
			this.date = Calendar.getByDate(year, month, date);
			this.hour = Calendar.getByHour(year, month, date, hour);
		}
	}

	/**
	 * @description 获取干支历四柱
	 * @param {boolean} is 是否显示汉字
	 * @param {number} level 获取四柱级别 0-3 年->月->日->时
	 * @param {boolean} focus 是否只显示指定的级别
	 */
	sc(is = false, level = 3, focus = false) {
		return [this.year, this.mouth, this.date, this.hour]
			.filter((cstb, i) => {
				if (focus) {
					if (i === level) return true;
				} else if (i <= level) return true;
				return false;
			})
			.map((cstb) => {
				return cstb.cstb(is);
			});
	}

	static setAlgorithm(
		year = Algorithm.year,
		mouth = Algorithm.mouth,
		day = Algorithm.day,
		hour = Algorithm.hour
	) {
		this.algorithm.year = year;
		this.algorithm.mouth = mouth;
		this.algorithm.day = day;
		this.algorithm.hour = hour;
	}

	static getByYear(year) {
		const data = this.algorithm.year(year);
		return new SexagenaryCycle(data);
	}

	static getByMouth(year, mouth) {
		const data = this.algorithm.mouth(year, mouth);
		return new SexagenaryCycle(data);
	}

	static getByDate(year, mouth, date) {
		const data = this.algorithm.date(year, mouth, date);
		return new SexagenaryCycle(data);
	}

	static getByHour(year, mouth, day, hour) {
		const data = this.algorithm.hour(year, mouth, day, hour);
		return new SexagenaryCycle(data);
	}

	// 获取世纪数
	static getCenturyCount(year) {
		return Math.floor(year / 100) + 1;
	}
}

// 设置初始算法
Calendar.algorithm = {};
module.exports = Calendar;
