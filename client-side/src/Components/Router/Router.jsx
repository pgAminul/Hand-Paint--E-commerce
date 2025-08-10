import { BrowserRouter, Routes, Route } from "react-router";
import Error from "../Pages/Error/Error";
import Layout from "../Layout/NavbarLayout/Layout";
import Home from "../Pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
