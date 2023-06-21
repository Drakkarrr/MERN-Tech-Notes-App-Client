import { Routes, Route } from "react-router-dom"
import Layouts from "./components/Layouts"
import Public from "./components/Public"
import Login from "./features/auth/Login"
import DashLayout from "./components/DashLayout"
import Welcome from "./features/auth/Welcome"
import NotesList from "./features/notes/NotesList"
import UsersList from "./features/users/UsersList"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="notes" element={<NotesList />} />
            <Route path="users" element={<UsersList />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
