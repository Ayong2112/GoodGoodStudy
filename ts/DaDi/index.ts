// let  str:string='hello world';

// // let arr:number[]=[1,2,3,4]
// // let arr:string[]=['1','2']

// // let arr:Array<number>=[1,23,3] 
// // let arr:[string,number,boolean]=['ts',1,true]
// // enum Flag {success=1,error=-1}
// // var f:Flag=Flag.success
// // enum Color {red,blue,orange}
// // var c:Color = Color.blue     //下标
// function run():void{
//     console.log('run')
// }
// run()

// // 可选参数  ?  放到最后

// function getInfo(name:string,age?:number):string{
//     return `${name} --- ${age}`
// }
// // 默认参数
// var getInfo1=(name:string,age:number=20):string=>{
//     return `${name} --- ${age}`
// }
// // 剩余参数
// // function sum(...result:number[]):number{

// // }
// // 函数重载
// function css(config:any):any{

// }
// function css2(config:any,value:any):any{

// }








// 数据类型

// 布尔类型(boolean)
// 数字类型(number)
// 字符串类型(string)
// 数组类型(array)
// 元组类型(tuple)
// 枚举类型(enum)
// 任意类型(any)
// null 和 undefined
// void类型 表示方法没有返回任何类型
// never类型
// 没有赋值为undefined





// function  Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.run=function(){
//         console.log('run')
//     }
// }
// Person.prototype.work=function(){
//     console.log('work')
// }

// function Web(name,age){ //Web继承Person的属性
//     Person.call(this,name,age)
// }
// Web.prototype= = Person.prototype
// var w = new Web('aaa',10)

// class Person{
//     public name:string; 

//     constructor(name:string){ //构造函数  实例化类的时候触发的方法
//         this.name=name
//     }
//     run():string{
//         return this.name
//     }

// }
// var p = new Person('aaa')

// // 继承  extends   super  子类

// class  Web extends Person{
//     constructor(name:string){
//         super(name) //初始化父类的构造函数
//     }
//     work(){
//         console.log('ccc')
//     }
// }

// var w = new Web('bbb')

// 修饰符  
/*
public    ：公有  当前类 子类 外部均可访问    默认
protected ：保护类型  在外部没有办法访问
private   ：私有 子类和外部无法访问
*/

// 静态方法  es5
// function Person(){
//     this.run1=function(){ //实例方法

//     }
// }
// var p = new Person() //调用

// Person.run2 = function(){ //静态方法


// }

// Person.run2()

// 静态方式  ts

// class Person {
//     public name:string
//     static age:number=20;
//     constructor(name:string) {
//         this.name=name
//     }
//     run(){  //实例方法
//         console.log(this.name+'1111')
//     }
//     work(){
//         console.log(this.name+'222')
//     }
//     static print(){//静态方法  static  不能直接调用类里面的属性
//         console.log('333'+Person.age)
//     }
// }
// // 实例方法
// var p = new Person('aaa')
// p.run()
// // 静态方法
// Person.print()

// // 多态
// class Animal {
//     name:string;
//     constructor(name:string) {
//         this.name=name
//     }
//     eat(){
//         console.log('eat')
//     }
// }
// class Dog extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     eat(){
//         return this.name+'gou'
//     }
// }
// class Cat extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat(){
//         return this.name+'mao'
//     }
// }

// void 没有返回值
// // 抽象类 abstract
// abstract class Animal{
//     name:string
//     constructor(name:string){
//         this.name =name
//     }
//     abstract eat():any
// }

// class Dog extends Animal {
//     constructor(name:any){
//         super(name)
//     }
//     eat(){
//         console.log(this.name+ 'aaaaa')
//     }
// }
// var d= new Dog('bbb')
// d.eat()

// 接口
// 属性接口 对json的约束
// function printLable(labelInfo:{label:string}):void{
//     console.log('11111')
// }
// printLable('jjj')

// interface FullName{
//     firstName:string;
//     secondName:string
// }
// function pritntName(name:FullName){
//     console.log(name.firstName+name.secondName)
// }
// var obj={
//     firstName:"aaa",
//     secondName:"bb",
//     age:1111
// }
// pritntName(obj)


// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string
// }
// function ajax(config:Config){
//     var xhr =new XMLHttpRequest()
//     xhr.open(config.type,config.url,true)
//     xhr.send(config.data)
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4&&xhr.status==200){
//             console.log('chenggong')
//         }
//     }

// }

// // 加密的函数类型接口
// interface encrypt{
//     (key:string,value:string):string
// }
// var md5:encrypt=function(key:string,value:string):string{
//     return key+value
// }

// // 可索引接口   数组、对象的约束
// interface userarr{
//     [index:number]:string  //index为索引值
// }
// var arr:userarr=['111','222']

// interface userObj{
//     [index:string]:string
// }
// var obj:userObj={name:'1',age:'3'}

// // 类类型接口  对类的约束 和 抽象类有点相似  implements
// interface Animal{
//     name:string;
//     eat(str:string):void
// }

// class  Dog implements Animal {
//     name:string;
//     constructor(name:string) {
//         this.name=name
//     }
//     eat(){
//         console.log(this.name+'111')
//     }
// }

// // 接口扩展  接口继承接口

// interface Animal{
//     eat():void
// }
// interface Person extends Animal{
//     work():void
// }
// class Progrommer {
//     public name:string
//     constructor(name:string) {
//         this.name=name
//     }
//     coding(code:string){
//         console.log(this.name+code+'eee')
//     }
// }
// // 类和接口继承

// class Web extends Progrommer implements Person {
//     constructor(name:string) {
//        super(name)
//     }
//     eat(){
//         console.log("aaa")
//     }
//     work(){
//         console.log('bbb')
//     }
// }
// var w = new Web('cccc')
// w.coding('dddd')



// // 泛型 可以支持不特定的类型  要求传入的参数和返回的类型一致，<T>大写字母均可
// fu//     return value
// }
// getData<number>(123)




// 泛型类  支持多种数据类型

// class MinClass {
//     public list: number[] = []
//     add(num: number) {
//         this.list.push(num)
//     }
//     min(): number {
//         var minNum = this.list[0];
//         // Math.min(...this.list)
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum

//     }
// }
// var m = new MinClass()
// m.add(2)
// m.add(22)
// m.add(24)
// console.log(m.min())

// // 类的泛型
// class MinClass<T> {
//     public list: T[] = []
//     add(num: T) :void{
//         this.list.push(num)
//     }
//     min(): T {
//         var minNum = this.list[0];
//         // Math.min(...this.list)
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum

//     }
// }
// var m1 = new MinClass<number>() //实例化  并且指定类T代表的是是number
// m1.add(4)
// m1.add(22)
// m1.add(24)
// m1.add(3)
// console.log(m1.min())
// var m2 = new MinClass<string>()
// m2.add('v')
// m2.add('d')
// m2.add('e')
// console.log(m2.min())

// P14
// 函数类型接口
// interface ConfigFn{
//     (value1:string,value2:string):string
// }
// var  setData:ConfigFn=function(value1:string,value2:string):string{
//     return value1+value2
// }
// setData('name','张三')

// 泛型接口
// interface ConfigFn{
//     <T>(value1:T):T
// }
// var  getData:ConfigFn=function<T>(value1:T):T{
//     return value1
// }
// getData<string>('name')
// getData<number>(123)

// interface ConfigFn<T>{
//     (value1:T):T;
// }
// function getData<T>(value:T):T{
//     return value
// }
// var MyGetData:ConfigFn<string>=getData;
// MyGetData('10')

// P15
// 把类当作参数的泛型类


// class MyaqlDb<T> {
//     add(user: T): boolean {
//         console.log(user)
//         return true
//     }
// }
// class User {
//     userName: string | undefined;
//     password: string | undefined
// }
// var u = new User()
// u.userName = '张三'
// u.password = '123'
// var Db = new MyaqlDb<User>()

// Db.add(u)

// // P16
// /*
// 功能：定义一个操作数据库的库  支持Mysql Mssql Mongdb
// 要求1：Mysql Mssql Mongdb功能一样  都有 add  update delete get 方法
// 注意：约束统一的规范 代码重用
// 解决方案: 需要约束规范所以要定义接口  需要代码重用所以要用到泛型
//         1.接口：在面向对象的编程中，接口一定是一种规范的定义，ta定义了行为和动作的规范
//         2.泛型：通俗理解:泛型就是解决 类 接口  方法的复用性

// */

// //1.定义接口  约束规范
// interface DBI<T> {
//     add(info: T): boolean;
//     update(info: T, id: number): boolean;
//     delete(id: number): boolean;
//     get(id: number): any[],
// }

// //定义操作Mysql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
// class MysqlDb<T> implements DBI<T> {
//     constructor() {
//         console.log("和数据库建立连接")
//     }
//     add(info: T): boolean {
//         console.log(info)
//         return true
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         var list = [
//             {
//                 title: 'xxx',
//                 desc: 'xxxx'
//             }, {
//                 title: 'xxx',
//                 desc: 'xxxx'
//             },
//         ]
//         return list
//     }
// }
// //定义操作Mssql数据库的类   注意：要实现泛型的接口   这个类也是泛型类
// class MssqlDb<T> implements DBI<T> {
//     add(info: T): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         var list = [
//             {
//                 title: 'xxx',
//                 desc: 'xxxx'
//             }, {
//                 title: 'xxx',
//                 desc: 'xxxx'
//             },
//         ]
//         return list
//     }
// }

// // 操作用户表   定义一个user类和数据库做映射
// class User {
//     username: string | undefined;
//     password: string | undefined
// }

// var u = new User()
// u.username = '张三'
// u.password = '12345'

// var oMysql = new MysqlDb<User>()  //类作为参数来约束数据传入的类型
// oMysql.add(u)

// // 获取user表id=4的数据
// var data = oMysql.get(4)
// console.log(data)



// // P17  ts模块  export defalt  不需要花括号 db.ts  user.ts
// import {UserModel,UserClass} from './modules/user'
// // 操作用户表   定义一个user类和数据库做映射

// var u = new UserClass()
// u.username = '张三'
// u.password = '12345'
// UserModel.add(u)

// UserModel.get(123)


// // P18 命名空间
// namespace A{
//     export class Dog {
//         name:string='AAA' 
//     }
// }
// namespace B{}
// var d = new A.Dog.name

// P19 装饰器  扩展
// 类装饰器

/* // 定义装饰器
function logClass(params:any){
    console.log(params)
    // params当前类
    params.prototype.apiUrl='xxx'
    params.prorotype.run=function(){
        console.log("run")
    }
}

@logClass
class HttpClient{
    constructor(){

    }
    getData(){

    }
}
var h:any= new HttpClient()
console.log(h.apiUrl) */

/* // 装饰器工厂
function logClass(params: string) {
    return function (target: any) {
        console.log(target)
        console.log(params)

    }
}

@logClass('hello')
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
var h: any = new HttpClient()
console.log(h.apiUrl) */

// function logClass(target:any){
//     console.log(target)
//     return class extends target{
//         apiUrl:any="bbbb";
//         getData(){
//             console.log(this.apiUrl+'ccc')
//         }
//     }
// }
// @logClass
// class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl='xxxx'
//     }
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
// var h: any = new HttpClient()
// h.getData() 

// // 属性装饰器
// function logClass(target:any){
//     console.log(target)
//     return class extends target{
//         apiUrl:any="bbbb";
//         getData(){
//             console.log(this.apiUrl+'ccc')
//         }
//     }
// }
// @logClass
// class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl='xxxx'
//     }
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
// var h: any = new HttpClient()
// h.getData() 

// P20
// // 方法装饰器
// function get(params:any){
//     return function(target:any,methodName:any,desc:any){
    
//         console.log(target)
//         console.log(methodName)
//         console.log(desc)
//         target.apiUrl='xxx'
//         target.run=function(){
//             console.log('run')
//         }
//         // 修改装饰器的方法 
//         var oMethods = desc.value
//         desc.value= function(...args:any[]){
//             args = args.map(value=>{
//                 return String(value)
//             })
//             console.log(args)
//             oMethods.apply(args)
//         } 
//     }

// }
// class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//     }
//     @get('aa')
//     getData(){
//         console.log(this.apiUrl)
//     }
// }
// var h: any = new HttpClient()
// h.run() 
// 方法参数装饰器
// 参数为   1.对于静态成员来说是类的构造函数  对于实例禅成员是类的原型对象
//          2.参数的名称
//          3.参数在函数参数中的索引

// 装饰器执行顺序
// 属性  方法    方法参数  类装饰器   
// 同样的多个装饰器  会先执行后面的
// 6类装饰器1
function logClass1(params:string){
    return function(target:any){
        console.log("类装饰器1")
    }
}
//5类装饰器2
function logClass2(parmas:string){
    return function(target:any){
        console.log("类装饰器2")
    }
}
 //1 属性装饰器
function logAttribute(parmas?:string){
    return function(target:any,attrName:any){
        console.log("属性装饰器")
    }
}
 //2 方法装饰器
function logMethods(parmas?:string){  
    return function(target:any,attrName:any,desc:any){
        console.log("方法装饰器")
    }
}
//4方法参数装饰器1
function logParams1(parmas?:string){
    return function(target:any,attrName:any,desc:any){
        console.log("方法参数装饰器1")
    }
}
//3方法参数装饰器2
function logParams2(parmas?:string){
    return function(target:any,attrName:any,desc:any){
        console.log("方法参数装饰器2")
    }
}
@logClass1("aaaa")
@logClass2("bbbb")
class HttpClient{
    @logAttribute()
    public apiUrl:string | undefined;
    constructor(){
    }
    @logMethods()
    getData(){
        console.log(this.apiUrl)
    }
    setData(@logParams1() attr1:any,@logParams2() attr2:any){

    }
}
var h: any = new HttpClient()





