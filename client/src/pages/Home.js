import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import List from '../components/List';

const Home = () => {
  return (
    <div className="container">
  {/* <CategoryMenu /> */}
  <ProductList />
  <List />
</div>
  );
};
export default Home;
