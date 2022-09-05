export enum Gender {
    Male,
    Female,
    Other
}

export class Staff {
    ID: number
    name?: string
    gender?: Gender = Gender.Other
    email?: string
    age?: number
    numberPhone?: number
    birthday?: Date

    constructor(id: number, name?: string, gender?: Gender, email?: string, age?: number, numberPhone?: number, birthday?: Date) {
        this.ID = id
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

    setNumPhone(numPhone: number): void {
        this.numberPhone = numPhone
    }

    setBirthday(birthday: Date): void {
        this.birthday = birthday
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

    getNumPhone(): number {
        return this.numberPhone
    }

    getBirthday(): Date {
        return this.birthday
    }

    getID(): number {
        return this.ID
    }
}


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




