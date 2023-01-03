// import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';

const Cours = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  // Appelé une seule fois lors du mounting de mon component
  useEffect(() => {

  }, [/*Exception qui permet de réappeler le useEffect*/])

  return (
    <div>
      {query}
      <input onChange = {(e) => setQuery(e.target.value)}/>
      Remplace le useState par l'input

    </div>
  );
}

export default Cours;
