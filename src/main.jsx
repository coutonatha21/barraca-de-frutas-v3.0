import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import CreateFruit from './routes/CreateFruit'
import EditFruit from './routes/EditFruit'
import Success from './routes/Success'
import FruitList from './routes/FruitList'
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "create",
        element: <CreateFruit />
      },
      {
        path: "edit",
        element: <EditFruit />
      },
      {
        path: "success",
        element: <Success />
      },
      {
        path: "fruit-list",
        element: <FruitList />
      }
    ],
  },
])


import { FruitsProvider } from './context/FruitsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FruitsProvider>
      <RouterProvider router={router} />
    </FruitsProvider>
  </React.StrictMode>
)
