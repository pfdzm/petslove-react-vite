import React from "react";
import { useState } from "react";
import "./products.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import datas from "./datas.json";

const productList = document.querySelector("#productList");

// Card component: create a product card JSX(Product)
const CreateDataCard = ({ data }) => {
  return (
    <div key={data.id} className="col-lg-3 col-md-4 product">
      <div className="card mb-4 shadow-sm">
        <img src={data.img_url} className="card-img-top" alt="product" />
        <div className="card-body">
          <p className="card-text">{data.order}</p>
          <p className="card-text">{data.name}</p>
          <p className="card-text">Price: ${data.price}</p>
          <p className="card-text">Type: {data.type}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

// Products list component
function Products() {
  return (
    <>
      <div className="container">
        {/* Product list */}
        <div className="row" id="productList">
          {datas.map((data) => (
            <CreateDataCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
