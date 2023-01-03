import axios from 'axios'
import {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card';
import './App.css';
import Loader from './components/Loader'

const App = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(res => {
            setData(res.data.hits)
        })
        .catch((err) => console.log(err))
    }
    

    useEffect(() => {
        fetchData()
    }, [query])

    return(
        <div >
            {/* {query}
            <input onChange={(e) => setQuery(e.target.value)}/> */}
        <SearchBar query={query} setQuery={setQuery}/>
        {loading ? 
        data.filter(el => el.title !==null).map((e, i) => {
            return(
                <div key={i} className="Card"  >
                    <Card {...e} />
                </div>
                
            )
       })
       : 
       <div style={{display:'flex', justifyContent: 'center', alignItems:"center", marginTop:'50px'}}>
        <Loader/>
       </div>
        }
        </div>
    )
}

export default App