
import { DEPOSITE_MONEY, WITHDRAW_MONEY } from "../actions/bank_actions";



export const bankReducer = (state = 1000 , action) => {
    switch(action.type){
      case WITHDRAW_MONEY:
        return state - action.payload
      case DEPOSITE_MONEY:
        return state + action.payload
        default:
          return state;
    }
  }