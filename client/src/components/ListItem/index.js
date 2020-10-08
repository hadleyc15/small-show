import React from 'react';
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {

    return (
        <div className="flex-row">
            <div>
                <Link to={`/products/${item._id}`}>
                    <img
                        alt={item.name}
                        src={`/images/${item.image}`}
                    />
                </Link>

            </div>
        </div>
    );
}

export default ListItem;