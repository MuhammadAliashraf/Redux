import React, { useEffect, useState } from "react";
import Products from "../component/Products";
import axios from "axios";

function Home() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    // console.log("ali");
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        // console.log(res.data)
      })
      .catch((error) => {
        console.log("This is Error", error);
      });
  }, []);
  return (
    <div>
      <Products data={products} />
    </div>
  );
}

export default Home;
