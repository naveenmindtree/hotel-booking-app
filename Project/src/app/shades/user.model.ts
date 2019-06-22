import { Establishment } from './establishment.model';
import { Review } from './review.model';
import { Booking } from './booking.model';

export class User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    isBlock: boolean;
    role: string;
    establishment: Establishment[];
    reviews: Review[];
    bookingList: Booking[];

    
    constructor(name: string) {
        this.name = name;
    }
}