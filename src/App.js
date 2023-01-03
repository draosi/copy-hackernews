import axios from 'axios'
import {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

const App = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    const fetchData = () => {
        axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(res => {
            setData(res.data.hits)
            console.log(res.data.hits)
        })
        .catch((err) => console.log(err))
    }
    

    useEffect(() => {
        fetchData()
    }, [query])

    console.log(query)

    return(
        <div>
            {/* {query}
            <input onChange={(e) => setQuery(e.target.value)}/> */}
        <SearchBar query={query} setQuery={setQuery}/>
        {data.map((e, i) => {
            return(
                <div key={i}>
                    <Card data={e}/>
                </div>
            )
        })}
        </div>
    )
}

export default App