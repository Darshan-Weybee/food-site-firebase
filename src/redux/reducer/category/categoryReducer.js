import { FETCH_CATEGORY_DATA_FAILURE, FETCH_CATEGORY_DATA_REQUEST, FETCH_CATEGORY_DATA_SUCCESS } from "./categoryAction"

const initialState = {
    loading : false,
    categoryDetails : [],
    error : ""
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CATEGORY_DATA_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_CATEGORY_DATA_SUCCESS : return {
            ...state,
            loading : false,
            categoryDetails : action.payload,
            error : ""
        }
        case FETCH_CATEGORY_DATA_FAILURE : return {
            ...state,
            loading : false,
            categoryDetails : [],
            error : action.payload
        }

        default : return state;
    }
}

export default categoryReducer