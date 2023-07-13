import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";


import { worker } from '@/api/server'

import { fetchUsers } from "./features/users/usersSlice";

async function start() {

  await worker.start({ onUnhandledRequest: 'bypass' })

  store.dispatch(fetchUsers());

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

start();
