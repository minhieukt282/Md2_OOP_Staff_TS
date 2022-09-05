"use strict";
exports.__esModule = true;
var Staff_1 = require("./Staff");
var StaffManager_1 = require("./StaffManager");
var Staff_2 = require("./Staff");
var manager = new StaffManager_1.Manager();
var staff1 = new Staff_1.Staff(1, "aaaa", Staff_2.Gender.Female, "abc@aasd");
var staff2 = new Staff_1.Staff(2, "bbbb", Staff_2.Gender.Male, "", 23659);
var staff3 = new Staff_1.Staff(4, "ddd");
manager.listStaff.push(staff1, staff2, staff3);
// console.log(manager.getListStaff())
console.log("-----------------------------------");
manager.addStaff(new Staff_1.Staff(3, "ccc", Staff_2.Gender.Other, "", 40, 123));
// console.log(manager.getListStaff())
manager.deleteStaff(2);
console.log("-----------------------------------");
manager.updateStaff(1, '', '', 40, 3269, new Date('1992-02-20'));
console.log(manager.getListStaff());
