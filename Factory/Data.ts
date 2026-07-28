import { faker } from '@faker-js/faker/locale/es';

export interface UserData {
    gender: 'Mr.' | 'Mrs.';
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
    cvc:string;
    cardNumber:string;
}

export class UserFactory {
    
    static createRandomUser(): UserData {
    
        return {
            gender: faker.helpers.arrayElement(['Mr.', 'Mrs.']) as 'Mr.' | 'Mrs.',
            password: faker.internet.password({ length: 10 }),
            email: faker.internet.email(),
            day: faker.number.int({ min: 1, max: 28 }).toString(),
            month: faker.date.month(),
            year: faker.number.int({ min: 1980, max: 2000 }).toString(), 
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            country: faker.helpers.arrayElement(['India','United States','Canada','Australia','Israel','New Zealand','Singapore']), 
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
            cvc: faker.finance.creditCardCVV(),
            cardNumber: faker.finance.creditCardNumber()
        };
    }
}