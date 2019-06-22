import { User } from './user.model';
import { Establishment } from './establishment.model';

export class Booking {
    Booked_by:User;
    establishment:Establishment;
    Checkindate: Date;
    checkoutdate: Date;
    noofperson: number;
    cost:number;
    }