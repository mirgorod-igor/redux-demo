import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import * as page from './page'

import './index.sass'




const router = createBrowserRouter([
    {
        path: '/',
        element: <page.Pokemon />,
    },
    {
        path: '/:name',
        element: <page.PokemonByName />,
    },
    {
        path: '/stat/:id',
        element: <page.Stat />,
    },
    {
        path: '/generation/:id',
        element: <page.Generation />,
    },
])


const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
)

