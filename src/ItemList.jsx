import React from 'react';
import './ItemList.css'

const Itemlist = (props) => {
    return (
        <div className="itemBar">

            {/* This button will call the delete function in App.js with the id provided in props. */}
            <button id="dltbutton" onClick={() => {
                props.remove(props.id);
            }} >-</button>

            <li> {props.text} </li>
        </div>
    )
};

export default Itemlist;
