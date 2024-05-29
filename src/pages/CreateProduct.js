import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../Apis";

function CreateProduct() {
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());
    console.log(product);
    if (
      !product.name ||
      !product.brand ||
      !product.category ||
      !product.price ||
      !product.description ||
      !product.image.name
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch(`${base_url}/products`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        //product created correctly
        navigate("/productlist");
      } else if (response.status === 400) {
        setValidationErrors(data);
      } else {
        alert("Unable to create the product");
      }
    } catch (error) {
      alert("Unable to connect to the server");
    }
  }

  return (
    <div className="container-fluid my-4 create-product-container">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4 create-product-form">
          <h2 className="text-center mb-5">Create Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name="name" />
                <span className="text-danger">{validationErrors.name}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Brand</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" name="brand" />
                <span className="text-danger">{validationErrors.brand}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select name="category" className="form-select">
                  <option value="Other">Other</option>
                  <option value="Phones">Phones</option>
                  <option value="Computers">Computers</option>
                  <option value="Accessories">Accessories</option>
                  <option value="In-Ears">In-Ears</option>
                  <option value="Cameras">Cameras</option>
                </select>
                <span className="text-danger">{validationErrors.category}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="price"
                  type="number"
                  step="0.01"
                  min="1"
                />
                <span className="text-danger">{validationErrors.price}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  rows="3"
                />
                <span className="text-danger">
                  {validationErrors.description}
                </span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Image</label>
              <div className="col-sm-8">
                <input type="file" className="form-control" name="image" />
                <span className="text-danger">{validationErrors.image}</span>
              </div>
            </div>
            <div className=" d-flex justify-content-center gap-3 mt-4 flex-wrap">
              <div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: "200px" }}
                >
                  Submit
                </button>
              </div>
              <div className="">
                <Link
                  to={"/productlist"}
                  className="btn btn-secondary"
                  role="button"
                  style={{ width: "200px" }}
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
