import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./element/Home"
import Login from "./element/Login"
import Signup from "./element/Signup"
import WrongPage from "./element/WrongPage"
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="*" element={<WrongPage/>} />
      </Route>
    )
  )
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App