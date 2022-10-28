import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

export const FETCH_CATEGORY_DATA_REQUEST = "FETCH_CATEGORY_DATA_REQUEST";
export const FETCH_CATEGORY_DATA_SUCCESS = "FETCH_CATEGORY_DATA_SUCCESS";
export const FETCH_CATEGORY_DATA_FAILURE = "FETCH_CATEGORY_DATA_FAILURE";

const fetchCategoryDataRequests = () => {
    return {
        type: FETCH_CATEGORY_DATA_REQUEST
    }
}

const fetchCategoryDataSuccess = data => {
    return {
        type: FETCH_CATEGORY_DATA_SUCCESS,
        payload: data
    }
}

const fetchCategoryDataFailure = error => {
    return {
        type: FETCH_CATEGORY_DATA_FAILURE,
        payload: error
    }
}

export const fetchCategoryData = () => {
    fetchCategoryDataRequests();
    onSnapshot(collection(db, "category"), (snapshot) => {
        const list = [];
        snapshot.docs.forEach(doc => {
            list.push({ ...doc.data() })
        });
        console.log(list);
        fetchCategoryDataSuccess(list);
    }, (error) => fetchCategoryDataFailure(error.message));

}

// dispatch(fetchCategoryDataRequests());

//         fetch(`https://ig-food-menus.herokuapp.com/best-foods?_limit=8`)
//         .then(response => response.json())
//         .then(res => dispatch(fetchCategoryDataSuccess(res)))
//         .catch(error => dispatch(fetchCategoryDataFailure(error.message)))