import ChatRoom from "./components/ChatRoom/ChatRoom";
import Login from "./components/Forms/Login/Login";
import Register from "./components/Forms/Register/Register";
import AuthProvider from "./Context/AuthProvider";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
          <Route Component={ChatRoom} path="/chatroom" />
        </Routes>
      </AuthProvider>
    </Router>
  )
    
  
}

export default App;
