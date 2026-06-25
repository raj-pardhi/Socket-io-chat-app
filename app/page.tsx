

type Product = {

  id:number,
  image:string,
  price:number,
  description:string,
  category:string

}


async function getProducts(): Promise<Product[]> {

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  })

  if (!res.ok) throw new Error("failed to fetch")
  return res.json();
}


 export default async function ProductsPage() {


  const products = await getProducts();

  console.log(products, "products")


  return (


    <div>
    {products.map((product) => (

      <div key={product.id}>
        <img src={product.image} alt="" />

        <p>{product.description}</p>

        <h2>{product.category}</h2>


        <h1>{product.price}</h1>
      </div>
    ))}
    
    </div>
  )
}