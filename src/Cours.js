// import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';

const Cours = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')


  const fetchData2 = async () => {
    try{
      const callData = await axios.get('url')
      // stock le fetch dans une variable
      // Possibilité de venir de nouveau fetch une API en fonction de la première variable callData
      // const newData = await axios.get(`http://hn.algolia.com/api/v1/items/${calData.data.hits[0].objectID`})
      const newData = callData.data.hits.filter(e => e.title)
       
      setData(newData)
      // set la data dans data
      setLoading(!loading)
    }
    catch(err){console.log(err)}
  }

  // Appelé une seule fois lors du mounting de mon component
  // En général utilisé pour un call d'API (quand est ce que tu vas utiliser ce qu'il y a dans le useEffect)
  useEffect(() => {
    fetchData2()
  }, [/*Exception qui permet de réappeler le useEffect. Possibilité d'en avoir plusieurs (en les separant par une virgule*/])

  return (
    <div>
      {query}
      <input onChange = {(e) => setQuery(e.target.value)}/>
      {/* Remplace le useState par l'input */}

    </div>
  );
}

export default Cours;
