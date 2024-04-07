import {Route, HashRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, Skills} from './pages'
const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </Router>

    </main>
  )
}

export default App