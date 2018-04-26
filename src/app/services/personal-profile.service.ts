
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { PersonalProfile } from '../models/personal-profile.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export let model: PersonalProfile = {
    id: '1',
    name: 'Kevin Wang',
    email: 'wangsm@shinetechchina.com',
    phone: '12345679',
    position: 'Beijing',
    status: 'Onleave'
};

@Injectable()
export class PersonalProfileService {
    public subject: Subject<PersonalProfile> = new Subject<PersonalProfile>();
    public get currentProfile(): Observable<PersonalProfile> {
        return this.subject.asObservable();
    }
    getProfile(profileID: string) {
        // the 'model' is dummy data, you may get the 'model' by a http or socket service
        this.subject.next(model);

    }
    updateProfile(toUpdate: PersonalProfile) {
        // you may update the 'model' by a http or socket service
        model = toUpdate;
        this.subject.next(model);
    }
}
