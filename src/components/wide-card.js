import React from 'react';
import { Link } from "react-router-dom";

const WideCard = (props) => {
    return (
        <div className="post">

            <div className="thumbnail">
                <img src={props.imgUrl} alt="" />
            </div>

            <div className="details">
                <div className="vertical-align">
                    <h4 className="title">
                        <Link to={"/post/" + props.id}>{props.title}</Link>
                    </h4>
                    <p className="excerpt">
                         {props.excerpt}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default WideCard;