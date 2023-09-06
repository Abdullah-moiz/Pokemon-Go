
import { AddNewData, Home } from './pages'
import {Route , Routes} from 'react-router-dom'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-data" element={<AddNewData />} />
    </Routes>
  )
}

export default App
