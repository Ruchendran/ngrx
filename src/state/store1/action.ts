import { createAction, props } from "@ngrx/store";

export const updatepostList=createAction('updatepostList',props<{value:any}>());
export const editPost=createAction('edit-post-using-mail',props<{value:any}>());
export const delPost=createAction('delete-post',props<{val:any}>());