import { render } from "@testing-library/react"
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Card = (props) => {

    const { data } = props;

    // Delete(item) {
    //     data = data.filter(i => i.index !== item.index)
    //     setState({ data })
    // }
  

    return (
        <div className="container">
            {/* {data.map(card)} */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <img src={data.avatar_url} className="card-img-top" alt="..." width="100" height="400" />
                        <button onClick={()=>props.handleRemoveItem(props.data)} style={{ fontSize: 20, right: 0, top: 0, position: "absolute" }}> * </button>
                        <div className="card-body">
                            <h5 className="card-title text-center">{data.name}</h5>
                            <p className="card-text"><b>HTML URL :</b> {data.html_url}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Node Id: {data.node_id}</li>
                            <li className="list-group-item">Subscriptions Url: {data.subscriptions_url}</li>
                            <li className="list-group-item">Organizations Url: {data.organizations_url}</li>
                        </ul>
                        <div className="card-body">
                            <a href={data.subscriptions_url} className="card-link alert-link">Subscription Url</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Card;
