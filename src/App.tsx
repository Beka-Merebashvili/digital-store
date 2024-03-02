import Header from "./components/Header";
import Product from "./pages/Product";
import thummbnailImg from "./assets/development.jpg";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import Checkout from "./pages/Checkout";

function Layout() {
  return (
    <>
      <Header title="WEBROAD" />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Product
              title="Complete Web Development Bundle"
              description="Learn to build websites with HTML, CSS, Javascript, React, Node, and Mongo"
              images={[{ src: thummbnailImg, alt: "Thumbnail image" }]}
              price={12.99}
            ></Product>
          }
        />
      </Route>
      <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<div>sucsess</div>} />
    </Routes>
  );
}

export default App;
