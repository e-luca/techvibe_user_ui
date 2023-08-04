export class APIResponse<T> {
    public constructor(
        public data: T,
        public status: number,
        public statusText: string,
    ) { }
}
