import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './Pages/Homepage'
import { Provider } from 'react-redux'
import { store } from './store'
import CalculatorPage from './Pages/CalculatorPage'
import NavBar from './Components/NavBar'
import ChartPage from './Pages/ChartPage'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/calculator' element={<CalculatorPage />} />
          <Route path='/chart' element={<ChartPage />} />
        </Routes>
      </Provider>
    </div>
  )
}

