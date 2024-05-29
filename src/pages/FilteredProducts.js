import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FilteredProducts.css";
import { Link, useParams } from "react-router-dom";
import { base_url, fetchData } from "../Apis";

function FilteredProducts() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [filerdData, setFilteresData] = useState([]);

  const apiCall = async () => {
    const data = await fetchData();
    setData(data);
  };

  const getData = () => {
    const res = data.filter((i) => i.category === params.name);
    setFilteresData(res);
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    getData();
  }, [filerdData]);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${base_url}/products/` + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      apiCall();
    } catch (error) {
      console.error("Unable to delete the product:", error);
      alert("Unable to delete the product");
    }
  };
  return (
    <div className="container my-4">
      <h4 className="text-center my-4">Showing Results for {params.name}</h4>
      <div
        className="table-container"
        style={{ overflowX: "auto", maxHeight: "80vh" }}
      >
        <table className="table">
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
            {filerdData.length > 0 ? (
              filerdData.map((product, index) => (
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
    </div>
  );
}

export default FilteredProducts;
