/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-22 18:58:04
 * @LastEditors: lax
 * @LastEditTime: 2023-04-06 19:35:20
 * @FilePath: \taobi\.eslintrc.js
 */
module.exports = {
	parser: "@babel/eslint-parser",
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		"airbnb-base/legacy",
		"plugin:prettier/recommended",
		"plugin:jest/recommended",
		"eslint-config-lax",
	],
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	overrides: [
		{
			files: ["**/__test__/*.{j,t}s?(x)", "**/test/unit/**/*.test.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
