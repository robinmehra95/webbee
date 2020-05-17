import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

function saveToLocalStorage (state) {
    try {
        const serilaizedState = JSON.stringify(state)
        localStorage.setItem('state', serilaizedState)
    } catch (e) {
        console.log('Failed to save in local storage', e)
    }
}

function loadFromLocalStorage () {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default function configureStore(initialState={}) {
    return store
}