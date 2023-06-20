import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import App from './App.jsx';
import './index.css';
import galleryReducer from './gallerySlice';
import imageSaga from './imageSaga';
import { Provider } from 'react-redux';

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        gallery: galleryReducer,
    },
    middleware: [saga],
});

saga.run(imageSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
