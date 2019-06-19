import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = (store) => (dispatch) => (action) =>{
    console.log(action.type, store.getState());
    return dispatch(action);
};

const stringMiddleware = () => (next) => (action) =>{
    if (typeof action === 'string'){
        return next({
            type: action
        });
    }
    return next(action);
};

// const stringEnhancer = (createStore) => (...args) =>{
//     const store = createStore(...args);
//
//     const originalDispatch = store.dispatch;
//
//     store.dispatch = (action) => {
//         if (typeof action === 'string'){
//             return originalDispatch({
//                 type: action
//             });
//         }
//         return originalDispatch(action);
//     };
//     return store;
// };
//
// const logEnhancer = (createStore) => (...args) =>{
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//
//     store.dispatch = (action) => {
//         console.log(action.type);
//        return originalDispatch(action);
//     };
//     return store;
// };

const store = createStore(reducer, applyMiddleware(
    thunkMiddleWare, stringMiddleware,logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) =>{
    setTimeout(()=>dispatch({
        type: 'DELAYED_ACTION'
    }),timeout);
};


store.dispatch(delayedActionCreator(3000));
//store.dispatch('HELLO_WORLD');

export default store;
