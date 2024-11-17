import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updatepostList } from '../../state/store1/action';
import { postField } from '../../state/store1/interface';
import { Router } from '@angular/router';
import { v4} from "uuid"
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {


  constructor(private store:Store<any>,private route:Router){

  }

  onSubmit=(form:any)=>{
    form.value.id=v4();
    this.store.dispatch(updatepostList({value:form.value}));
    this.route.navigate(['/posted']);
    
  }

}
