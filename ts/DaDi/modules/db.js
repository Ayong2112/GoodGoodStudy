"use strict";
exports.__esModule = true;
exports.MssqlDb = exports.MysqlDb = void 0;
//定义操作Mysql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        console.log("和数据库建立连接");
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx'
            }, {
                title: 'xxx',
                desc: 'xxxx'
            },
        ];
        return list;
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
//定义操作Mssql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx'
            }, {
                title: 'xxx',
                desc: 'xxxx'
            },
        ];
        return list;
    };
    return MssqlDb;
}());
exports.MssqlDb = MssqlDb;
