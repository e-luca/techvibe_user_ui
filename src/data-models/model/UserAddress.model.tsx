export class UserAddress {
    public constructor(
        public streetName: string,
        public streetNumber: string,
        public city: string,
        public state: string,
        public zip: string,
        public country: string,
        public latitude: string,
        public longitude: string,
        public type: string,
        public notes: string,
    ) {}
}
