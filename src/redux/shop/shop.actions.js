import ShopActionTypes from "./shop.type";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});


export const fetchCollectionsSuccess = collectionMap => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collecitonRef = firestore.collection('collecctions')
        dispatch(fetchCollectionsStart());
        collecitonRef.get().then(snapshot => {
        //   console.log(snapshot);
         const collectionMap = convertCollectionSnapshotToMap(snapshot)
        // console.log(collectionMap);
       dispatch(fetchCollectionsSuccess(collectionMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}

//  for fetchinig using url from firebase
 // fetch('https://firestore.googleapis.com/v1/projects/crown-db-8f6e1/databases/(default)/documents/collections')
        // .then(Response => Response.json())
        // .then(collections => console.log(collections))
