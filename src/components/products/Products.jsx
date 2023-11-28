import React, { useState, useEffect } from "react";
import "./products.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Products() {
  const [products, setProducts] = useState([]);
  const datas = [
    {
      id: new Date().getTime(),
      name: "Pet Snack 1",
      img_url: "src/images/proddetail-1.jpg",
      price: 10.99,
      type: "chicken",
      order: "pre-order",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 2",
      img_url: "src/images/proddetail-2.jpg",
      price: 12.99,
      type: "beef",
      order: "in-stock",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 3",
      img_url: "src/images/proddetail-3.png",
      price: 8.49,
      type: "pork",
      order: "in-stock",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 4",
      img_url: "src/images/proddetail-4.jpg",
      price: 15.99,
      type: "duck",
      order: "customized",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 5",
      img_url: "src/images/proddetail-5.jpg",
      price: 9.99,
      type: "chicken",
      order: "customized",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 6",
      img_url: "src/images/proddetail-6.jpg",
      price: 11.49,
      type: "beef",

      order: "in-stock",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 7",
      img_url: "src/images/proddetail-7.jpg",
      price: 13.99,
      type: "pork",
      order: "in-stock",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 8",
      img_url: "src/images/proddetail-8.jpg",
      price: 14.49,
      type: "duck",
      order: "pre-order",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 9",
      img_url: "src/images/proddetail-9.jpg",
      price: 7.99,
      type: "chicken",
      order: "pre-order",
    },
    {
      id: new Date().getTime(),
      name: "Pet Snack 10",
      img_url: "src/images/proddetail-10.jpg",
      price: 16.99,
      type: "other",
      order: "customized",
    },
  ];
  const productList = document.querySelector("#productList");

  // Function to create a product card JSX
  const createProductCard = (product) => {
    <div key={product.id} className="col-lg-3 col-md-4 product">
      <div className="card mb-4 shadow-sm">
        <img src={product.img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{product.order}</p>
          <p className="card-text">{product.name}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Type: {product.type}</p>
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
    </div>;
  };

  // Function to render products based on the current state
  const renderProducts = () => {
    return datas.map((data) => createProductCard(data));
  };

  // Event handler for filter buttons
  const handleFilterClick = (type) => {
    const filterButtons = document.querySelectorAll(".filter-button"); // Adjust the class based on your actual HTML structure
    productList.innerHTML = "";

    if (buttonType === "allBtn") {
      renderProducts(datas);
    } else {
      filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const buttonType = e.target.dataset.btn;
          console.log(buttonType);

          datas.forEach((data) => {
            if (buttonType === data.order) {
              const card = createProductCard(data);
              productList.appendChild(card);
            }
          });
        });
      });
    }
  };

  // Event handler for sorting
  const handleSortChange = (e) => {
    // Your existing sorting logic
    const sortProductsByPrice = (order) => {
      if (order === "increase") {
        // 按升序排序
        datas.sort((a, b) => a.price - b.price);
      } else if (order === "decrease") {
        // 按降序排序
        datas.sort((a, b) => b.price - a.price);
      }
    };
    const sortSelect = document.querySelector("#sortSelect");
    sortSelect.addEventListener("change", (e) => {
      const selectedValue = e.target.value;
      // 清空产品列表
      productList.innerHTML = "";
      if (selectedValue === "increase" || selectedValue === "decrease") {
        // 按升序排序
        // console.log("Sorting in increasing order");
        sortProductsByPrice(selectedValue);
      } else {
        // 按降序排序
        // 如果选择的是其他选项，则根据类型筛选
        renderProductsByType(selectedValue);
      }

      renderProducts();
    });
  };

  // 根据类型筛选并渲染产品列表
  const renderProductsByType = (type) => {
    productList.innerHTML = ""; // 清空产品列表

    if (type === null) {
      // 如果类型为null，则渲染所有产品
      renderProducts(datas);
    } else {
      // 否则，根据类型筛选并渲染产品
      datas.forEach((data) => {
        if (type === data.type) {
          const card = createProductCard(data);
          productList.appendChild(card);
        }
      });
    }
  };
  // useEffect to render products initially and whenever products state changes
  useEffect(() => {
    // rendering logic
    const productList = document.querySelector("#productList");
    productList.innerHTML = ""; // Clear the existing products

    // Render products based on the current state
    renderProducts(datas);
  }, [datas]);

  return (
    <>
      <div className="container">
        {/* Sort dropdown */}
        <label htmlFor="sortSelect">Sort:</label>
        <select
          id="sortSelect"
          className="filterSelect"
          defaultValue={"increase"}
          onChange={handleSortChange}
        >
          <option value="increase">Low to High</option>
          <option value="decrease">High to Low</option>
        </select>

        {/* Tabs for filtering */}
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab
            eventKey="all"
            title="All"
            onClick={() => handleFilterClick("all")}
          >
            {/* Content for the "All" tab */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary filter-button"
              data-btn="all"
            >
              all
            </button>
          </Tab>
          <Tab
            eventKey="pre-order"
            title="Pre-order"
            onClick={() => handleFilterClick("pre-order")}
          >
            {/* Content for the "Pre-order" tab */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary filter-button"
              data-btn="pre-order"
            >
              Pre-order
            </button>
          </Tab>
          <Tab
            eventKey="in-stock"
            title="In-stock"
            onClick={() => handleFilterClick("in-stock")}
          >
            {/* Content for the "In-stock" tab */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary filter-button"
              data-btn="In-stock"
            >
              In-stock
            </button>
          </Tab>
          <Tab
            eventKey="customized"
            title="Customized"
            onClick={() => handleFilterClick("customized")}
          >
            {/* Content for the "Customized" tab */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary filter-button"
              data-btn="Customized"
            >
              Customized
            </button>
          </Tab>
        </Tabs>

        {/* Product list */}
        <div className="row" id="productList">
          {renderProducts()}
        </div>
      </div>

      {/* Total items */}
      <div className="listNum">
        <p>
          total<span id="listNum">{datas.length}</span>items
        </p>
      </div>
    </>
  );
}
export default Products;
