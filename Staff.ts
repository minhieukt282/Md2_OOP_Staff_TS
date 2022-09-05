class Staff {
    name: string
    email: string
    age: number

    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
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

let staff = new Staff("as", "123@ddd", 45)
console.log(staff)
staff.setAge(69)
staff.setEmail("XXX@mkasdasd")
console.log(staff)

