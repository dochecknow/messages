import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-group-step1',
  templateUrl: './new-group-step1.component.html',
  styleUrls: ['./new-group-step1.component.css']
})
export class NewGroupStep1Component implements OnInit {
_user: User;
_users: Array<User>;
_value=''
typesOfShoes = [
    {name:'Boots',face:'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',id:'1'}, 
    {name:'Clogs',face:'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',id:'2'}, 
    {name:'Loafers',face:'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',id:'3'}, 
    {name:'Moccasins',face:'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',id:'4'}, 
    {name:'Sneakers',face:'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',id:'5'}, 
  ];
  typesOflist=this.typesOfShoes
  constructor() { }

  ngOnInit() {

  }
  serchChange(event){
    let value = (<HTMLInputElement>event.target).value
    this._value = value
    console.log(value)
    // this.typesOfShoes=[]
     this.typesOflist=this.typesOfShoes.filter(
      (item)=>{
        if(value.length!==0)
        {
          if(item.name.indexOf(value) !== -1){
            return item
            }
        }else{
            return item
        }
        
      }
    )
    
    
  }
  // ngOnChanges(){
  //   console.log('ngOnChanges')
  // }
  // ngDoCheck(){
  //   console.log('ngDoCheck')
  // }
  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit')
  // }
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked')
  // }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit')
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked')
  // }
  // ngOnDestroy(){
  //   console.log('ngOnDestroy')
  // }
  

}
