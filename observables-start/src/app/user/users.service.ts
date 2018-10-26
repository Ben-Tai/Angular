import { Subject } from 'rxjs';

// use subject to create an observable as a service to can push data using 'next' and pull data using 'subscribe'
export class UsersService {
    userActivated = new Subject();
}

