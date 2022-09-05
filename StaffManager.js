"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.listStaff = [];
    }
    Manager.prototype.getListStaff = function () {
        return this.listStaff;
    };
    Manager.prototype.addStaff = function (staff) {
        this.listStaff.push(staff);
    };
    Manager.prototype.deleteStaff = function (id) {
        var deleteID = this.findID(id);
        if (deleteID != -1)
            this.listStaff.splice(deleteID, 1);
        else
            throw new Error('delete error');
    };
    Manager.prototype.updateStaff = function (id, name, email, age, numberPhone, birthday) {
        var updateID = this.findID(id);
        if (name != '')
            this.listStaff[updateID].setName(name);
        if (email != '')
            this.listStaff[updateID].setEmail(email);
        if (age)
            this.listStaff[updateID].setAge(age);
        if (numberPhone)
            this.listStaff[updateID].setNumPhone(numberPhone);
        if (birthday)
            this.listStaff[updateID].setBirthday(birthday);
    };
    Manager.prototype.findID = function (id) {
        var indexId = -1;
        this.listStaff.forEach(function (staff, index) {
            if (staff.ID == id)
                indexId = index;
        });
        return indexId;
    };
    return Manager;
}());
exports.Manager = Manager;
