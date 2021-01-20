import {MssqlDb,MysqlDb} from './db';
// 操作用户表   定义一个user类和数据库做映射
class UserClass{
    username: string | undefined;
    password: string | undefined
}


var UserModel = new MysqlDb<UserClass>()  //类作为参数来约束数据传入的类型

export {
    UserClass,
    UserModel
}