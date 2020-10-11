import React from 'react';
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
    console.log(item)

    return (
        <div className="flex-row">
            <div>
                <Link to={`/products/${item._id}`}>
                    <p>{item.name}</p>
                </Link>

            </div>
        </div>
    );
}

export default ListItem;