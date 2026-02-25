import { createBrowserRouter, RouterProvider } from "react-router";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { Secret } from "./pages/Secret";
import { NavBar } from "./pages/Nav";
import { AuthProvider } from "./components/AuthProvider";

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
    <a style={{float: "left", width: "25%", height: "100%", borderStyle: "solid"}}>
      <NavBar></NavBar>
    </a>
    <a style={{float: "left", marginLeft: "26%"}}>
      <RouterProvider router={router}/>
    </a>
  </div>
);

export default App;