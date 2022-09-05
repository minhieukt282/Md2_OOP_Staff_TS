var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, email, age, numberPhone, birthday) {
        this.gender = Gender.Other;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.age = age;
        this.numberPhone = numberPhone;
        this.birthday = birthday;
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
var listStaff = [];
listStaff.push(new Staff("aaa", Gender.Male, "12@21", 21, 02022, new Date("1990-09-19")));
listStaff.push(new Staff("bbb", Gender.Female, "12@21", 22, 412, new Date("1992-01-13")));
listStaff.push(new Staff("ccc", Gender.Other, "12@21", 24, 4234, new Date("1996-05-29")));
function show(a) {
    console.log(a);
}
listStaff.forEach(show);
// function main() {
//     let message: string;
//     let total: number = 100;
//     let isProduction = true;
//     let prices: Array<number> = [120, 88, 60]; // string 60 to number
//     let languages: string[] = ['vi', 'en-us'];
//     let now = new Date();
//     let unknown: any;
//
//     enum Direction {
//         UP,
//         DOWN,
//         LEFT,
//         RIGHT
//     };
//
//     function log(msg: string): void {
//         console.log(msg)
//     }
//
//     interface IPost {
//         id: string;
//         title: string;
//         body?: string;
//     }
//
//     isProduction = false;
//     unknown = Direction.UP;
//     unknown = 'changed';
//     let post: IPost; // const ??
//     message = "50";   // number 50 to string
//
//     function getPost(postId: string): IPost {
//         // do something to retrieve post
//         return {
//             id: postId,
//             title: 'Post Title',
//             body: 'Post Body',
//             extra: 'data'
//         } as IPost;
//     }
// }
// class Circle {
//     color: string
//     radius: number
//
//     constructor(color: string, radius) {
//         this.color = color
//         this.radius = radius
//     }
// }
//
// let circleList: Circle[] = []
// circleList.push(new Circle("red", 30))
// circleList.push(new Circle("blue", 36))
// circleList.push(new Circle("green", 2))
//
// function showCircle(circle: Circle) {
//     console.log("hinh tron " + circle.radius + " mau sac " + circle.color)
// }
//
// circleList.forEach(showCircle)
