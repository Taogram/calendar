/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-08-10 18:50:16
 * @LastEditors: lax
 * @LastEditTime: 2023-08-10 19:20:55
 */
const args = process.argv.slice(2);
const start = Number(args[0]) || 2000;
const end = Number(args[1]) || 2010;
const { SolarTerms } = require("solar_terms.js");
const moment = require("moment");
const fs = require("fs-extra");
const path = require("path");
const WORKSPACE = path.resolve(__dirname, "source");
fs.ensureDirSync(WORKSPACE);
const result = [];
for (let i = start; i <= end; i++) {
	const during = new SolarTerms({ year: i }).getSolarTermsAll();
	result.push(during.map((t) => moment(t).format("YYYY-MM-DD HH:mm:ss")));
	console.log(`${i}`);
}
fs.writeJSONSync(path.resolve(WORKSPACE, "data.json"), { result });
