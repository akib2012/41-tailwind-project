
import { Suspense } from 'react'
import './App.css'
import Daijynav from './components/daijynav'
import Nabvar from './components/Nabvar'
import Pricingopction from './components/Pricingopctions/Pricingopction'
import Resultchart from './components/Resultchart'


const PrcingPromise = fetch('/PricingdataOpction.json')
.then(Pricedata => Pricedata.json())

function App() {


  return (
    <>
      <Nabvar></Nabvar>

      <Suspense>
        <Pricingopction PrcingPromise={PrcingPromise}></Pricingopction>
      </Suspense>
      {/* <Daijynav></Daijynav> */}
      <Resultchart></Resultchart>
    </>
  )
}

export default App
