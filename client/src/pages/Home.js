import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/List';

const Home = () => {
  return (
    <div className="container">
  {/* <CategoryMenu /> */}
  <ProductList />
  <Cart />
</div>
  );
};
export default Home;
