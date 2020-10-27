module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "plugins": ["prettier"],
    "extends": ["plugin:prettier/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error"],
        "no-dupe-args": "error", // function中禁止同名参数
        "no-dupe-keys": "error", // 对象禁止同名key
        "no-duplicate-case": "error",// 禁止同名case
        "no-const-assign": 2, //禁止修改const声明的变量
        "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
    }
}
