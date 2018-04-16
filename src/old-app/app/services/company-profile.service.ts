
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { CompanyProfile } from '../models/company-profile.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export let model: CompanyProfile = {
    id: '1',
    name: 'Kevin Wang',
    address1: 'wangsm@shinetechchina.com',
    address2: 'wangsm@shinetechchina.com',
    address3: 'wangsm@shinetechchina.com',
    country: 'China',
    ABN: 'test abn',
    ZIP: '000000'
};
@Injectable()
export class CompanyProfileService {
    public subject: Subject<CompanyProfile> = new Subject<CompanyProfile>();
    public get currentProfile(): Observable<CompanyProfile> {
        return this.subject.asObservable();
    }
    getProfile(profileID: string) {
        // the 'model' is dummy data, you may get the 'model' by a http or socket service
        this.subject.next(model);
    }
    updateProfile(toUpdate: CompanyProfile) {
        // you may update the 'model' by a http or socket service
        model = toUpdate;
        this.subject.next(model);
    }
}
