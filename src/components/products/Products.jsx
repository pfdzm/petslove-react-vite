import React, { useState } from "react";
import "./products.css";
import datas from "./datas.json";

const productList = document.querySelector("#productList");

//TabFilter component
const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState(datas);
  //handle綁定 DOM元素
  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
    console.log(
      "Filtered Products:",
      activeTab === "all"
        ? products
        : products.filter((product) => product.order === tabType)
    );
  };
  const tabItems = ["all", "pre-order", "in-stock", "customized"]; // 添加更多标签，根据需要
  //filter條件設定
  const filterType = () => {
    return activeTab === "all"
      ? products
      : products.filter((product) => product.order === activeTab);
  };

  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ data }) => {
    return (
      // eslint-disable-next-line react/prop-types, react/jsx-no-comment-textnodes
      <div key={data.id} className="products col-lg-3 ">
        <div className="card mb-4 shadow-sm">
          <img
            src={data.img_url}
            className="card-img-top object-fit "
            alt="product"
            style={{ height: "170px" }}
          />
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
  return (
    <>
      <div className="container">
        {/* btnTabs for filtering */}
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {tabItems.map((tabType) => (
              <div key={tabType} className={`nav-item`}>
                <button
                  className={`nav-link ${
                    activeTab === tabType ? "active" : ""
                  }`}
                  id={`nav-${tabType}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target="#nav-${tabType}"
                  type="button"
                  role="tab"
                  aria-controls="nav-${tabType}"
                  aria-selected={activeTab === tabType ? "true" : "false"}
                  onClick={() => handleTabClick(tabType)}
                >
                  {tabType === "pre-order"
                    ? "Pre-Order"
                    : tabType === "in-stock"
                    ? "In Stock"
                    : tabType === "customized"
                    ? "customized"
                    : "All Products"}
                </button>
              </div>
            ))}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {tabItems.map((tabType) => (
            <div
              key={tabType}
              className={`tab-pane fade ${
                activeTab === tabType ? "active show" : ""
              }`}
              id={`nav-${tabType}`}
              role="tabpanel"
              aria-labelledby={`nav-${tabType}-tab`}
            >
              <h2>
                {tabType === "pre-order"
                  ? "Pre-Order"
                  : tabType === "in-stock"
                  ? "In Stock"
                  : "All Products"}
              </h2>

              <div className="row">
                {filterType().map((product) => (
                  <CreateDataCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

{
  /* {datas.map((data) => (
                <CreateDataCard data={data} key={data.id} />
              ))} */
}
