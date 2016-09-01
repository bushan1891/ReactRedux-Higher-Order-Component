import {CHANGE_AUTH} from '../actions/types';

// false because they are not logged in by default
export default function (state = false , action ){
  console.log(CHANGE_AUTH);
  switch (action.type) {
    case CHANGE_AUTH :
    return action.payload;

  }
  return state;
}
