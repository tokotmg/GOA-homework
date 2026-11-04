import { useState, useEffect } from "react"
function App() {
  const [search ,setSearch] = useState("")
  const [data,setData] = useState([])
  const [cart, setCart] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data1 => setData(data1))
  },[])
  const handleChage = (e) =>{
    setSearch(e.target.value)
  }
  const dataFilter = data.filter((product) => 
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white font-bold">
      <h1 className="flex justify-center">Our Store</h1>
      <form className="flex justify-center">
        <input type="text" placeholder="Enter product name" value={search} onChange={handleChage} className="border-solid border-black border-[2px]"/>
      </form>
      <h1 className="flex justify-center">Cart ({cart.length})</h1>
      {cart.map((item, index) => (
        <div key={index}>
          {item.title}
        </div>
      ))}
      <div className="flex flex-wrap gap-[20px] justify-center">
        {dataFilter.map((product)=>(
          <div key={product.id} className="bg-gray-600 w-80 h-80 p-[10px] rounded-[10px] flex flex-col gap-[15px] justify-center items-center border-black border-solid border-[3px]">
            <h2 className="flex flex-wrap justify-center items-center">{product.title}</h2>
            <img src={product.image} alt="" width="100px" />
            <div className="flex gap-[20px]">
              <h3>{product.price}</h3>
              <p>{product.rating.rate}</p>
            </div>
            <button className="cursor-pointer bg-gray-600 hover:bg-gray-400 hover:scale-110 hover:transition duration-300 active:bg-gray-800 active:scale-90 active:transition duration-200 rounded-[20px] border-black border-solid border-[2px] p-[10px]" onClick={() => {
              addToCart(product)
            }}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App