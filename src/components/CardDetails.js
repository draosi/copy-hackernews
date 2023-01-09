import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import "./CardDetails.css";
import parse from "html-react-parser";

const CardDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCardDetails();
  }, []);

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchCardDetails = async () => {
    try {
      const firstCall = await axios.get(
        `http://hn.algolia.com/api/v1/items/${id}`
      );
      const secondCall = await firstCall.data.children.filter(
        (el) => el.author && el.text
      );
      setData(secondCall);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  return (
    <div className="card-details">
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
      {loading ? (
        data.map((e) => {
          {
            console.log(e);
          }
          return (
            <div className="comment">
              <h1>{e.author}</h1>
              <p>{parse(String(e.text))}</p>
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
    </div>
  );
};

export default CardDetails;
