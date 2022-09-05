var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    return Staff;
}());
var staff = new Staff("as", "123@ddd", 45);
// console.log(staff)
staff.setAge(69);
// staff.setEmail("XXX@mkasdasd")
console.log(staff);
var Pt = /** @class */ (function () {
    function Pt(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Pt.prototype.nghiempt = function () {
        var x1, x2;
        var delta = this.b * this.b - 4 * this.a * this.c;
        if (delta < 0)
            return -1;
        else if (delta == 0)
            return -this.b / (2 * this.a);
        else
            return 2;
    };
    return Pt;
}());
var pt = new Pt(3, 4, -5);
console.log(pt.nghiempt());
