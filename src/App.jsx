import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import {MoviesLoader} from "./api/MoviesLoader";
import { MoviesPage } from "./pages/MoviesPage";
import { SeriesPage } from "./pages/SeriesPage";


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
        path: "movies",
        element: <MoviesPage />,
        loader: () => MoviesLoader('movies'),
      },
      {
        path: "series",
        element: <SeriesPage />,
        loader: () => MoviesLoader('series'),
      },
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
