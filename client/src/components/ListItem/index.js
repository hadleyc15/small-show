import React from 'react';

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