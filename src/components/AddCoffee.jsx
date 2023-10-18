const addCoffee = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('button clicked') testing purpose

        // get all the values from the form
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        // ki ki dorkar info neyar jonne
        const newCoffee = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo
    } 
    console.log(newCoffee)

    // send the data to the server
    // fetch('http://localhost:5000/coffee', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newCoffee)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })

    fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })


    // clear the form
    form.reset()
    }

    
return (
<div className="bg-[#F4F3F0] p-24">
  <h1 className=" text-xl font-extrabold">Add Coffee</h1>
  <form onSubmit={handleSubmit} >
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
      {/* <div className="col-span-full">
        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Upload photo</label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd" />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="photo" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div> */}
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
        Coffee</button>
    </div>
  </form>
</div>
)
}

export default addCoffee