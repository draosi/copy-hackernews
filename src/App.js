import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import "./App.css";
import Loader from "./components/Loader";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [numberOfHits, setNumberOfHits] = useState(15);

  useEffect(() => {
    fetchData2();
    console.log(data);
  }, [query, count, numberOfHits]);

  const fetchData2 = async () => {
    try {
      const firstCall = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}&page=${count}`
      );
      const secondCall = await firstCall.data.hits.filter(
        (el) => el.title && el.author && el.url
      );
      secondCall.length = 5;
      setData(secondCall);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

console.log(data)

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? (
        data.map((e, i) => {
          return (
            <div key={i} className="Card">
              <Card {...e} />
            </div>
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <div className="pagination">
        {count > 1 ? (
          <ArrowCircleLeftIcon
            color="primary"
            sx={{ fontSize: 50 }}
            onClick={() => setCount(count - 1)}
          />
        ) : (
          <ArrowCircleLeftIcon color="primary" sx={{ fontSize: 50 }} />
        )}
        <div className="count">{count}</div>
        <ArrowCircleRightIcon
          color="primary"
          sx={{ fontSize: 50 }}
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};

export default App;
