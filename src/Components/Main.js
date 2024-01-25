import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import Redux from './Redux'
const Main = () => {
    const approuter=createBrowserRouter([
        {
            path:'/',
            element:<Landing/>
        },
        {
          path:'/redux',
          element:<Redux/>
        }
    ])
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Main
