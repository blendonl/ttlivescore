export class User {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public birthDate: Date,
        public email: string,
        public password: string,
        public teamName: string
        ) {

    }
}
