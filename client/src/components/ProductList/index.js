import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ProductItem from "../ProductItem";
// import UserList from "../UserList";
// import { QUERY_PRODUCTS } from "../../utils/queries";
// import spinner from "../../assets/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_ALL_USERS } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  const {loading, data:userName} = useQuery(QUERY_ALL_USERS)
  

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });
      
  //     data.products.forEach((product) => {
  //       idbPromise("products", "put", product);
  //     });
  //     // add else if to check if `loading` is undefined in `useQuery()` Hook
  //   } else if (!loading) {
  //     // since we're offline, get all of the data from the `products` store
  //     idbPromise("products", "get").then((products) => {
  //       // use retrieved data to set global state for offline browsing
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: products,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);
  
  
  function filterUsers() {
    return userName?.users.filter(
      (user) => user.twitchUserName
    );
  }

  return (
    <div className="my-2">
      <h2>Streamers:</h2>
      {!loading ? (
        <div className="video-row">
          {filterUsers().map((users) => (
            <ProductItem
              key={users._id}
              _id={users._id}
              // image={product.image}
              twitchUserName={users.twitchUserName}
              firstName={users.firstName}
              lastName={users.lastName}
            />
          ))}
        </div>
      ) : (
        <h3>No streamers are currently active!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ProductList;
