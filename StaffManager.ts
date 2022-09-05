import {Staff} from "./Staff";

export class Manager {
    listStaff: Staff[] = []

    constructor() {
    }

    getListStaff(): Staff[] {
        return this.listStaff
    }

    addStaff(staff: Staff): void {
        this.listStaff.push(staff)
    }

    deleteStaff(id: number): void {
        let deleteID = this.findID(id)
        if (deleteID != -1)
            this.listStaff.splice(deleteID, 1)
        else throw new Error('delete error')
    }

    updateStaff(id: number, name?: string, email?: string, age?: number, numberPhone?: number, birthday?: Date): void {
        let updateID = this.findID(id)
        if (name != '') this.listStaff[updateID].setName(name)
        if (email != '') this.listStaff[updateID].setEmail(email)
        if (age) this.listStaff[updateID].setAge(age)
        if (numberPhone) this.listStaff[updateID].setNumPhone(numberPhone)
        if (birthday) this.listStaff[updateID].setBirthday(birthday)
    }

    findID(id: number): number {
        let indexId = -1
        this.listStaff.forEach((staff, index) => {
            if (staff.ID == id) indexId = index
        })
        return indexId
    }
}