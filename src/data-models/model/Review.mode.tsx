export class Review {
    public constructor(
        public id: number,
        public deviceId: number,
        public username: string,
        public imageUrl: string,
        public rating: number,
        public favorite: boolean,
        public comment: string,
        public updated: string,
    ) {}
}
