import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postField } from '../../state/store1/interface';
import { Router } from '@angular/router';
import { delPost, editPost } from '../../state/store1/action';

@Component({
  selector: 'app-posted',
  templateUrl: './posted.component.html',
  styleUrl: './posted.component.scss'
})
export class PostedComponent implements OnInit {

  List:any=[];

  updateForm=false;
  userId='';

  constructor(private store:Store){

  }

ngOnInit(): void {
  this.store.select
    (postField).subscribe((s)=>{
    this.List=s;
  })
}

onUpdate=(id:any)=>{
  this.updateForm=true;
  this.userId=id;

}


onSubmit=(form:any)=>{
  form.value.id=this.userId;
  this.updateForm=false;
  // console.log(form.value);
  this.store.dispatch(editPost({value:form.value}));
}
  

onDelete=(id:any)=>{
  this.store.dispatch(delPost({val:id}))
}

}
