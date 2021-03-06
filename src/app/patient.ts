export class Patient {
    public id?: number;
    public cardNumber?: number;
    public name?: string;
    public surname?: string;
    public born?: string;
    public locale?: string;
    public street?: string;

    public phone?: string;
    public email?: string;
    public message?: string;
}

export class PatientsInfo {

    constructor(
        public id?: number,
        public cardNumber?: number,
        public name?: string,
        public surname?: string,
        public born?: string,
        public locale?: string,
        public street?: string,
    ) { }
}