import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams, useSearchParams } from "react-router-dom";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/product";
import { getAllEvents } from "../redux/actions/event";

const ProductsDetailsPage = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { name } = useParams();
  const id = name;
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  // console.log("allProducts: ", allProducts);
  // console.log("id: ", name);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllEvents());
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [dispatch, allProducts, allEvents]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {
          !eventData && (
            <>
            {data && <SuggestedProduct data={data} />}
            </>
          )
        }
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
