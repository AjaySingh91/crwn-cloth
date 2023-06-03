import { takeEvery ,call, put} from 'redux-saga/effects'
import ShopActionTypes from './shop.type'
import { firestore , convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync(){
    // yield console.log('errrrrrrrrrrrrrrr');

    try{
        const collecitonRef = firestore.collection('collecctions');
        const snapshot = yield collecitonRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap ,snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollecctionStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}  



