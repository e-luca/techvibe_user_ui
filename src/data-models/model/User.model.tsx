export class User {
    public constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string,
        public dateOfBirth: string,
        public imageUrl: string,
        public registrationDate: string,
        public lastLogin: string,
    ) {}
}
