import React from "react";
import { RouterProvider } from "react-router-dom"
import router from "./router/Router"
import { PlantProvider } from "./contexts/PlantContext.jsx";


function App() {

  return (
    <PlantProvider>
      <RouterProvider router={router} />
    </PlantProvider>
  )
}

export default App
