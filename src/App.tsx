import "./App.css"

import NoStar from "./assets/nostar.svg"
import HalfStar from "./assets/halfstar.svg"
import FullStar from "./assets/fullstar.svg"

import { fastfoodPlaces } from "./assets/fastfoodPlaces"

const App = () => {
  const getRatingArray = (rating: number): number[] => {
    const baseArray: number[] = new Array(5)
    baseArray.fill(2)
    const isOddNumber: number = rating % 2

    if (!Number.isInteger(isOddNumber)){ 
      baseArray.fill(1, rating)
      baseArray.fill(0, rating + 1)
    } else baseArray.fill(0, rating)
    
    return baseArray
  }

  const getRating = (rating: number): (JSX.Element | undefined)[] => {
    return getRatingArray(rating).map((item: number, index: number): JSX.Element | undefined => {
      if (item === 0) return <img key={`nostar${item*index+index}`} src={NoStar} alt="No Star" className="no-star" />
      if (item === 1) return <img key={`halfstar${item*index+index}`} src={HalfStar} alt="Half Star" className="half-star" />
      if (item === 2) return <img key={`fullstar${item*index+index}`} src={FullStar} alt="Full Star" className="full-star" />
    })
  }

  return (
    <div className="App">
      <h2>Bon appetit</h2>
      {fastfoodPlaces.map(joint => (
         <div key={joint.id} className="card">
          <div className="name">
            {joint.name}
          </div>
          <div className="rating">
            {getRating(joint.rating)}
          </div>
        </div>
        )
      )}
    </div>
  )
}

export default App
