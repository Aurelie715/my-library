import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Root";
import Home from "./view/Home";
import ErrorPage from "./view/Error";
import BookPage from './view/BookPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/book/:id" element={<BookPage/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
