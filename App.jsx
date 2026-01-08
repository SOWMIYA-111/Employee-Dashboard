import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { isAuthenticated } from "./utils/auth";

export default function App() {
  return isAuthenticated() ? <Dashboard /> : <Login />;
}