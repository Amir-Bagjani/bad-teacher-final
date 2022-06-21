export interface User {
    _id: number;
    phoneNumber: number;
    isValid: boolean;
    nationalFormat: string;
    internationalFormat: string;
    countryCode: string;
    __v: number;
    name?: string;
    email?: string;
    nationalFormatPhone?: string;
}