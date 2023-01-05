import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const CardDetails = () => {
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchCardDetails()
    }, [])

    let {id} = useParams()
    
    const fetchCardDetails = async () => {
        try {
          await axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
          .then((res) => setData(res))
        } catch (err) {
          console.log(err);
        }
    }

    console.log(data)
    
    return(
        <div>
            <h1>{data.data.author}</h1>
            <h2>{data.data.title}</h2>
        </div>
    )
}

export default CardDetails