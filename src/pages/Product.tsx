type Image = {
    src: string,
    alt: string
  }
  
  type Props = {
    title: string,
    description: string,
    images: Image[],
    price?: number,
    children?: React.ReactNode
  }
  
  const Product = (props: Props) => {
  return (
    <div>
      <img src={props.images[0].src} alt={props.images[0].alt} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div>
        <button>Buy now</button>
      </div>
    </div>
  )
}

export default Product
