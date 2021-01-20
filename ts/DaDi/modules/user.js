"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserClass = void 0;
var db_1 = require("./db");
// 操作用户表   定义一个user类和数据库做映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MysqlDb(); //类作为参数来约束数据传入的类型
exports.UserModel = UserModel;
