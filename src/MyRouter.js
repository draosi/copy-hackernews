import {Routes, Route, Link} from 'react-router-dom'
import App from './App'
import CardDetails from './components/CardDetails'

const MyRouter = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/news/:id' element={<CardDetails />}/>
            </Routes>
        </div>
    )
}
 export default MyRouter