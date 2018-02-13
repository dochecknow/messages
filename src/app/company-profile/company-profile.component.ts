import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatSelectionList } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompanyProfile } from '../models/company-profile.model';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'company-profile.component',
    templateUrl: './company-profile.component.html',
    styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
    constructor(private compamyProfileService: CompanyProfileService,
        private userService: UserService, private route: ActivatedRoute, private router: Router, private locationNav: Location) { }
    _users: User[];
    users: User[];

    profile: CompanyProfile = new CompanyProfile();

    updateProfile(): void {
        this.compamyProfileService.updateProfile(this.profile);
    }
    ngOnInit() {
        this.getUsers();
        this.compamyProfileService.currentProfile.subscribe(r => this.profile = r);
        this.route.params.subscribe(params => this.compamyProfileService.getProfile(params['id']));
    }
    onKey(event: KeyboardEvent) {
        this.updateProfile();
    }
    getUsers(): void {
        this.userService.getUsers().then(u => this.users = this._users = u);
    }
    serchChange(event) {
        const searchValue = (<HTMLInputElement>event.target).value;
        if (searchValue.length !== 0) {
            this.users = this._users.filter(u => u.username.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
        } else {
            this.users = this._users;
        }
    }
}
