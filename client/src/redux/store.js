import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { fetchCollecctionStart } from "./shop/shop.sagas";

// const Middleware = [thunk];


const sagaMiddleware = createSagaMiddleware();

const Middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    Middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...Middleware))

sagaMiddleware.run(fetchCollecctionStart);

export const persistor = persistStore(store);

const exportedObject ={
    store,
    persistor
}

export default exportedObject
