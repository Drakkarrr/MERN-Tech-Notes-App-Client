import { Routes, Route } from "react-router-dom"
import Layouts from "./components/Layouts"
import Public from "./components/Public"
import Login from "./components/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
