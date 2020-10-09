import React from 'react';

const ListItem = ({ item }) => {
    console.log(item)

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