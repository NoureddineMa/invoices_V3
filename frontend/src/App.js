import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Auth from "./pages/Auth";
import {LayoutAdmin , LayoutSuperAdmin , LayoutUser} from './layouts'
import { ProtectAdmin , ProtectSuperAdmin , ProtectUser } from './components/ProtectRoutes'
import { Companies , Users , Documents  } from './pages/admin'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<ProtectAdmin />}>
      <Route element={<LayoutAdmin />}>
        <Route element={<h1>Dash Admin</h1>} path="/admin" />
        <Route element={<Documents />} path="/docs" />
        <Route element={<Companies />} path="/company" />
        <Route element={<Users />} path="/users" />
      </Route>
      </Route>
      <Route element={<ProtectSuperAdmin />}>
      <Route element={<LayoutSuperAdmin />}>
        <Route element={<h1>LayoutSuperAdmin</h1>} path="/superadmin" />
      </Route>
      </Route>
      <Route element={<ProtectUser />}>
      <Route element={<LayoutUser />}>
        <Route element={<h1>LayoutUser</h1>} path="/user" />
      </Route>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
