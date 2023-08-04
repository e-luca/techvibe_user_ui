export class APIError {
    public constructor(
        public status: number,
        public statusText: string,
        public message: string,
    ) { }
}
