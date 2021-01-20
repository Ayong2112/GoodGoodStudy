interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[],
}

//定义操作Mysql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
class MysqlDb<T> implements DBI<T> {
    constructor() {
        console.log("和数据库建立连接")
    }
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx'
            }, {
                title: 'xxx',
                desc: 'xxxx'
            },
        ]
        return list
    }
}
//定义操作Mssql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
class MssqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx'
            }, {
                title: 'xxx',
                desc: 'xxxx'
            },
        ]
        return list
    }
}
export {MysqlDb,MssqlDb}