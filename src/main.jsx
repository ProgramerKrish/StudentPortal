import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "../src/App.jsx"
import AuthProvider from "./context/AuthContext.jsx"
const root =createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
  <AuthProvider >
  <App/>  
  </AuthProvider>
  </BrowserRouter>
) 