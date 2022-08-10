export const initialState ={
    basket: [],
}

const reducer = (state: {basket},action) =>{

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,baskter:[...state.basket,action.item]
            }
        default:
            return state;
    }

}

export default reducer;