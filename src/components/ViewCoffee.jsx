import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const {
      name,
     quantity,
     supplier,
     taste,
     category,
     details,
     photo} = coffee
  return (
    <div>
    {/* <h2 classNameName="text-2xl font-bold text-center text-gray-700">Update Coffee : {name}</h2> */}
      <Link to='/' className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Back</Link>
<section className="text-gray-700 body-font overflow-hidden bg-white">
<div className="container px-5 py-24 mx-auto">
<div className="lg:w-4/5 mx-auto flex flex-wrap">
  <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={photo}/>
  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
    <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
    
    <p className="leading-relaxed">{details}</p>
    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
      
      <div className="flex ml-6 items-center">
        <span className="mr-3">Quantity</span>
        <div className="relative">
          <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
            <option>{quantity}</option>
           
          </select>
          
        </div>
      </div>
    </div>
    <div className="flex">
      <span className="title-font font-medium text-2xl text-gray-900">{supplier}</span>
      <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Purchase</button>
      
    </div>
  </div>
</div>
</div>
</section>
</div>
  )
}

export default ViewCoffee
