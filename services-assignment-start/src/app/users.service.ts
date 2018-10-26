import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({providedIn: 'root'})
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private countSwtich: CountService) {}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countSwtich.updateSwitchCount();
      }

      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countSwtich.updateSwitchCount();
      }
}


