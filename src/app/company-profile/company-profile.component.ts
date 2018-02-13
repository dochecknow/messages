import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatSelectionList } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'company-profile.component',
    templateUrl: './company-profile.component.html',
    styleUrls: ['./company-profile.component.css']
})

export class CompanyProfileComponent implements OnInit {
    @ViewChild(MatSelectionList)
    private userSelectionList: MatSelectionList;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private locationNav: Location) { }
    _users: User[];
    users: User[];

    _selectUserIDs = '';
    getUsers(): void {
        this.userService.getUsers().then(u => this.users = this._users = u);
    }
    checkSelect(id: string): boolean {
        if (this._selectUserIDs === null) { return false; }
        return this._selectUserIDs.split(',').indexOf(id) > -1;
    }
    onNextClick(): void {
        this._selectUserIDs = '';
        for (const item of this.userSelectionList.selectedOptions.selected) {
            this._selectUserIDs += item.value + ',';
        }
        this.router.navigate(['/newGroupStep2/' + this._selectUserIDs]);
    }
    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => {
                this._selectUserIDs = params.get('id');
                return this.userService.getUsers();
            })
            .subscribe(u => this.users = this._users = u);
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
