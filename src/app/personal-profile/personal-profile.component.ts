import { Component, Inject, OnInit } from '@angular/core';
import { PersonalProfileService } from '../services/personal-profile.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PersonalProfile } from '../models/personal-profile.model';
import { FormsModule } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'personal-profile.component',
    templateUrl: './personal-profile.component.html',
    styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {
    profile: PersonalProfile = new PersonalProfile();
    constructor(private personalProfileService: PersonalProfileService, private route: ActivatedRoute) { }
    updateProfile(): void {
        this.personalProfileService.updateProfile(this.profile);
    }
    ngOnInit() {
        this.personalProfileService.currentProfile.subscribe(p => this.profile = p);
        this.route.params.subscribe(params => this.personalProfileService.getProfile(params['id']));
    }
    onKey(event: KeyboardEvent) {
        this.updateProfile();
    }
}
