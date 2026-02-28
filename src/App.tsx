import { createBrowserRouter, RouterProvider } from "react-router";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { Secret } from "./pages/Secret";
import { Navbar } from "./pages/Nav";
import { AuthProvider } from "./components/AuthProvider";
import "./App.css"

const router = createBrowserRouter([
  {
    Component: AuthProvider,
    children: [
      { index: true, path: "/", Component: HomePage },
      { path: "login", Component: LoginPage },
      {
        path: "secret",
        Component: ProtectedRoute,
        children: [{ index: true, Component: Secret }],
      },
    ],
  },
]);

const App = () => (
  <div>
    <Navbar></Navbar>
    <div id="main">
      <RouterProvider router={router}/>
    </div>
  </div>
);

export default App;