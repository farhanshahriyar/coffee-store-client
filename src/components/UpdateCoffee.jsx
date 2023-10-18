import { Link, useLoaderData } from "react-router-dom";
const updateCoffee = () => {
  const coffee = useLoaderData();
  const { _id,
    name,
   quantity,
   supplier,
   taste,
   category,
   details,
   photo} = coffee

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('button click porse mama') // testing purpose
  }

  return (
    <div> 
       <Link to='/' className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Back</Link>

       <div className="bg-[#F4F3F0] p-24">
  <h1 className=" text-xl font-extrabold">Update Coffee</h1>
  <form onSubmit={handleUpdate}  >
    {/* row 1 - name and quantity */}
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Coffee Name</label>
        <div className="mt-2">
          <input type="text" name="name" id="first-name" autoComplete="given-name" placeholder="enter coffee name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Available
          Quantity</label>
        <div className="mt-2">
          <input type="text" name="quantity" id="first-name" autoComplete="given-name" placeholder="Quantity"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
        </div>
      </div>
    </div>
    {/* row 2 - supplier and taste */}
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="coffee-supplier" className="block text-sm font-medium leading-6 text-gray-900">Supplier
          Name</label>
        <div className="mt-2">
          <input type="text" name="supplier" id="first-name" autoComplete="given-name" placeholder="supplier name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">Taste of
          Coffee</label>
        <div className="mt-2">
          <input type="text" name="taste" id="first-name" autoComplete="given-name" placeholder="taste of coffee"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>
    {/* row 3 - category and details */}
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="coffee-category" className="block text-sm font-medium leading-6 text-gray-900">Coffee
          Category</label>
        <div className="mt-2">
          <input type="text" name="category" id="first-name" autoComplete="given-name"
            placeholder="enter coffee category"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Details</label>
        <div className="mt-2">
          <input type="text" name="details" id="first-name" autoComplete="given-name" placeholder="details of coffee"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      {/* row image */}
      <div className="sm:col-span-3">
        <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">PhotoURL</label>
        <div className="mt-2">
          <input type="text" name="photo" id="first-name" autoComplete="given-name" placeholder="paste photo link"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update
        Coffee</button>
    </div>
  </form>
</div>
        

    </div>
  )
}

export default updateCoffee
