import { useEffect, useState } from "react";
import ApiData from "./ApiData";
import "./Api.css";

const Api = () => {

  const [apiData, setApiData] = useState([]);

  const apiCalling = async () => {
    const responce = await fetch("https://dummyjson.com/products");
    const {products} = await responce.json();
    const data = products.slice(0, -10);
    setApiData(data);
  }

  useEffect(() => {
    apiCalling();
  }, [])


  return (
    <>
      <h3>Api Calling</h3>
      <div className="allData">
        {
          apiData.map(elem => <ApiData key={elem.id} elements = {elem} />  )
        }
        
      </div>
    </>
  )
};
export default Api;