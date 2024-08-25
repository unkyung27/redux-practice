import { getDefaultNormalizer } from "@testing-library/react"

let initialState={
    count: 0,
    id: "",
    passwd: ""
}


function reducer(state=initialState, action){
    console.log("action? ", action);
    
    switch(action.type){
        case "INCREAMENT":
            return { ...state, count: state.count + action.payload.num };
        case "DECREAMENT":
            return { ...state, count: state.count + action.payload.num };    
            case "LOGIN":
            return { ...state, id: action.payload.id, passwd: action.payload.passwd};
        default:
            return { ...state };
    }

    
}

export default reducer;