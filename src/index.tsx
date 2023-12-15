import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {LazyAbout} from "./pages/about/About.lazy";
import {LazyShop} from "./pages/shop/Shop.lazy";

const root = document.getElementById('root')

if (!root){
    throw new Error('Root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><LazyShop /></Suspense>
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router}/>
);