import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'


function App() {

  const coffees = useLoaderData()

  return (
    <div className='m-20'>
       <h1 className="text-3xl font-bold underline">
        Coffee List: {coffees.length} coffees
      </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
        coffees.map(coffee => {
          return (
            <CoffeeCard key={coffee._id} coffee={coffee}/>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default App
