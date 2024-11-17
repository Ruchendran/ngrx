
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const form=createFeatureSelector('share');
export const postField=createSelector(form,(state:any)=>{
    return state.post
})