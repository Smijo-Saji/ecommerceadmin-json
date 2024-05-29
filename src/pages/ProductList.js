import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { base_url } from "../Apis";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = filteredProducts.slice(firstIndex, lastIndex);

  const npages = Math.ceil(filteredProducts.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  const getProducts = async () => {
    try {
      const result = await axios.get(
        ` ${base_url}/products?_sort=id&_order=desc`
      );
      if (result.status >= 200 && result.status < 300) {
        setProducts(result.data);
        setFilteredProducts(result.data);
      } else {
        alert("Access failed");
      }
    } catch (error) {
      console.error("There was an error fetching the products:", error);
      alert("There was an error fetching the products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${base_url}/products/` + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      getProducts();
    } catch (error) {
      console.error("Unable to delete the product:", error);
      alert("Unable to delete the product");
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      (product.brand + product.name + product.category)
        .toLowerCase()
        .includes(searchTerm)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  return (
    <div className="container-fluid my-4 product-list">
      <h2 className="text-center mb-4">Products</h2>
      <div className="d-flex justify-content-between   flex-wrap mb-3 gap-2">
        <div>
          <Link
            to={"/addproduct"}
            className="btn btn-primary me-1"
            role="button"
          >
            Add Product
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={getProducts}
          >
            Refresh
          </button>
        </div>
        <div className=" d-flex align-items-center border ps-3 rounded">
          <img
            src="https://i.postimg.cc/Dw1PB94X/711319.png"
            alt=""
            className="search-icon me-3"
          />
          <input
            type="text"
            className="form-control border-0 search-input"
            style={{ width: "400px" }}
            placeholder="Search by brand"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="table-container">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {records.length > 0 ? (
              records.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>₹ {product.price}</td>
                  <td>
                    <img
                      src={`${base_url}/images/` + product.imageFilename}
                      alt="..."
                      className="prod-img"
                    />
                  </td>
                  <td>{product.createdAt.slice(0, 10)}</td>
                  <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                    <Link
                      to={`/editproduct/${product.id}`}
                      className="btn btn-primary btn-sm me-1"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
                  ---- No Products ----
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <nav className="pagination-div">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <button className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={nextPage}
              disabled={currentPage === npages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductList;
