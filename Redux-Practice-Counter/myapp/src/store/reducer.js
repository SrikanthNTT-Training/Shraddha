import * as actionTypes from './action'
const initialState ={
    counter : 0 ,
    results :[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case  actionTypes.INCREMENT :
            return {
                ...state,
                counter :state.counter+1
            }
            case  actionTypes.DECREMENT :
                return {
                    ...state,
                    counter :state.counter-1
                }
                case  actionTypes.ADD :
                    return {
                        ...state,
                        counter :state.counter+action.val
                    }
                    case  actionTypes.SUBSTRACT :
                        return {
                            ...state,
                            counter :state.counter-action.val
                        }
                        case actionTypes.STORERESULT :
                            return{
                                ...state,
                                results : state.results.concat({id : new Date(), value :state.counter})

                            }
                            case actionTypes.DELETERESULT :
                                const updatedArray = state.results.filter(result => result.id !== action.resultElId)
                                return{
                                    ...state,
                                    results :updatedArray
                                }
    }
  
    return state;

};
export default reducer;

 /*  if(action.type === 'INCREMENT')
    {
        return {
            counter : state.counter+1
        }
    }
    if(action.type === 'DECREMENT')
    {
        return {
            counter : state.counter - 1
        }
    }
    if(action.type === 'ADD')
    {
        return{
            counter : state.counter + action.val
        }
    }

    if(action.type === 'SUBSTRACT')
    {
        return{
            counter : state.counter - action.val
        }
    } */