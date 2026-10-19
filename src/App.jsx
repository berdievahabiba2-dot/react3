import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },{
          path:"about",
          element:<About/>
        }
      ]
    },{
      path:"*",
      element:<NotFound/>
    }
  ]);
  return (
   <RouterProvider router={router}/>
  )
}

export default App