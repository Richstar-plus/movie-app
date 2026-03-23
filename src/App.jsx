import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import {MoviesLoader} from "./api/MoviesLoader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: () => MoviesLoader('movies'),
      },
      {
      }
    ]
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
