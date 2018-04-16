import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'upload-component',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    uploadPath = ''
    upload(e) {
        console.info(e.target.files[0]);
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
        }
        this.uploadPath = e.target.value;
    }
    constructor() { }

    ngOnInit() {
    }
}
