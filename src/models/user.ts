export  default class User {
    email: string;
    gender: string;
    profile: string;
    name: string;
    dateBirth: Date;
    createdAt: Date;
    lastLogin: Date;
    constructor(email: string, name: string, profile: string, gender: string, dateBirth: Date, createdAt: Date, lastLogin: Date) {
        this.email = email;
        this.name = name;
        this.profile = profile;
        this.gender = gender;
        this.profile = profile;
        this.dateBirth = dateBirth;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
    }
}