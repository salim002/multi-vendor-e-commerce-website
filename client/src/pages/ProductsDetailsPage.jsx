import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from "react-router-dom";
import SuggestedProduct from "../components/Products/SuggestedProduct"
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/product";

const ProductsDetailsPage = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  const { name } = useParams();
  const id = name;
  const [data, setData] = useState(null);
  // console.log("allProducts: ", allProducts);
  // console.log("id: ", name);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const product = allProducts?.find((product) => product._id === id);
    // console.log("filtered data: ", product);
    setData(product);
  }, [allProducts]);

  return (
    <div>
      <Header />
      <ProductDetails data={data}/>
      {
        data && <SuggestedProduct data={data}/>
      }
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
