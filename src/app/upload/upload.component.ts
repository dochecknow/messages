import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'upload-component',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{
    uploadPath=''
    upload(e) {
        console.log(document.getElementById('inputa').value)
        this.uploadPath = document.getElementById('inputa').value
    }
    constructor() { }

    ngOnInit() {
    }
}
