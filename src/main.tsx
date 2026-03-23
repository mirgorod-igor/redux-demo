import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import Pokemon from './page/Pokemon'
import PokemonByName from "./page/PokemonByName"

import './index.css'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Pokemon />,
    },
    {
        path: '/:name',
        element: <PokemonByName />,
    },
])


const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
)

