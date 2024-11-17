import { createReducer, on } from "@ngrx/store"
import { delPost, editPost, updatepostList } from "./action";
import { state } from "@angular/animations";
import { stat } from "node:fs";


let initial={
    post:[{name:'Vishi',mail:"chathruknansathvathu@gmail.com",gender:"female",id:"12345"}],
    // users:['']
}

export const postUpdate=createReducer(initial,
    on(updatepostList,(state,action)=>{
  
        return {
            ...state,
            post:[...state.post,action.value]
        }
    }),
    on(editPost,(state,action)=>{
        let editUser=state.post.map((s:any)=>{
            if(s.id===action.value.id){
             
               s=action.value
            }
            return s
           
        });

        // console.log(editUser)

     
        return {
            ...state,
            post:editUser
        };
    }),
    on(delPost,(state,action)=>{
        let updList=state.post.filter((s)=>{
            return s.id!==action.val;
        })

        return{
            ...state,
            post:updList
        }
    })

)