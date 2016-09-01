import {CHANGE_AUTH} from './types';

export function authenticate(isLoggedIn){
  console.log(isLoggedIn);
  return{
    type:CHANGE_AUTH,
    payload:isLoggedIn
  }
}
