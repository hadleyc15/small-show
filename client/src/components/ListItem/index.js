import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
// import { idbPromise } from "../../utils/helpers";
// import { useDispatch } from 'react-redux';


const ListItem = ({ item }) => {

    return (
        <div className="flex-row">
            <div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                />
            </div>
            <div>
                <div>{item.name}</div>
                
            </div>
        </div>
    );
}

export default ListItem;