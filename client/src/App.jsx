import { RouterProvider } from "react-router-dom"
import router from "./routes"
import ContexProvider from "./Store/ContexStore"
// import './App.css'
function App() {
  return (
    <>
    <ContexProvider>
      <RouterProvider router={router} />
    </ContexProvider>
    </>
  )
}

export default App
