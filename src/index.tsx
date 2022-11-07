import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './store';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./containers/pages/Root";
import {Dashboard} from "./containers/pages/Dashboard";
import {Profile} from "./containers/pages/Profile";
import {Friend} from "./containers/pages/Friend";
import {Login} from "./containers/pages/Login";
import {Register} from "./containers/pages/Register";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Dashboard/>,
            }, {
                path: "/profile",
                element: <Profile/>,
            }, {
                path: "/friend",
                element: <Friend/>,
            }
        ],
    },
    {
        path: "/auth/login",
        element: <Login/>
    }, {
        path: "/auth/register",
        element: <Register/>
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
