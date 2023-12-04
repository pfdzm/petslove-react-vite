import React, { useState } from "react";
import "./products.css";
import datas from "./datas.json";

//Tab Filter product component
const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [sortType, setSortType] = useState("asc");
  const [sortedAndFilteredProducts, setSortedAndFilteredProducts] = useState(
    datas.toSorted((a, b) => a.price - b.price)
  );
  const tabItems = ["pre-order", "in-stock", "customized", "all"];
  //handle filter click
  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
    if (tabType === "all") {
      setSortedAndFilteredProducts(
        datas.toSorted((a, b) => {
          return sortType === "asc" ? a.price - b.price : b.price - a.price;
        })
      );
      return;
    }
    setSortedAndFilteredProducts(
      datas
        .filter((d) => d.order === tabType)
        .toSorted((a, b) => {
          return sortType === "asc" ? a.price - b.price : b.price - a.price;
        })
    );
  };

  // handle sort click
  const handleSortType = (selectedSortType) => {
    setSortType(selectedSortType);
    // 如果選擇的排序方式不是 "asc" 或 "desc"，則設定為預設值 "asc"
    setSortedAndFilteredProducts((products) =>
      products.toSorted((a, b) =>
        selectedSortType === "asc" ? a.price - b.price : b.price - a.price
      )
    );
  };

  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ data }) => {
    return (
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
        {/* Filter by order */}
        <div className="filternSort btns d-flex justify-content-between align-items-center">
          {/* Filter by order tab btn */}
          <nav className="filterTabs">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {tabItems.map((tabType) => (
                <div key={tabType} className={`nav-item`}>
                  <button
                    className={`nav-link ${
                      activeTab === tabType ? "active" : ""
                    }`}
                    id={`nav-${tabType}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#nav-${tabType}`}
                    type="button"
                    role="tab"
                    aria-controls={`nav-${tabType}`}
                    aria-selected={activeTab === tabType ? "true" : "false"}
                    onClick={() => handleTabClick(tabType)}
                  >
                    {/* Button content */}
                    {tabType === "pre-order"
                      ? "Pre-Order"
                      : tabType === "in-stock"
                      ? "In Stock"
                      : tabType === "customized"
                      ? "Customized"
                      : "All Products"}
                  </button>
                </div>
              ))}
            </div>
          </nav>
          {/* btnTabs for sorted */}
          {/* Sort dropdown */}
          <div className=" sortBtn">
            <label htmlFor="sortSelect">Sort:</label>
            <select
              id="sortSelect"
              className="filterSelect"
              defaultValue={"increase"}
              onChange={(e) => handleSortType(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low </option>
              {/* 
              not really sure what sorting by Pork or Chicken are supposed to do ...
              <option value="pork">Pork</option>
              <option value="duck">Duck</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="other">Other</option>
               */}
            </select>
          </div>

          {/* btnTabs for filtering */}
        </div>

        {/* Filter by order result content */}
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
              <div className="row">
                {sortedAndFilteredProducts.map((product) => (
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
