import { Routes, Route } from "react-router-dom"
import Layouts from "./components/Layouts"
import Public from "./components/Public"
import Login from "./components/Login"
import DashLayout from "./components/DashLayout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          <Route path="dash" element={<DashLayout />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
