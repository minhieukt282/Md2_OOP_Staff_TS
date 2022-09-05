enum Gender {
    Male,
    Female,
    Other
}

class Staff {
    name: string
    gender: Gender = Gender.Other
    email: string
    age: number
    numberPhone: number
    birthday?: Date

    constructor(name: string, gender: Gender, email: string, age: number, numberPhone: number, birthday: Date) {
        this.name = name
        this.gender = gender
        this.email = email
        this.age = age
        this.numberPhone = numberPhone
        this.birthday = birthday
    }

    setName(name: string): void {
        this.name = name
    }

    setEmail(email: string): void {
        this.email = email
    }

    setAge(age: number): void {
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getAge(): number {
        return this.age
    }
}

let listStaff: Staff[] = []
listStaff.push(new Staff("aaa", Gender.Male, "12@21", 21, 02022, new Date("1990-09-19")))
listStaff.push(new Staff("bbb", Gender.Female, "12@21", 22, 412, new Date("1992-01-13")))
listStaff.push(new Staff("ccc", Gender.Other, "12@21", 24, 4234, new Date("1996-05-29")))

function show(staff: Staff) {
    console.log(staff)
}

listStaff.forEach(show)

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

class Circle {
    color: string
    radius: number

    constructor(color: string, radius) {
        this.color = color
        this.radius = radius
    }
}

let circleList: Circle[] = []
circleList.push(new Circle("red", 30))
circleList.push(new Circle("blue", 36))
circleList.push(new Circle("green", 2))

function showCircle(circle: Circle) {
    console.log("hinh tron " + circle.radius + " mau sac " + circle.color)
}

circleList.forEach(showCircle)




