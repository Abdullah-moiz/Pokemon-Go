
import { AddNewData, Home, Search, UpdateData } from './pages'
import {Route , Routes} from 'react-router-dom'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-data" element={<AddNewData />} />
      <Route path="/update-data/:id" element={<UpdateData />} />
      <Route path="/search/:search" element={<Search />} />
    </Routes>
  )
}

export default App
