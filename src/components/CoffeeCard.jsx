import Swal from 'sweetalert2'

const CoffeeCard = ({coffee}) => {
    const { _id,
         name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo} = coffee
    
        const handleDelete = () => {
            // console.log(_id)
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  console.log("file has been deleted.")
                }
              })
        }


  return (

    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
    <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
      <img
        src={photo}
        alt="img-blur-shadow"
      />
    </div>
    <div className="p-6">
      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {name}
      </h5>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <p className="font-bold">Description :</p> {details}
      </p>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <p className="font-bold">Category : </p>{category}
      </p>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <p className="font-bold">Brand :</p> {supplier} 
      </p>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <p className="font-bold">Quantity : </p> {quantity}
      </p>
    </div>
    <div className="p-6 pt-2 flex gap-2">
      <button
        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Edit
      </button>
      <button onClick={() => (handleDelete(_id))}
        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Delete
      </button>
      <button
        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        View
      </button>
    </div>
  </div>
  )
}

export default CoffeeCard
