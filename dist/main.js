"use strict";
// ====================================================================================================
// 1|
// function getArrayLength<T>(arr: T[]): number {
//     return arr.length;
// }
// console.log(getArrayLength([1, 2, 3, 4, 5]));
// ====================================================================================================
// 2|
// enum  Status {
//     start,
//     stop,
// }
// ====================================================================================================
// 3|
// interface Dog {
//     bark: boolean;
// }
// interface Cat {
//     meow: boolean;
// }
// interface Pet extends Dog,Cat {
//     bark: true;
//     meow: true; 
// }
// ====================================================================================================
// 4|
// type GuardType = string | number;
// function TypeGuard(arg: GuardType): GuardType {
//     if (typeof arg === "number") {
//         return Math.pow(arg, 2);
//     } else if (typeof arg === "string") {
//         return arg.toUpperCase();
//     } else {
//         return "Type number or string"
//     }   
// }
// console.log(TypeGuard("salom"))
// ====================================================================================================
// 5|
// class Car {
//     brand: string;
//     year: number;
//     constructor(brand: string, year: number) {
//       this.brand = brand;
//       this.year = year;
//     }
//     displayInfo(): void {
//       console.log(`Car Brand: ${this.brand}, Year: ${this.year}`);
//     }
//   }
//   const myCar = new Car("Toyota", 2022);
//   myCar.displayInfo();
// ====================================================================================================
// 6|
// interface Product {
//     name: string;
//     price?: number;
//     readonly id: number
// }
// let myProduct: Product = {
//     name: "Asus Zenbok",
//     price: 120,
//     id: 1
// }
// console.log(myProduct)
// ====================================================================================================
// 7|
// let userInfo:  [number, string]
// console.log(userInfo = [25,"Jane"])
// ====================================================================================================
