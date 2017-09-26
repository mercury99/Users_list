import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';
import { HashRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-reboot.css";

import App from "./components/App";
import configureStore from "./store";

const store = configureStore();

render(
    <AppContainer>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept('./components/App.js', () => {
        const NextRootContainer = require('./components/App.js').default;
        render(
            <AppContainer>
                <HashRouter>
                    <Provider store={store}>
                        <NextRootContainer/>
                    </Provider>
                </HashRouter>
            </AppContainer>,
            document.getElementById("root")
        );
    })
}