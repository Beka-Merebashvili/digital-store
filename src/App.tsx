import Header from "./components/Header"
import Product from "./pages/Product"
import thummbnailImg from "./assets/development.jpg"


function App() {
 

  return (
    <>
  <Header title="WEBROAD" />
  <Product title="Web development course" description="react" images={[{src: thummbnailImg, alt: "Thumbnail image"}]} price={19.99} />
    </>
  )
}

export default App
