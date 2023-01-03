import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import configureStore from "./redux/store/configureStore";

import App from './App';
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <ToastContainer autoClose={500} limit={1} />

        <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
  </React.StrictMode>
);

