import React from 'react';
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
    console.log(item.twitchUserName)

    return (
        <div className="flex-row">
            <div>
                <div>{item.twitchUserName}</div>
            </div>
        </div>
    );
}

export default ListItem;