import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/navbar'

function App() {
  return (
    //px is padding sm is padding for small screen md is for medium screen like mobile and lg is padding for large screen
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buyCredit" element={<BuyCredit/>}/>

      {/* <Home/>
      <Result/>
      <BuyCredit/> */}
      </Routes>
    </div>
  )
}

export default App
