export class CartItem {
    public constructor(
        public itemId: number,
        public imageUrl: string,
        public price: number,
        public description: string,
        public quantity: number,
        public updated: number,
    ) {}
}
