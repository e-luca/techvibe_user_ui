export class Cart {
    public constructor(
        public id: number,
        public userId: number,
        public totalPrice: number,
        public quantity: number,
        public checkedOut: boolean,
        public created: string
    ) {}
}
