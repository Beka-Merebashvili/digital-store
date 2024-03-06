import Header from "./components/Header";
import Product from "./pages/Product";
import thummbnailImg from "./assets/development.jpg";
import { Route, Routes, Outlet } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Success from "./components/Sucsess";

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
        <Route index path="/" element={
          <Product title='Complete Web Development Bundle' description='Learn to build websites with HTML, CSS, Javascript, React, Node, and Mongo' images={[{ src: thummbnailImg, alt: 'Thumbnail image' }]} price={12.99}>
            <div className='pb-12'>
              <h2 className='text-2xl font-bold'>What's included</h2>
              <ul className='list-disc list-inside'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Mongo</li>
              </ul>
              <br></br>
              <h2 className='text-2xl font-bold'>What you'll learn</h2>
              <ul className='list-disc list-inside'>
                <li>How to build websites</li>
                <li>How to build web apps</li>
                <li>How to build full stack applications</li>
              </ul>
            </div>
          </Product>
        } />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  )
}

export default App;
