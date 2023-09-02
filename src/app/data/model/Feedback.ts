export class Feedback{
    constructor(
        public emailAddress: string,
        public phoneNumber: string,
        public rate: number,
        public feedbackTitle: string,
        public feedback: string
    ){}
}