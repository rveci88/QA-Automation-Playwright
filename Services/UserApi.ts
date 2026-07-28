import {APIRequestContext} from '@playwright/test';
import {UserData} from '../Factory/Data';

export class UserApi{

    static async createUser(request: APIRequestContext, user: UserData): Promise<void> {
        const response = await request.post('/api/createAccount', {
            form: {
                name: user.firstName,
                email: user.email,       
                password: user.password,
                title: user.gender,
                birth_date: user.day,
                birth_month: user.month,
                birth_year: user.year,
                firstname: user.firstName,
                lastname: user.lastName,
                company: user.company,
                address1: user.address,
                country: user.country,
                zipcode: user.zipcode,
                state: user.state,
                city: user.city,
                mobile_number: user.mobileNumber
            }
        });

        if (!response.ok()) throw new Error('Error al crear usuario por API');
    }
    static async deleteUser(request: APIRequestContext, email: string, password: string): Promise<void> {
        await request.delete('/api/deleteAccount', {
            form: { email,
                    password}
        });
    }
}