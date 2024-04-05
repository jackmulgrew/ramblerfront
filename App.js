import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

// pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Journeys from './pages/Journeys'
import Addjourney from './pages/Addjourney'
import Settings from'./pages/Settings'
import About from'./pages/About'
import Footer from './components/footer'
import BasicExample from './components/basicexample'
import Files from './pages/Files'



function App() {
  const { user } = useAuthContext()


  return (
    <div className="App">
      <BrowserRouter>
      <BasicExample />
      <div className="pages">
        <Routes>
          <Route 
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}

          />
          <Route 
          path="/Login"
          element={!user ? <Login /> : <Navigate to="/" />}

          />
          <Route 
          path="/Signup"
          element={!user ? <Signup /> : <Navigate to="/" />}

          />
          <Route 
          path="/Journeys"
          element={user ? <Journeys /> : <Navigate to="/login" />}

          />

          <Route 
          path="/Addjourney"
          element={user ? <Addjourney /> : <Navigate to="/login" />}

          />

          <Route 
          path="/Settings"
          element={user ? <Settings /> : <Navigate to="/login" />}

          />

          <Route 
          path="/About"
          element={user ? <About /> : <Navigate to="/login" />}

          />

          <Route 
          path="/Files"
          element={user ? <Files/> : <Navigate to="/login" />}

          />

          

        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
