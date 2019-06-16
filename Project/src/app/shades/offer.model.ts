import { User } from './user.model';

export class Review {
    proposedBy: User;
    accepted_by: User;
    merchant: User;
    exp_date: Date;
    status: string;
    }