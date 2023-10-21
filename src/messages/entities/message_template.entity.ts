class MessageTemplate {
    id: number;
    name: string;
    description: string;
    customer: Customer;
    active: boolean;
    mappingData:[] // [{string:string}]
}