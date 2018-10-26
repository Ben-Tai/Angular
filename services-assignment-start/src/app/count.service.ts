import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CountService {
    count = 0;

    updateSwitchCount() {
        this.count++;
        console.log(this.count);
    }
}
