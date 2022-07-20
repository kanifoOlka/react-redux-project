import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {initStore} from "./core/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = initStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);