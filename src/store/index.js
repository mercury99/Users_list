import { createStore, compose } from 'redux';

import rootReducer from '../reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore() {
    const enhancers = [
        devtools(),
    ];

    return createStore(
        rootReducer,
        {},
        compose(...enhancers)
    );
}