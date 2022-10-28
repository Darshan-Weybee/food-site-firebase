// JSON.parse(localStorage.getItem("fav")) ||
const initialState =  [];
const ADD_FAV_ITEMS = "ADD_FAV_ITEMS";
const DELETE_FAV_ITEM = "DELETE_FAV_ITEM";

const FavouriteReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FAV_ITEMS:

            let isThere = false;
            let lcData = [];

            state = state.map(st => {
                if (action.payload.id === st.data.id) {
                    isThere = true;
                    return {
                        data: action.payload
                    }
                }
                return st;
            })

            lcData = isThere ? state : [...state, { data: action.payload }]
            return lcData;

        case DELETE_FAV_ITEM:
            state = state.filter(st => st.data.id !== action.payload)
            return state;

        default: return state;
    }
}

export function addFavItems(data) {
    return {
        type: ADD_FAV_ITEMS,
        payload: data
    }
}

export function deleteFavItem(dataId) {
    return {
        type: DELETE_FAV_ITEM,
        payload: dataId
    }
}
export default FavouriteReducer