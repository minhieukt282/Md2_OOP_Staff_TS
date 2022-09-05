import {Staff} from "./Staff";
import {Manager} from "./StaffManager";
import {Gender} from "./Staff";

let manager = new Manager()

let staff1 = new Staff(1, "aaaa", Gender.Female, "abc@aasd")
let staff2 = new Staff(2, "bbbb", Gender.Male, "", 23659)
let staff3 = new Staff(4, "ddd")

manager.listStaff.push(staff1, staff2, staff3)
// console.log(manager.getListStaff())
console.log("-----------------------------------")
manager.addStaff(new Staff(3, "ccc", Gender.Other, "", 40, 123))
// console.log(manager.getListStaff())
manager.deleteStaff(2)
console.log("-----------------------------------")
manager.updateStaff(1,'' , '', 40, 3269, new Date('1992-02-20'))
console.log(manager.getListStaff())



